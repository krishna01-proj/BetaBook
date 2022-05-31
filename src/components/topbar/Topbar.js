import React from "react";
import "./topbar.css";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import NotificationsIcon from "@material-ui/icons/Notifications";
function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarleft">
        <span className="logo">Beta Book</span>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
          <SearchIcon className="searchicon"/>
          <input placeholder="Search for friends" className="searchinput" />
        </div>
      </div>
      <div className="topbarright">
        <div className="toplinks">
          <div className="topbarlinks">Home Page</div>
          <div className="topbarlinks">Timeline</div>
        </div>
        <div className="topIcon">
          <div className="icon">
            <PersonIcon />
            <span className="topbaricon">1</span>
          </div>
          <div className="icon">
            <ChatBubbleIcon />
            <span className="topbaricon">1</span>
          </div>
          <div className="icon">
            <NotificationsIcon />
            <span className="topbaricon">1</span>
          </div>
        </div>
        <img src="/assets/people/ar.jpg" className="profilePic"/>
        
      </div>
    </div>
  );
}

export default Topbar;
