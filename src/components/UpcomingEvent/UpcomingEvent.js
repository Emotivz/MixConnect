import "./UpcomingEvent.scss";
import MapPin from "../../assets/icons/map-pin.svg";
import moment from "moment";

const UpcomingEvent = ({ event }) => {
  return (
    <article className="upcoming-event">
      <div className="upcoming-event__cover-photo-container">
        <img
          src={event.cover_photo}
          alt="event cover photo"
          className="upcoming-event__cover-photo"
        />
        <div className="upcoming-event__date-container">
          <h3 className="upcoming-event__date-day">
            {moment(event.date_time).format("D")}
          </h3>
          <p className="upcoming-event__date-month">
            {moment(event.date_time).format("MMM")}
          </p>
        </div>
      </div>
      <h2 className="upcoming-event__title">{event.title}</h2>
      <div className="upcoming-event__location-container">
        <img src={MapPin} alt="" className="upcoming-event__location-icon" />
        <p className="upcoming-event__location">{event.location}</p>
      </div>
    </article>
  );
};

export default UpcomingEvent;
