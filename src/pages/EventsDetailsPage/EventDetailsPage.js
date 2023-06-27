import "./EventDetailsPage.scss";
import EventDetails from "../../components/EventDetails/EventDetails";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/Loading";

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);

  const fetchEventData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/events/${eventId}`
      );
      setEventData(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchEventData();
    // eslint-disable-next-line
  }, []);
  return (
    <>{eventData ? <EventDetails eventData={eventData} /> : <Loading />}</>
  );
};

export default EventDetailsPage;
