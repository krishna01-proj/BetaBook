import React from "react";

function Online({users}) {
  return (
    <li className="onlineFriend">
      <div className="onlineContainer">
        <img
          className="onlineProfileImage"
         src={users.profilePicture}
          alt=""
        />
        <span className="righbarOnline"></span>
        <span className="onlineName">{users.username}</span>
      </div>
    </li>
  );
}

export default Online;
