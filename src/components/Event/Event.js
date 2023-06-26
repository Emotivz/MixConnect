import "./Event.scss";
import moment from "moment";
import DeleteIcon from "../../assets/icons/deleteicon.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Event = ({ event }) => {
  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();
  const sessionUserId = JSON.parse(sessionStorage.getItem("userId"));
  const handleDelete = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/events/${event.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.log(error.response);
    }
    navigate("/events");
  };
  return (
    <article className="event">
      {sessionUserId === event.host_id ? (
        <img
          src={DeleteIcon}
          className="event__delete-icon"
          alt="delete icon"
          onClick={handleDelete}
        />
      ) : (
        ""
      )}
      <img
        src={event.cover_photo}
        alt="event cover"
        className="event__cover-photo"
      />
      <div className="event__details-container">
        <h3 className="event__date">
          {moment(event.date_time).format("llll")}
        </h3>
        <h4 className="event__date-relative">
          {moment(event.date_time).endOf("day").fromNow()}
        </h4>
        <h2 className="event__title">{event.title}</h2>
      </div>
    </article>
  );
};

export default Event;
