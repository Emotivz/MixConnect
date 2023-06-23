import Nav from "../Nav/Nav";
import "./Home.scss";
import Menu from "../Menu/Menu";
import MenuIcon from "../../assets/icons/menuicon.svg";
import { Link } from "react-router-dom";
import SeeAllIcon from "../../assets/icons/seeallicon.svg";
import UpcomingEvent from "../UpcomingEvent/UpcomingEvent";

const Home = ({ djDetails, fullName, setIsLoggedIn }) => {
  return (
    <>
      <Link className="nav__menu--show">
        <img src={MenuIcon} alt="menu-icon" className="nav__menu-icon" />
      </Link>
      <Nav fullName={fullName} djDetails={djDetails} />
      <Menu
        fullName={fullName}
        djDetails={djDetails}
        setIsLoggedIn={setIsLoggedIn}
      />
      <main className="main">
        <div className="upcoming-events__container">
          <h3>Upcoming Events</h3>
          <Link className="upcoming-events__seeall">
            See All <img src={SeeAllIcon} alt="see all" />
          </Link>
        </div>
        <UpcomingEvent />
      </main>
    </>
  );
};

export default Home;
