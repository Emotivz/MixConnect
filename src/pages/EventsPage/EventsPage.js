import { useEffect, useState } from "react";
import "./EventsPage.scss";
import axios from "axios";
import Event from "../../components/Event/Event";
import { Link, useNavigate } from "react-router-dom";
import ArrowLeft from "../../assets/icons/arrowleft.svg";

const EventsPage = () => {
  const [events, setEvents] = useState(null);
  const navigate = useNavigate();

  const fetchEvents = async () => {
    try {
      const eventList = await axios.get(
        `${process.env.REACT_APP_API_URL}/events`
      );
      if (eventList.data.length === 0) {
        return console.log("there are no events to display");
      }
      setEvents(eventList.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <main className="main">
      <div className="events__new-event-button-container">
        <div className="events__header-container">
          <img
            src={ArrowLeft}
            alt="back"
            className="events__back"
            onClick={() => navigate(-1)}
          />
          <h1 className="events__title">Events</h1>
        </div>
        <button className="events__new-event-button">Create New Event</button>
      </div>
      {events &&
        events.map((event) => {
          return (
            <Link to={`/events/${event.id}`} key={event.id}>
              <Event event={event} />
            </Link>
          );
        })}
    </main>
  );
};

export default EventsPage;
