import "./DjPrice.scss";
import { Form, Formik } from "formik";
import NextButton from "../NextButton/NextButton";
import BackButton from "../BackButton/BackButton";
import MyTextInput from "../MyTextInput/MyTextInput";
import * as Yup from "yup";

const DjPrice = ({ data, next, prev }) => {
  const handleSubmit = (values) => {
    next(values);
  };
  return (
    <>
      <h1>Please enter your average hourly price</h1>
      <Formik
        encType="multipart/form-data"
        initialValues={data}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          price: Yup.number()
            .required("Required")
            .min(1, "Please enter a price higher than 0")
            .max(500, "Please enter a price lower than 500"),
        })}
      >
        {(values) => (
          <Form className="dj-location__form" encType="multipart/form-data">
            <MyTextInput
              label="Price"
              name="price"
              type="number"
              placeholder="Price (hourly)"
              min="1"
              max="500"
            />
            <div className="dj-price__button-container">
              <BackButton prev={prev} values={values} />
              <NextButton />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DjPrice;
