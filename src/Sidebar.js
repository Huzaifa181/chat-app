import React from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import {IconButton} from '@material-ui/core';
import './Sidebar.css'
const Sidebar = () => {
    return ( 
        <div className = 'sidebar' >
            <div className="sidebar__header">
                
            <div className="sidebar__headerRight">
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
        </div>
    )
}

export default Sidebar