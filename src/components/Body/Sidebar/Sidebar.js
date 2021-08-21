import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import "./Sidebar.css";
import share from "../../../assets/share.svg";
import gold from "../../../assets/gold.svg";
import bookmark from "../../../assets/bookmark.svg";

function Sidebar() {
  const user = useSelector(selectUser);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
          alt=""
        />
        <Avatar className="avatar" src={user.photoUrl} />

        <div className="sidebar_description">
          <h4>{user.displayName}</h4>
          <p>{user.email}</p>
        </div>
        <div className="sidebar__stats">
          <div>
            <p>Connections</p>
            <p>Grow your network</p>
          </div>
          <img className="svgIcon" src={share} alt="" />
        </div>
        <div className="sidebar__stats">
          <div>
            <p>Access exclusive Insights</p>
            <div style={{ display: "flex" }}>
              <img
                src={gold}
                style={{ width: "15px", paddingRight: "5px" }}
                alt=""
              />
              <p>Try Premium 1 Month</p>
            </div>
          </div>
        </div>
        <div className="sidebar__stats">
          <div>
            <div style={{ display: "flex" }}>
              <img
                alt=""
                src={bookmark}
                style={{ width: "15px", paddingRight: "5px" }}
              />
              <p>My Items</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Groups</p>
        <p>Events</p>
        <p>Followed Hashtags</p>
      </div>
    </div>
  );
}
export default Sidebar;
