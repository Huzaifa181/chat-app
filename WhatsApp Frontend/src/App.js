import React, { useEffect,useState } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import Pusher from 'pusher-js';
import 'antd/dist/antd.css';
import Sidebar from './Sidebar'
import Chat from './Chat'
import './App.css'
import axios from './axios'

function App() {
  const [messages, setMessages]=useState([])
  useEffect(()=>{
    axios.get('/messages/sync')
    .then(res=>{
      console.log(res)
      setMessages(res.data)
    })
  },[])
  useEffect(()=>{
    const pusher = new Pusher('81e0491a168617f6f216', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('inserted');
    channel.bind('messages', function(data) {
      alert(JSON.stringify(data));
    });
  })
  return (
    <div className='app'>
        <div className='app__body'>
        <Sidebar/>
        <Chat/>
        </div>      
  </div>
  );
}

export default App;
