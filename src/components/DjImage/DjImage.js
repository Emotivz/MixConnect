import "./DjImage.scss";
import { Form, Formik } from "formik";
import MyTextInput from "../MyTextInput/MyTextInput";
import MyImageUpload from "../MyImageUpload/MyImageUpload";

const DjImage = ({ data, next, prev }) => {
  const handleSubmit = (values) => {
    next(values);
  };
  return (
    <>
      <h1>Please upload a Profile Image</h1>
      <Formik
        initialValues={data}
        // onSubmit={handleSubmit}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(values) => (
          <Form encType="multipart/form-data">
            <MyTextInput name="profileImage" />
            <div className="dj-image__image"></div>
            <MyImageUpload name="profileImage" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DjImage;
