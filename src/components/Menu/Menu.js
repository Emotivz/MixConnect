import "./Menu.scss";
import { Link } from "react-router-dom";
import AboutIcon from "../../assets/icons/abouticon.svg";
import EventIcon from "../../assets/icons/eventicon.svg";
import MusicIcon from "../../assets/icons/musicicon.svg";
import ProfileIcon from "../../assets/icons/profileicon.svg";
import SignOutIcon from "../../assets/icons/signouticon.svg";
import HomeIcon from "../../assets/icons/homeicon.svg";
import PlaceholderProfileIcon from "../../assets/images/placeholder-profile.jpg";

const Menu = ({ setDjDetails, setIsLoggedIn, setIsDj }) => {
  const sessionDjDetails = JSON.parse(sessionStorage.getItem("djDetails"));
  const sessionFullName = sessionStorage.getItem("fullName");

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setDjDetails(null);
    setIsDj(0);
    sessionStorage.clear();
  };
  return (
    <nav className="nav2">
      {sessionDjDetails ? (
        <Link to="/profile">
          <img
            src={sessionDjDetails.profile_image}
            alt="profile icon"
            className="menu__profile-image"
          />
        </Link>
      ) : (
        <Link to="/profile">
          <img
            src={PlaceholderProfileIcon}
            alt="profile icon"
            className="menu__profile-image"
          />
        </Link>
      )}

      <Link to="/profile">
        {sessionDjDetails ? (
          <h3 className="menu__profile-name">{sessionDjDetails.dj_name}</h3>
        ) : (
          <h3 className="menu__profile-name">{sessionFullName}</h3>
        )}
      </Link>
      <Link to="/" className="menu__link">
        <img src={HomeIcon} alt="" className="menu__icon" />
        Home
      </Link>
      <Link to="/profile" className="menu__link">
        <img src={ProfileIcon} alt="" className="menu__icon" />
        My Profile
      </Link>
      <Link to="/events" className="menu__link">
        <img src={EventIcon} alt="calendar icon" className="menu__icon" />
        Events
      </Link>
      <Link to="/djs" className="menu__link">
        <img src={MusicIcon} alt="music icon" className="menu__icon" />
        DJs
      </Link>
      <Link className="menu__link">
        <img src={AboutIcon} alt="question mark icon" className="menu__icon" />
        About Us
      </Link>
      <Link to="/" onClick={handleSignOut} className="menu__link">
        <img src={SignOutIcon} alt="exit icon" className="menu__icon" />
        Sign Out
      </Link>
    </nav>
  );
};

export default Menu;
