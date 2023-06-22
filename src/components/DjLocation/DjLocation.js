import "./DjLocation.scss";
import { Form, Formik } from "formik";
import NextButton from "../NextButton/NextButton";
import BackButton from "../BackButton/BackButton";
import MyTextInput from "../MyTextInput/MyTextInput";
import * as Yup from "yup";

const DjLocation = ({ data, next, prev }) => {
  const handleSubmit = (values) => {
    next(values);
  };

  return (
    <>
      <h1>Please enter your location</h1>
      <Formik
        encType="multipart/form-data"
        initialValues={data}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          location: Yup.string().required("Please enter a location"),
        })}
      >
        {(values) => (
          <Form className="dj-location__form" encType="multipart/form-data">
            <MyTextInput
              label="Location"
              name="location"
              type="text"
              placeholder="Location"
            />
            <div className="dj-location__button-container">
              <BackButton prev={prev} values={values} />
              <NextButton />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DjLocation;
