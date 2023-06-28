import "./Dj.scss";

const Dj = ({ dj }) => {
  return (
    <article className="dj">
      <img src={dj.profile_image} alt="profile" className="dj__profile-image" />
      <div className="dj__details-container">
        <h2 className="dj__dj-name">{dj.dj_name}</h2>
        <h3 className="dj__dj-location">{dj.location}</h3>
      </div>
    </article>
  );
};

export default Dj;
