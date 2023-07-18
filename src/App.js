import './App.css';
import LeftView from './views/left_view'
import ChatContainer from './components/chat_container'


function App() {

  return (
    <div className="app fixed top-0 left-0 right-0 bottom-0 flex h-full w-full ">
      <LeftView />
      <ChatContainer />
    </div>
  );
}

export default App;