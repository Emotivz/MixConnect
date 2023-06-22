import "./DjImage.scss";
import { Form, Formik } from "formik";
import MyImageUpload from "../MyImageUpload/MyImageUpload";
import NextButton from "../NextButton/NextButton";
import BackButton from "../BackButton/BackButton";

const DjImage = ({ data, next, prev }) => {
  const handleSubmit = (values) => {
    next(values);
  };

  return (
    <>
      <h1>Please upload a Profile Image</h1>
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        {(values) => (
          <Form encType="multipart/form-data">
            <div className="dj-image__image"></div>
            {/* value is set to underfined as per https://github.com/jaredpalmer/formik/discussions/3128 */}
            <MyImageUpload name="profile_image" value={undefined} />
            <div className="dj-image__button-container">
              <BackButton prev={prev} values={values} />
              <NextButton />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DjImage;
