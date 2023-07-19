
import { useContext } from 'react';
import {HideShowIcon,AddIcon} from '../svg/svgicon';
import { ChatModelContext } from '../model/chat_model';

export default function AddChatPanel() {
    const model = useContext(ChatModelContext);
    return (
        <div className="mb-1 flex flex-row gap-2">
            <a 
                onClick={()=> model.newchat()}
                className="flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow">
                <AddIcon /> New chat
            </a>
            <span className="" data-state="closed">
                <a className="flex p-3 gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center">
                    <HideShowIcon />
                </a>
            </span>
        </div>
    )
}
