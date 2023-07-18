import UserPanel from '../components/user_panel'
import AddChatPanel from '../components/addchat_panel';
import ChatHistoryListPanel from '../components/chat_history_list';

function LeftView() {
    return (
        <div className="left overflow-x-hidden bg-dark1 h-full w-[260px] flex-col">
            <div className="scrollbar-trigger relative  w-full flex-1 items-start border-white/20 p-2">
                <nav className="flex h-full w-full flex-col p-2">
                    <AddChatPanel />
                    <ChatHistoryListPanel />
                <UserPanel />
                </nav>
            </div>
                
        </div>
    );
}
export default LeftView;