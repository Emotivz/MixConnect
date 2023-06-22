import "./Nav.scss";
import NotificationIcon from "../../assets/icons/notificationicon.svg";
// import { useState } from "react";

const Nav = ({ fullName }) => {
  return (
    <nav className="nav">
      <div className="nav__menu-container">
        <div>{/* empty div to accomodate for menu button */}</div>
        <div>
          <h2 className="nav__welcome-text">Welcome back {fullName}</h2>
        </div>
        <img src={NotificationIcon} alt="" className="nav__notification-icon" />
      </div>
    </nav>
  );
};

export default Nav;
