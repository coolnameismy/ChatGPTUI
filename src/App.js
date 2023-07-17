import './App.css';
import LeftContainer from './components/left_container'
// import ChatContainer from './components/chat_container'


function App() {

  return (
    <div className="app fixed top-0 left-0 right-0 bottom-0 flex h-full w-full ">
      <LeftContainer />
      {/* <ChatContainer /> */}
    </div>
  );
}

export default App;