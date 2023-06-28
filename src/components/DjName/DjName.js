import "./DjName.scss";
import { Formik, Form } from "formik";
import MyTextInput from "../MyTextInput/MyTextInput";
import * as Yup from "yup";
import NextButton from "../NextButton/NextButton";
import GenerateData from "../GenerateData/GenerateData";

const DjName = ({ data, next }) => {
  const handleSubmit = (values) => {
    next(values);
  };
  return (
    <>
      <h1>DJ Name</h1>
      <Formik
        encType="multipart/form-data"
        initialValues={data}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          djName: Yup.string().required("Required"),
        })}
      >
        <Form className="dj-name__form" encType="multipart/form-data">
          <MyTextInput
            label="DJ Name"
            name="djName"
            type="text"
            placeholder="DJ Name"
          />
          <div className="dj-name__button-container">
            <NextButton />
          </div>
          <GenerateData />
        </Form>
      </Formik>
    </>
  );
};

export default DjName;
