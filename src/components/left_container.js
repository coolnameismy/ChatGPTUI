
import {HideShowIcon,AddIcon,ChatIcon} from '../svg/svgicon';
import UserPanel from '../components/user_panel'


function LeftContainer() {
    function render_chatlist() {
        const chatlist = [];
        for (let i = 0; i < 20; i++) {
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
        <div className="left overflow-x-hidden bg-dark1 h-full w-[260px] flex-col">
            <div className="scrollbar-trigger relative  w-full flex-1 items-start border-white/20 p-2">
                <nav className="flex h-full w-full flex-col p-2">
                    {/* start new chat panel */}
                    <div className="mb-1 flex flex-row gap-2">
                        <a className="flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow">
                            <AddIcon /> New chat
                        </a>
                        <span className="" data-state="closed">
                            <a className="flex p-3 gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center">
                                <HideShowIcon />
                            </a>
                        </span>
                    </div>
                    {/* end new chat panel */}

                    {/* start chat history panel */}
                    <div className="flex-col flex-1 transition-opacity duration-500 overflow-y-auto -mr-2">
                        <div className="flex flex-col gap-2 pb-2 text-gray-100 text-sm">
                            <ol className="relative">
                                {render_chatlist()}
                            </ol>
                        </div>
                    </div>
                    {/* end chat history panel */}
                <UserPanel />
                </nav>
            </div>
                
        </div>
    );
}

export default LeftContainer;