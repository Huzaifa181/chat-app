import React from 'react'
import {Avatar,IconButton} from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import './Chat.css'
const Chat = () => {
    return (
        <div className='chat'>
           <div className='chat__header'>
            <Avatar/>
            
            <div className='chat__headerInfo'>
                <h3>Room name</h3>
                <p>Last Seen at</p>
            </div>
            <div className='chat__headerRight'>
            <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className='chat__body'>
                <p className='chat__message'>
                    <span className='chat__name'>Huzaifa</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Chat
