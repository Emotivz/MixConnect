import "./EventDetails.scss";
import BackArrow from "../../assets/icons/backarrow.svg";
import { useNavigate } from "react-router-dom";
import ShareIcon from "../../assets/icons/shareicon.svg";
import EventTypeIcon from "../../assets/icons/eventtype.svg";
import CalendarIcon from "../../assets/icons/calendar.svg";
import LocationIcon from "../../assets/icons/locationicon.svg";
import PlaceholderProfile from "../../assets/images/placeholder-profile.jpg";
import ApplyIcon from "../../assets/icons/saveicon.svg";
import moment from "moment";

const EventDetails = ({ eventData }) => {
  console.log(eventData);
  const navigate = useNavigate();
  return (
    <>
      <div className="event-details__image-container">
        <img
          src={eventData.coverPhoto}
          alt="event cover"
          className="event-details__image"
        />
        <div className="event-details__header-container">
          <img
            src={BackArrow}
            alt="back"
            className="event-details__back"
            onClick={() => navigate("/events")}
          />
          <h1 className="event-details__header">Event Details</h1>
        </div>
      </div>
      <section className="event-details main">
        <div className="event-details__share-container">
          <img
            src={ShareIcon}
            alt="share"
            className="event-details__share-icon"
          />
          <p className="event-details__share-header">Share</p>
        </div>
        <h2 className="event-details__title">{eventData.title}</h2>
        <div className="event-details__highlights-container">
          <div className="event-details__type-container">
            <img
              className="event-details__type-icon"
              src={EventTypeIcon}
              alt="type of event"
            />
            <p className="event-details__type">{eventData.type}</p>
          </div>
          <div className="event-details__date-container">
            <img
              className="event-details__date-icon"
              src={CalendarIcon}
              alt="date of event"
            />
            <div>
              <p className="event-details__date--short">
                {moment(eventData.dateTime).format("LL")}
              </p>
              <p className="event-details__date--long">
                {moment(eventData.dateTime).format("LLLL")}
              </p>
            </div>
          </div>
          <div className="event-details__location-container">
            <img
              className="event-details__location-icon"
              src={LocationIcon}
              alt="location"
            />
            <p className="event-details__location">{eventData.location}</p>
          </div>
          <div className="event-details__organiser-container">
            <img
              className="event-details__profile-icon"
              src={PlaceholderProfile}
              alt="host"
            />
            <div className="event-details__organiser-text-container">
              <div>
                <p className="event-details__organiser">
                  {eventData.organiser}
                </p>
                <p className="event-details__organiser-header">Organiser</p>
              </div>
              <button className="event-details__follow-button">Follow</button>
            </div>
          </div>
        </div>
        <h2 className="event-details__about-header">About Event</h2>
        <p className="event-details__about">{eventData.details}</p>
        <div className="event-details__apply-button-container">
          <button className="event-details__apply-button">
            apply for event
            <img
              src={ApplyIcon}
              alt="Apply"
              className="event-details__apply-icon"
            />
          </button>
        </div>
      </section>
    </>
  );
};

export default EventDetails;
