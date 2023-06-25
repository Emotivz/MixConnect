import { useEffect, useState } from "react";
import "./EventsPage.scss";
import axios from "axios";
import Event from "../../components/Event/Event";

const EventsPage = () => {
  const [events, setEvents] = useState(null);

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
      {events &&
        events.map((event) => {
          return <Event event={event} key={event.id} />;
        })}
    </main>
  );
};

export default EventsPage;
