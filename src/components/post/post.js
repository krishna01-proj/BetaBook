import React from "react";
import "../../common/common.css";
import "./post.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {Users} from '../../Data'
import { useState } from "react";

function Post({post}) {
  const [like, setlike] = useState(post.like)
  const [isliked, setisliked] = useState(false)
  console.log(post.like)
  const toggleLike =() =>{
    setlike(isliked ? like +1 : like-1 )
    setisliked(!isliked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="profilePic" src={Users.filter((u)=>u.id===post.id)[0].profilePicture} />
            <span className="postName">{Users.filter((u)=>u.id===post.id)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={post.photo} />
        </div>
        <div className="postBottom">
          <div className="postLeft">
            <img className="likeIcon" src="assets/like.png" onClick={toggleLike} />
            <img className="likeIcon" src="assets/heart.png" onClick={toggleLike}/>
            <span className="likes" >{like}</span>
          </div>
          <div className="postRight">
            <span className="comments">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
