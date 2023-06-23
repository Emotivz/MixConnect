import "./UpcomingEvent.scss";
import CoverImage from "../../assets/images/image 84.svg";
import MapPin from "../../assets/icons/map-pin.svg";

const UpcomingEvent = () => {
  return (
    <article className="upcoming-event">
      <div className="upcoming-event__cover-photo-container">
        <img src={CoverImage} alt="" className="upcoming-event__cover-photo" />
        <div className="upcoming-event__date-container">
          <h3 className="upcoming-event__date-day">10</h3>
          <p className="upcoming-event__date-month">June</p>
        </div>
      </div>
      <h2 className="upcoming-event__title">Wedding Party</h2>
      <div className="upcoming-event__location-container">
        <img src={MapPin} alt="" className="upcoming-event__location-icon" />
        <p className="upcoming-event__location">36 Guild Street London, UK</p>
      </div>
    </article>
  );
};

export default UpcomingEvent;
