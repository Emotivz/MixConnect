import "./Home.scss";
import { Link } from "react-router-dom";
import SeeAllIcon from "../../assets/icons/seeallicon.svg";
import UpcomingEvent from "../UpcomingEvent/UpcomingEvent";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
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
    <main className="main">
      <div className="upcoming-events__container">
        <h1 className="upcoming-events__header">Upcoming Events</h1>
        <Link to="/events" className="upcoming-events__seeall">
          See All <img src={SeeAllIcon} alt="see all" />
        </Link>
      </div>
      {featuredEvents ? (
        featuredEvents.map((event) => {
          return (
            <Link to={`/events/${event.id}`} key={event.id}>
              <UpcomingEvent key={event.id} event={event} />
            </Link>
          );
        })
      ) : (
        <p>There are no upcoming events</p>
      )}
    </main>
  );
};

export default Home;
