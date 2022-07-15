import React from 'react';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import './rightbar.css'

function Rightbar(props) {
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 others</b> Have birthdays today
                    </span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    { Users.map((u) =>(
                        <Online key= {u.id} user = {u}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Rightbar;