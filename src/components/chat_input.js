import React, { useContext, useState } from 'react';
import { ChatModelContext } from '../model/chat_model';
import { SendIcon, RefreshIcon } from '../svg/svgicon'
import AppInfo from './app_info'
import Regenerate from './regenerate'

export default function ChatInput() {
    const model = useContext(ChatModelContext);
    const [text , setText] = useState('')

    const textareaRef = React.useRef(null);
  
    function handleChange(e) {
        setText(e.target.value)
    }
    
    async function handleSubmit(e) {
        setText('')
        textareaRef.current.focus();
        // model.sendMessage(model.currIndex,text)
        model.ask(text)
        e.preventDefault();
    }
    function handKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e)
        }
    }
    let buttonStyle = { 
        width: 32, height: 32 ,backgroundColor : 'unset'
    }
    if(text.length > 0) buttonStyle.backgroundColor = "rgb(25, 195, 125)"
    return (
        <div 
            className="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:pl-2 md:w-[calc(100%-.5rem)]"
            style={{backgroundImage:"linear-gradient(180deg,rgba(53,55,64,0),#353740 58.85%)"}}
        >
            <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl"
                  onSubmit={handleSubmit}
            >
                <div className="relative flex h-full flex-1 items-stretch md:flex-col" role="presentation">
                    <Regenerate />
                    <div className="flex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-dark2 rounded-xl shadow-xs dark:shadow-xs">
                        <textarea id="prompt-textarea" tabIndex="0" data-id="root" rows="1" placeholder="Send a message" className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0" style={{ maxHeight: "200px", height: "24px", overflowY: "hidden", outline: "none" }}
                                onChange={handleChange} 
                                onKeyDown={handKeyDown}
                                value={text}
                                ref={textareaRef}
                        ></textarea>
                        <button className="absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40"
                            style={buttonStyle} disabled=""
                        >
                            <span className="" data-state="closed"><SendIcon /></span>
                        </button>
                    </div>
                </div>
            </form>
            <AppInfo />
        </div>
    )
}
