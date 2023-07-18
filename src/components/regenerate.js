
import { RefreshIcon } from "../svg/svgicon"

export default function Regenerate(){
    return (
        <div>
            <div className="h-full flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center">
                <button class="btn relative btn-neutral -z-0 border-0 " as="button">
                    <div class="flex w-full gap-2 items-center justify-center">
                        <RefreshIcon />
                        Regenerate response
                    </div>
                </button>
            </div>
        </div>
    )
}