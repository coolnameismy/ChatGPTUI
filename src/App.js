import './App.css';
import LeftView from './views/left_view'
import MainView from './views/main_view'
import useChatModelState,{ChatModelContext} from './model/chat_model';
import React, { Provider, useEffect, useState } from 'react';


 function App() {
  let [model,setModel] = useChatModelState({});
  return (
      <ChatModelContext.Provider value={model}>
        <div className="app fixed top-0 left-0 right-0 bottom-0 flex h-full w-full ">
          <LeftView />
          <MainView />
        </div>
      </ChatModelContext.Provider>
  );
}

export default App;