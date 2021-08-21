import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HeaderOption from "./HeaderOption";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase";
import Avatar from "@material-ui/core/Avatar";
import { selectUser, logout } from "../../features/userSlice";
import AppsIcon from "@material-ui/icons/Apps";
import logo from "../../assets/linkedin-logo.svg";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  const handleDisplay = () => {
    let data = document.getElementById("profile_logout");
    if (data.style.display === "block") {
      data.style.display = "none";
    } else {
      data.style.display = "block";
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="logos" />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption Icon={AppsIcon} title="Work" />

        <div className="profile">
          <div classsName="profile__block">
            <Avatar onClick={handleDisplay} src={user.photoUrl}>
              {user?.email[0]}
            </Avatar>
          </div>
          <div className="profile_logout" id="profile_logout">
            <button onClick={logoutOfApp}>Logout</button>
          </div>
        </div>

        <p className="header__premium">Try Premium Free for 1 Month</p>
      </div>
    </div>
  );
}

export default Header;
