
import ModelSelector from './model_selector'
import ChatTextview from './chat_textview'
import ChatListView from './chat_list'

export default function ChatContainer() {
    return (
        <div className="relative flex h-full max-w-full flex-1 overflow-hidden bg-dark2">
            <div className="flex h-full max-w-full flex-1 flex-col">
                <main className="relative h-full w-full transition-width flex flex-col overflow-auto items-stretch flex-1">
                    <div className="absolute  w-full right-4 top-2 z-10 hidden flex-col gap-2 md:flex">
                        <div className="px-2 relative w-full flex flex-col h-full py-2 md:py-6 ">
                            <div className="relative flex flex-col items-stretch justify-center gap-2 sm:items-center">
                                <ModelSelector />
                            </div>
                        </div>
                    </div>
                    <ChatListView />
                    <ChatTextview />
                </main>
            </div>
        </div>
    )
}
