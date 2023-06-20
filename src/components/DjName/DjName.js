import "./DjName.scss";
import { Formik, Form } from "formik";
import MyTextInput from "../MyTextInput/MyTextInput";
import * as Yup from "yup";

const DjName = ({ data, next }) => {
  const handleSubmit = (values) => {
    next(values);
  };
  return (
    <>
      <h1>DJ Name component</h1>
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          djName: Yup.string().required("Required"),
        })}
      >
        <Form className="dj-name__form">
          <MyTextInput
            label="DJ Name"
            name="djName"
            type="text"
            placeholder="DJ Name"
          />
          <button type="submit">Next</button>
        </Form>
      </Formik>
    </>
  );
};

export default DjName;
