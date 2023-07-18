
import {ChatIcon} from '../svg/svgicon';

export default function ChatHistoryListPanel() {
    function render_chatlist() {
        const chatlist = [];
        for (let i = 0; i < 17; i++) {
            chatlist.push("New Chat:" + i);
        }

        return chatlist.map((item, i) => {
            return <li className="relative" data-projection-id="141" key={i}>
                <a className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all )} )} hover:pr-4 group">
                    <ChatIcon />
                    <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">{item}<div className="absolute inset-y-0 right-0 w-8 z-10 group-hover:from-[#2A2B32]"></div></div>
                </a>
            </li>
        });
    }
    return (
        <div className="flex-col flex-1 transition-opacity duration-500 overflow-y-auto -mr-2">
            <div className="flex flex-col gap-2 pb-2 text-gray-100 text-sm">
                <ol className="relative">
                    {render_chatlist()}
                </ol>
            </div>
        </div>
    )
}
