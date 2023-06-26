import "./EditProfile.scss";
import { Formik, Form } from "formik";
import MyTextInput from "../MyTextInput/MyTextInput";

const EditProfile = ({ myProfile }) => {
  console.log(myProfile);
  return (
    <section className="edit-profile main">
      <h1 className="edit-profile__header">My Profile</h1>
      <Formik initialValues={myProfile}>
        <Form>
          <MyTextInput
            label="Full Name"
            name="full_name"
            type="text"
            placeholder="Full Name"
          />
        </Form>
      </Formik>
    </section>
  );
};

export default EditProfile;
