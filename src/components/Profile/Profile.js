import "./Profile.scss";
import DjIcon from "../../assets/icons/djicon.svg";
import EditIcon from "../../assets/icons/edit.svg";
import PlaceholderImage from "../../assets/images/placeholder-profile.jpg";
import { useNavigate } from "react-router-dom";
import ArrowLeft from "../../assets/icons/arrowleft.svg";

const Profile = ({ myProfile }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile/edit");
  };
  return (
    <section className="profile main">
      <div className="profile__header-container">
        <img
          src={ArrowLeft}
          alt="back"
          className="profile__back"
          onClick={() => navigate(-1)}
        />
        <h1 className="profile__header">My Profile</h1>
      </div>
      <div className="profile__details-container">
        <img
          className="profile__image"
          src={
            myProfile.profile_image ? myProfile.profile_image : PlaceholderImage
          }
          alt="profile"
        />
        <h2 className="profile__name">{myProfile.full_name}</h2>
        {myProfile.dj_name && (
          <div className="profile__dj-name-container">
            <h2 className="profile__name">{myProfile.dj_name}</h2>
            <img src={DjIcon} alt="dj icon" className="profile__dj-icon" />
          </div>
        )}
        {myProfile.location && (
          <h4 className="profile__location">{myProfile.location}</h4>
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
        <button onClick={handleClick} className="profile__edit-button">
          <img src={EditIcon} alt="" className="profile__edit-icon" />
          Edit profile
        </button>
      </div>
      <div className="profile__more-details">
        <h3 className="profile__about-header">About Me</h3>
        <p className="profile__about-text">
          {myProfile.bio
            ? myProfile.bio
            : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente neque doloremque saepe aperiam tenetur nisi quibusdam perferendis quae, quo odio beatae enim maxime, et laudantium recusandae quasi, fugiat est? Animi."}
        </p>
        {myProfile.price && (
          <>
            <h3 className="profile__price-header">Price (Hourly)</h3>
            <p className="profile__price">£{myProfile.price}</p>
          </>
        )}
        <h3 className="profile__genres-header"> Genres</h3>
        <div className="profile__genres-container">
          {myProfile.genres === undefined ||
          !JSON.parse(myProfile.genres)[0] ? (
            <p>
              You currently don't have any genres listed. Why don't you add some
              😬
            </p>
          ) : (
            JSON.parse(myProfile.genres).map((genre) => {
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

export default Profile;
