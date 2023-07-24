
import ModelSelector from '../components/model_selector'
import ChatInput from '../components/chat_input'
import ChatList from '../components/chat_list'
import { ChatModelContext } from '../model/chat_model';
import { useContext } from 'react';

export default function MainView() {
    const model = useContext(ChatModelContext);
    const isshow = model.isChatting()
    return (
        <div className="relative flex h-full max-w-full flex-1 overflow-hidden bg-dark2">
            <div className="flex h-full max-w-full flex-1 flex-col">
                <main className="relative h-full w-full transition-width flex flex-col overflow-auto items-stretch flex-1">
                    <ModelSelector />
                    {isshow && (<ChatList />)}
                    <ChatInput />
                </main>
            </div>
        </div>
    )
}
