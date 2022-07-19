import React from 'react';
import "./topbar.css"
import { Search, Chat, Notifications, Person } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function Topbar(props) {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <Link to='/' style = {{textDecoration: "none"}} >
                    <span className="logo">Social Media</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"></Search>
                    <input placeholder='Search for friends, posts, or video' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>
            
            
        </div>
    );
}

export default Topbar;