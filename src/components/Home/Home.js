import "./Home.scss";
import { Link } from "react-router-dom";
import SeeAllIcon from "../../assets/icons/seeallicon.svg";
import UpcomingEvent from "../UpcomingEvent/UpcomingEvent";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = ({ djDetails, fullName, setIsLoggedIn }) => {
  const [featuredEvents, setFeaturedEvents] = useState(null);

  const fetchFeturedEvents = async () => {
    try {
      const eventsToFeature = await axios.get(
        `${process.env.REACT_APP_API_URL}/events`,
        {
          params: {
            num: 3,
          },
        }
      );
      if (eventsToFeature.data.length === 0) {
        return console.log("there are no events to display");
      }
      setFeaturedEvents(eventsToFeature.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchFeturedEvents();
  }, []);
  return (
    <>
      {/* <Menu
        fullName={fullName}
        djDetails={djDetails}
        setIsLoggedIn={setIsLoggedIn}
      /> */}
      <main className="main">
        <div className="upcoming-events__container">
          <h3>Upcoming Events</h3>
          <Link className="upcoming-events__seeall">
            See All <img src={SeeAllIcon} alt="see all" />
          </Link>
        </div>
        {featuredEvents ? (
          featuredEvents.map((event) => {
            return <UpcomingEvent key={event.id} event={event} />;
          })
        ) : (
          <p>There are no upcoming events</p>
        )}
      </main>
    </>
  );
};

export default Home;
