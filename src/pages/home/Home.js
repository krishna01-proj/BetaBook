import React from "react";
import "./home.css"
import Rightbar from "../../components/rightbar/Rightbar";
import  Feed  from "../../components/feed/Feed";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
