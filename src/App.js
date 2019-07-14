import React from 'react';
import './App.css';
import MessageContainer from './containers/MessageContainer'

function App() {
  console.log('rerender?')
  return (
    <div className="App">
      <MessageContainer/>
    </div>
  );
}


export default App;
