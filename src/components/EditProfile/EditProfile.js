import "./EditProfile.scss";
import { Formik, Form } from "formik";
import MyTextInput from "../MyTextInput/MyTextInput";
import MyTextArea from "../MyTextArea/MyTextArea";
import * as Yup from "yup";
import MyMultiSelect from "../MyMultiSelect/MyMultiSelect";
import SaveIcon from "../../assets/icons/saveicon.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditProfile = ({ myProfile, genres }) => {
  const navigate = useNavigate();

  const handleSubmit = async (values, token) => {
    try {
      axios.put(`${process.env.REACT_APP_API_URL}/profile`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="edit-profile main">
      <div className="edit-profile__header-container">
        <h1 className="edit-profile__header">My Profile</h1>
        <img src={myProfile.profile_image} alt="" className="profile__image" />
      </div>
      <Formik
        initialValues={myProfile}
        validationSchema={Yup.object({
          full_name: Yup.string().required("Required"),
          dj_name: Yup.string().required("Required"),
          location: Yup.string().required("Please enter a location"),
          price: Yup.number()
            .required("Required")
            .min(1, "Please enter a price higher than 0")
            .max(500, "Please enter a price lower than 500"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const token = sessionStorage.getItem("token");
          handleSubmit(values, token);
          setTimeout(() => {
            setSubmitting(true);
          }, 400);
        }}
      >
        <Form className="edit-profile__form">
          <MyTextInput
            label="Full Name"
            name="full_name"
            type="text"
            placeholder="Full Name"
          />
          <MyTextInput
            label="DJ Name"
            name="dj_name"
            type="text"
            placeholder="Dj Name"
          />
          <MyTextInput
            label="Location"
            name="location"
            type="text"
            placeholder="Location"
          />
          <MyTextInput
            label="Price"
            name="price"
            type="number"
            placeholder="Price (hourly)"
            min="1"
            max="500"
          />
          <MyTextArea label="Bio" name="bio" type="text" placeholder="Bio" />
          <h3 className="edit-profile__dj_genre-header">Genres</h3>
          <div className="edit-profile__dj-genre-container">
            {genres.map((genre) => (
              <MyMultiSelect
                key={genre.id}
                name="genres"
                value={genre.genre}
                label={genre.genre}
              />
            ))}
          </div>
          <div className="edit-profile__button-container">
            <button type="submit" className="edit-profile__save-button">
              Save
              <img src={SaveIcon} alt="" className="edit-profile__save-icon" />
            </button>
          </div>
          {/* TODO add image upload change */}
        </Form>
      </Formik>
    </section>
  );
};

export default EditProfile;
