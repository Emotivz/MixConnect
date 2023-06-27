import "./DjBio.scss";
import { Form, Formik } from "formik";
import BackButton from "../BackButton/BackButton";
import MyTextArea from "../MyTextArea/MyTextArea";
import * as Yup from "yup";

const DjBio = ({ data, next, prev }) => {
  const handleSubmit = (values) => {
    next(values, true);
  };
  return (
    <>
      <h1>Please enter a bio</h1>
      <Formik
        encType="multipart/form-data"
        initialValues={data}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          bio: Yup.string()
            .notRequired()
            .max(250, "Bio cannot be longer than 250 characters"),
        })}
      >
        {(values) => (
          <Form className="dj-bio__form" encType="multipart/form-data">
            <MyTextArea label="Bio" name="bio" type="text" placeholder="Bio" />
            <div className="dj-bio__button-container">
              <BackButton prev={prev} values={values} />
              <button className="next-button" type="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DjBio;
