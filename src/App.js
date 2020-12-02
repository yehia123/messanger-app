import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {FormControl, InputLabel, Input, Button} from '@material-ui/core';
import Message from './Components/Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([
    {username: "John", text: "test1"},
    {username: "qazi", text: "test2"}
  ]);
  const [username, setUsername] = useState('');

  //Runs the code on a condition
  // if the input array is empty that means the code will only run once
  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    setMessage([...messages, {username: username, text: input}]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Welcome {username}</h1>
    <form>
      <FormControl>
        <InputLabel>Enter Message </InputLabel>
        <Input value ={input} onChange={event => setInput(event.target.value)}/>
        <Button disabled={!input} variant="contained" color='primary' type='submit' onClick={sendMessage} >Send message</Button>
      </FormControl>
    </form>
      {
        messages.map(message => (
          <Message username={username} message={message} />
        ))
      }

    </div>
  );
}

export default App;
