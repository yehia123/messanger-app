import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {
  const [input, setInput] = useState('');
  return (
    <div className="App">
     <input value ={input} onChange={event => setInput(event.target.value)}/>
     <button>Send message</button>
    </div>
  );
}

export default App;
