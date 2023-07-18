import { GoodIcon,BadIcon,ChatbotIcon } from '../svg/svgicon'
import classNames from 'classnames'
// GoodIcon,BadIcon,ChatbotIcon

export default function ChatCellView(props) {
    const { role = "bot" } = props
    // console.log(">>> role",role)
    let chat_cell_styles = classNames({
        "chat_cell":true,
        "group":true,
        "w-full":true,
        "text-gray-800 ":true,
        "dark:text-gray-100 ":true,
        "border-b ":true,
        "border-black/10 ":true,
        "bg-gray-50 ":true,
        "dark:border-gray-900/50 ": role === "bot" ,
    })
    chat_cell_styles += role === "bot" ? "dark:bg-dark3" : "dark:bg-dark2";
    return (
        <div className={chat_cell_styles}>
            <div className="flex p-4 gap-4 text-base md:gap-6 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl md:py-6 lg:px-0 m-auto">
                <div className="flex-shrink-0 flex flex-col relative items-end">
                    <div className="w-[30px]">
                        <div className="relative p-1 rounded-sm h-[30px] w-[30px] text-white flex items-center justify-center" style={{backgroundColor: "rgb(25, 195, 125)"}}>
                            <ChatbotIcon />
                        </div>
                    </div>
                </div>
                <div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
                    <div className="flex flex-grow flex-col gap-3">
                        <div className="min-h-[20px] flex items-start overflow-x-auto whitespace-pre-wrap break-words flex-col gap-4">
                            <div className="markdown prose w-full break-words dark:prose-invert dark">
                                <p>Sure! Here you go:</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between lg:block">
                        <div
                            className="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-2 md:gap-3 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible">
                            <div className="flex gap-1">
                                <button className="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400">
                                    <GoodIcon />
                                </button>
                                <button
                                    className="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400">
                                    <BadIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
