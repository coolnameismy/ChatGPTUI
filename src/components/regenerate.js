
import { useContext } from "react";
import { RefreshIcon } from "../svg/svgicon"
import { ChatModelContext } from "../model/chat_model";

export default function Regenerate(){
    const model = useContext(ChatModelContext);
    const isshow = model.isChatting()
    return (
        <>
        {isshow && (<div>
            <div className="h-full flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center">
                <button className="btn relative btn-neutral -z-0 border-0 " as="button">
                    <div className="flex w-full gap-2 items-center justify-center">
                        <RefreshIcon />
                        Regenerate response
                    </div>
                </button>
            </div>
        </div>)}
        </>
    )
}