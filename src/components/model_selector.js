import { GPT35Icon, GPT40Icon } from '../svg/svgicon';


export default function ModelSelector() {
    return (
        <div className="absolute  w-full right-4 top-2 z-10 hidden flex-col gap-2 md:flex">
            <div className="px-2 relative w-full flex flex-col h-full py-2 md:py-6 ">
                <div className="relative flex flex-col items-stretch justify-center gap-2 sm:items-center">
                    <div className="relative flex flex-col items-stretch justify-center gap-2 sm:items-center">
                        <div className="relative flex rounded-xl bg-gray-100 p-1 text-gray-900 dark:bg-dark1">
                            <ul className="flex w-full list-none gap-1 sm:w-auto">
                                <li className="group/toggle w-full">
                                    <button type="button" id="radix-:r34:" aria-haspopup="menu" aria-expanded="false" data-state="closed" className="w-full cursor-pointer">
                                        <div className="group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-dark3 dark:text-gray-100">
                                            <span className="relative max-[370px]:hidden">
                                                <GPT35Icon />
                                            </span>
                                            <span className="truncate text-sm font-medium md:pr-1.5 pr-1.5">GPT-3.5</span>
                                        </div>
                                    </button>
                                </li>
                                <li className="group/toggle w-full">
                                    <button type="button" id="radix-:r36:" aria-haspopup="menu" aria-expanded="false" data-state="closed" className="w-full cursor-pointer">
                                        <div className="group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-transparent text-gray-500 hover:text-gray-800 hover:dark:text-gray-100">
                                            <span className="relative max-[370px]:hidden">
                                                <GPT40Icon />
                                            </span>
                                            <span className="truncate text-sm font-medium md:pr-1.5 pr-1.5">GPT-4</span>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}