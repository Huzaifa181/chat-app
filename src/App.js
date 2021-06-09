import React, { useEffect } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import 'antd/dist/antd.css';
import Sidebar from './Sidebar'
import Chat from './Chat'
import './App.css'
function App() {
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
