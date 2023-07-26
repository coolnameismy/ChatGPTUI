
import { useContext } from 'react';
import {ChatIcon} from '../svg/svgicon';
import { ChatModelContext } from '../model/chat_model';
import classNames from 'classnames';

export default function ChatHistoryListPanel() {
    const model = useContext(ChatModelContext);
    function render_chatlist() {
        let {chats = [],currIndex} = model;
        chats.sort((a,b)=>b.id-a.id)
        return chats.map((chat) => {
            let classn = classNames("flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all )} )} hover:pr-4 group",{
                "bg-dark2":chat.id === currIndex,
            })
            return <li className="relative" data-projection-id="141" key={chat.id} onClick={()=>model.activeChat(chat.id)}>
                        <a className={classn}>
                            <ChatIcon />
                            <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">{chat.theme}<div className="absolute inset-y-0 right-0 w-8 z-10 group-hover:from-[#2A2B32]"></div></div>
                        </a>
                    </li>
        })
    }
    return (
        <div className="flex-col flex-1 transition-opacity duration-500 overflow-y-auto -mr-2">
            <div className="flex flex-col gap-2 pb-2 text-gray-100 text-sm" style={{ maxHeight: window.innerHeight - 135}}>
                <ol className="relative">
                    {render_chatlist()}
                </ol>
            </div>
        </div>
    )
}
