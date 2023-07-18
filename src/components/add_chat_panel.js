
import {HideShowIcon,AddIcon} from '../svg/svgicon';

export default function AddChatPanel() {
    return (
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
    )
}
