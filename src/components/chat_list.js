import { LightningIcon, DownIcon} from '../svg/svgicon'

export default function ChatListView() {
    return (
        <div className="flex-1 overflow-hidden">
            <div className="react-scroll-to-bottom--css-hejsg-79elbk h-full dark:bg-gray-800">
                <div className="react-scroll-to-bottom--css-hejsg-1n7m0yu">
                    <div className="flex flex-col text-sm dark:bg-gray-800">
                        <header className="sticky top-0 z-[9] w-full" data-projection-id="117" style="top: -50px; transform: translateY(-2%);">
                            <div className="relative z-20 flex flex-wrap items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300">
                                <LightningIcon />
                                <span>Model: Default (GPT-3.5)</span>
                            </div>
                        </header>
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
