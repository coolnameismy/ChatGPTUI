import {SendIcon} from '../svg/svgicon'

export default function ChatTextview() {
    return (
        <>
            <div className="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:pl-2 md:w-[calc(100%-.5rem)]">
                <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
                    <div className="relative flex h-full flex-1 items-stretch md:flex-col" role="presentation">
                        <div className="flex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs">
                            <textarea id="prompt-textarea" tabindex="0" data-id="root" rows="1" placeholder="Send a message" className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0" style={{maxHeight: "200px",height: "24px",overflowY: "hidden"}}></textarea>
                            <button disabled="" className="absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40">
                                <span className="" data-state="closed">
                                    <SendIcon />
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            <div className="px-3 pb-3 pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pb-6 md:pt-3">
            <span>ChatGPT may produce inaccurate information about people, places, or facts. <a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank" rel="noreferrer" class="underline">Link-LLM-CLIENT-REACT 1.0.0 Version</a></span></div></div>
        </>
    )
}
