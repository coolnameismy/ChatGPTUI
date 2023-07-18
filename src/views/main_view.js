
import ModelSelector from '../components/model_selector'
import ChatInput from '../components/chat_input'
import ChatList from '../components/chat_list'

export default function MainView() {
    return (
        <div className="relative flex h-full max-w-full flex-1 overflow-hidden bg-dark2">
            <div className="flex h-full max-w-full flex-1 flex-col">
                <main className="relative h-full w-full transition-width flex flex-col overflow-auto items-stretch flex-1">
                    <ModelSelector />
                    {/* <ChatList /> */}
                    <ChatInput />
                </main>
            </div>
        </div>
    )
}
