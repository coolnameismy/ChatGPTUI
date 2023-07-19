import { fetchChatList, fetchCurrIndex, fetchUserInfo } from "./services/service";
import React, { useContext, useEffect, useState } from 'react';
async function init() {
    return new Promise(async (resolve,reject) => {
        const { data:chatResp } = await fetchChatList();
        const userInforesp = await fetchUserInfo();
        const {currIndex,chats} = chatResp
        const { name, pic } = userInforesp.data;
        resolve({
            chats,currIndex,name, pic
        })
    })
}
export default function useChatModelState() {
    const [model,setModel] = useState({});
    useEffect(()=> {
      const initData = async () => {
        const chatdata = await init();
        setModel(chatdata);
      } 
      initData()
    },[])
    window.model = model;
    return [model,setModel];
}

export const ChatModelContext = React.createContext({});
// export const chatmodel = useContext(ChatModelContext);