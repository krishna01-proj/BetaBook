import React from "react";
import "./share.css";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LabelIcon from '@material-ui/icons/Label';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/people/ar.jpg" />
          <input placeholder="share ur thoughts " className="shareInput" />
        </div>
        <hr />
        <div className="shareBottom ">
          <div className="shareMenu ">
            <div className="shareOptions ">
              <PermMediaIcon htmlColor="red" className="mediaImg" />
              <span className="shareOptionsText   ">Photo or Videos</span>
            </div>
            <div className="shareOptions ">
              <EmojiEmotionsIcon className="mediaImg" />
              <span className="shareOptionsText">Feelings</span>
            </div>
            <div className="shareOptions ">
              <LocationOnIcon htmlColor="blue" className="mediaImg" />
              <span className="shareOptionsText   ">Location</span>
            </div>
            <div className="shareOptions ">
              <LabelIcon htmlColor="green" className="mediaImg" />
              <span className="shareOptionsText">Tag</span>
            </div>
          </div>
          <button className="shareBtn">share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
