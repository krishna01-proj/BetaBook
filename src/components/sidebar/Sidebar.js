import React from "react";
import "./sidebar.css";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import GroupIcon from "@material-ui/icons/Group";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import WorkIcon from "@material-ui/icons/Work";
import HelpIcon from "@material-ui/icons/Help";
import EventIcon from "@material-ui/icons/Event";
import {Posts} from '../../Data'


function Sidebar() {
  return (
    <div className="sidebarMain">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItems">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListItemTest">Feed</span>
          </li>
          <li className="sidebarListItems">
            <ChatBubbleIcon className="sidebarIcon" />
            <span className="sidebarListItemTest">Chats</span>
          </li>
          <li className="sidebarListItems">
            <PlayCircleFilledIcon className="sidebarIcon" />
            <span className="sidebarListItemTest">Videos</span>
          </li>
          <li className="sidebarListItems">
            <GroupIcon className="sidebarIcon" />
            <span className="sidebarListItemTest">Questions</span>
          </li>
          <li className="sidebarListItems">
            <BookmarkIcon className="sidebarIcon" />
            <span className="sidebarListItemTest">Bookmarks</span>
          </li>
          <li className="sidebarListItems">
            <HelpIcon className="sidebarIcon" />
            <span className="sidebarListItemTest">Help</span>
          </li>
          <li className="sidebarListItems">
            <EventIcon className="sidebarIcon" />
            <span className="sidebarListItemTest">Events</span>
          </li>
          <li className="sidebarListItems">
            <WorkIcon className="sidebarIcon" />
            <span className="sidebarListItemTest">Work</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr style={{ margin: "10px" }} />
        <ul classname="sidebarFriendul">
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/people/mike.jpg"
              alt="Mike"
            />
            <span className="sidebarFriendName">Ashwin</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/people/name1.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Alia</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/people/ind2.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Sam</span>
          </li>
          <li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/people/john.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Mukesh</span>
          </li><li className="sidebarFriend">
            <img
              className="sidebarFriendImg"
              src="/assets/people/jogn.jpg"
              alt=""
            />
            <span className="sidebarFriendName">Maire</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
