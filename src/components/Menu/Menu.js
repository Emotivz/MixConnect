import "./Menu.scss";
import { Link } from "react-router-dom";
import AboutIcon from "../../assets/icons/abouticon.svg";
import EventIcon from "../../assets/icons/eventicon.svg";
import MusicIcon from "../../assets/icons/musicicon.svg";
import ProfileIcon from "../../assets/icons/profileicon.svg";
import SignOutIcon from "../../assets/icons/signouticon.svg";

const Menu = ({ djDetails, fullName, setIsLoggedIn }) => {
  const handleSignOut = () => {
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  return (
    <nav className="nav2">
      {djDetails && (
        <Link>
          <img
            src={djDetails.profile_image}
            alt="profile icon"
            className="menu__profile-image"
          />
        </Link>
      )}

      <Link>
        {djDetails ? (
          <h3 className="menu__profile-name">{djDetails.dj_name}</h3>
        ) : (
          <h3 className="menu__profile-name">{fullName}</h3>
        )}
      </Link>
      <Link className="menu__link">
        <img src={ProfileIcon} alt="" className="menu__icon" />
        My Profile
      </Link>
      <Link
        to="/events"
        className="menu__link"
        state={{
          djDetails,
          fullName,
        }}
      >
        <img src={EventIcon} alt="calendar icon" className="menu__icon" />
        Events
      </Link>
      <Link className="menu__link">
        <img src={MusicIcon} alt="music icon" className="menu__icon" />
        DJs
      </Link>
      <Link className="menu__link">
        <img src={AboutIcon} alt="question mark icon" className="menu__icon" />
        About Us
      </Link>
      <Link onClick={handleSignOut} className="menu__link">
        <img src={SignOutIcon} alt="exit icon" className="menu__icon" />
        Sign Out
      </Link>
    </nav>
  );
};

export default Menu;
