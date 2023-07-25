import { render } from '@testing-library/react'
import { LightningIcon, DownIcon} from '../svg/svgicon'
import ChatCell from './chat_cell'
import { useContext } from 'react';
import { ChatModelContext } from '../model/chat_model';

export default function ChatList() {
    const model = useContext(ChatModelContext);
    const chat = model.findCurrChat();
    function renderChatCell(){
        const {messages = []} = chat;
        return messages.map((item,index) => {
            return <ChatCell key={index} {...item} />
        })
    }

    return (
        <div className="chat_list flex-1 overflow-hidden">
            <div className="react-scroll-to-bottom--css-hejsg-79elbk h-full dark:bg-dark2">
                <div className="react-scroll-to-bottom--css-hejsg-1n7m0yu" style={{height:"100%",overflowY:"auto",width:"100%"}}>
                    <div className="flex flex-col text-sm dark:bg-gray-800">
                        <header className="sticky top-0 z-[9] w-full translate-y-2" data-projection-id="117" style={{top: "-50px",transform: "translateY(-2%)"}}>
                            <div className="relative z-20 flex flex-wrap items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-dark3 dark:text-gray-300">
                                <LightningIcon />
                                <span>Model: Default ({chat.model})</span>
                            </div>
                        </header>
                        {renderChatCell()}
                    </div>
                    <button className="cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200">
                        <DownIcon />
                    </button>
                </div>
                <button className="react-scroll-to-bottom--css-hejsg-1tj0vk3 scroll-convo" type="button"></button>
               
            </div>
            
        </div>
    )
}
