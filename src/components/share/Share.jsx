import React from 'react';
import './share.css'
import {PermMedia} from '@material-ui/icons'

function Share(props) {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                    <input 
                    placeholder="What's on your mind? " 
                    className="shareInput" 
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className="shareIcon" />
                            <span className="shareOptionText">Photo or Video <video src=""></video></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Share;