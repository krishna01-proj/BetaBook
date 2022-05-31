import React from "react";
import "./rightbar.css";
import Online from "../online/Online";
import {Users} from '../../Data'

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="rightbarContainer">
          <img className="giftImg" src="\assets\feeds\gift.png" alt="" />
          <span className="birthText">
            <b>Ramesh</b> and <b>2 others </b>have birthday today
          </span>
        </div>
        <img className="add" src="/assets/kfc.jpg" />
        <h4 className="onlineFriends">Friends Online</h4>
        <ul className="onlineFriendsList">
          {Users.map((u)=>(
          <Online key={u.id} users={u}/>
          ))} 
          
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
