import "./DjProfile.scss";
import DjIcon from "../../assets/icons/djicon.svg";
import PlaceholderImage from "../../assets/images/placeholder-profile.jpg";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../../assets/icons/arrowleft.svg";

const DjProfile = ({ djProfile }) => {
  const navigate = useNavigate();

  return (
    <section className="profile main">
      <div className="profile__header-container">
        <img
          src={ArrowLeft}
          alt="back"
          className="profile__back"
          onClick={() => navigate(-1)}
        />
        <h1 className="profile__header">Profile</h1>
      </div>
      <div className="profile__details-container">
        <img
          className="profile__image"
          src={
            djProfile.profile_image ? djProfile.profile_image : PlaceholderImage
          }
          alt="profile"
        />
        <h2 className="profile__name">{djProfile.full_name}</h2>
        {djProfile.dj_name && (
          <div className="profile__dj-name-container">
            <h2 className="profile__name">{djProfile.dj_name}</h2>
            <img src={DjIcon} alt="dj icon" className="profile__dj-icon" />
          </div>
        )}
        {djProfile.location && (
          <h4 className="profile__location">{djProfile.location}</h4>
        )}
        <div className="profile__following-followers-container">
          <div className="profile__following-container">
            <p className="profile__following-count">0</p>
            <h4 className="profile__following-header">Following</h4>
          </div>
          <div className="profile__followers-container">
            <p className="profile__followers-count">0</p>
            <h4 className="profile__followers-header">Followers</h4>
          </div>
        </div>
      </div>
      <div className="profile__more-details">
        <h3 className="profile__about-header">About Me</h3>
        <p className="profile__about-text">
          {djProfile.bio
            ? djProfile.bio
            : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente neque doloremque saepe aperiam tenetur nisi quibusdam perferendis quae, quo odio beatae enim maxime, et laudantium recusandae quasi, fugiat est? Animi."}
        </p>
        {djProfile.price && (
          <>
            <h3 className="profile__price-header">Price (Hourly)</h3>
            <p className="profile__price">£{djProfile.price}</p>
          </>
        )}
        <h3 className="profile__genres-header"> Genres</h3>
        <div className="profile__genres-container">
          {djProfile.genres === undefined ||
          !JSON.parse(djProfile.genres)[0] ? (
            <p>This DJ currently does not have any genres listed.</p>
          ) : (
            JSON.parse(djProfile.genres).map((genre) => {
              return (
                // TODO pull genre key from database or use UUID
                <p key={genre} className="profile__genre">
                  {genre}
                </p>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default DjProfile;
