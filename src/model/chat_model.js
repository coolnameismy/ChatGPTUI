import { fetchChatList, fetchCurrIndex, fetchUserInfo } from "../services/service";
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


function findChatById(model,id){
    if(!id) return null;
    const chats =  model.chats || [];
    for(let i = 0; i < chats.length; i++){
        if(chats[i].id === id) {
            return chats[i];
        }
    }
    return null;
}

function initAction(model,setModel){

    // set current chat
    const activeChat = (chatId) => {
        const newm = {
            ...model,
            currIndex:chatId
        }
        setModel(newm);
    }
    // add new chat
    const newchat = (theme = "new chat", modelname = "GPT-3.5") => {
        // {id:'1',theme:'weather',model:'GPT-3.5',messages:[{user:"It's nice outside today."}]},
        const id = model.chats.length;
        const messages = [];
        const currIndex = id;
        model.chats.push({
            id,theme,model:modelname,messages
        })
        const newm = {
            ...model,
            currIndex
        }
        setModel(newm);
    }

    const setModelByChatId = (modelName = "GPT-3.5") => {
        const {currIndex,chats} = model;
        for(let i = 0; i < chats.length; i++){
            if(chats[i].id === currIndex) {
                chats[i].model = modelName;
            }
        }
        const newm = {...model}
        setModel(newm)
    }

    const setThemeByChatId = (id,theme = "") => {
        if(!id) return;
        const { chats = [] } = model;
        for(let i = 0; i < chats.length; i++){
            if(chats[i].id === id) {
                chats[i].theme = theme;
            }
        }
        const newm = {...model}
        setModel(newm)
    }

    const sendMessage = (id,text = "") => {
        if(!id) return;
        if(text.trim() === "") return;
        const { chats = [] } = model;
        for(let i = 0; i < chats.length; i++){
            if(chats[i].id === id) {
                chats[i].messages.push({user:text});
            }
        }
        const newm = {...model}
        setModel(newm)
    }
    const respMessage = (id,text = "") => {
        if(!id) return;
        const { chats = [] } = model;
        for(let i = 0; i < chats.length; i++){
            if(chats[i].id === id) {
                chats[i].messages.push({bot:text});
            }
        }
        const newm = {...model}
        setModel(newm)
    }

    const isChatting = () => {
        if(!model || !model.chats) return false
        const {chats,currIndex} = model;
        let currChat;
        for(let i = 0; i < chats.length; i++){
            if(chats[i].id === currIndex) {
                currChat = chats[i]
                break;
            }
        }
        if(currChat && currChat.messages && currChat.messages.length > 0) return true
        return false
    }

    const findCurrChat = () => {
        const currChat = findChatById(model,model.currIndex);
        return currChat;
    }

    Object.assign(model,{activeChat,newchat,setModelByChatId,setThemeByChatId,sendMessage,respMessage,isChatting,findCurrChat})
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