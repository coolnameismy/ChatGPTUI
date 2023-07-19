import { fetchChatList, fetchCurrIndex, fetchUserInfo } from "./services/service";
import React, { useContext, useEffect, useState } from 'react';

async function initData() {
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

function initAction(model,setModel){

    // 设置当前chat
    const activeChat = (chatId) => {
        const newm = {
            ...model,
            currIndex:chatId
        }
        setModel(newm);
    }


    Object.assign(model,{activeChat})
}


export default function useChatModelState() {
    const [model,setModel] = useState({});
    useEffect(()=> {
      (async () => {
        const chatdata = await initData();
        setModel(chatdata);
      })()
    },[])
    window.model = model;
    // 绑定model action
    initAction(model,setModel)
    return [model,setModel];
}

export const ChatModelContext = React.createContext({});
// export const chatmodel = useContext(ChatModelContext);