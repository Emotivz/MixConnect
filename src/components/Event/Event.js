import "./Event.scss";
import moment from "moment";

const Event = ({ event }) => {
  return (
    <article className="event">
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
