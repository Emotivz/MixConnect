import "./SignUp.scss";
import { Formik, Form, useField } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import ErrorIcon from "../../assets/icons/error-24px.svg";

const SignUp = () => {
  const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label className="signup-form__label" htmlFor={props.id || props.name}>
          {label}
        </label>
        <input className="signup-form__input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="signup-form__error">
            <img
              src={ErrorIcon}
              className="signup-form__error-icon"
              alt="error icon"
            />
            {meta.error}
          </div>
        ) : null}
      </>
    );
  };

  const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
      <div>
        <label className="signin-form__checkbox">
          <input type="checkbox" {...field} {...props} />
          <span className="signup-form__slider"></span>
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="signup-form__error">
            <img
              src={ErrorIcon}
              className="signup-form__error-icon"
              alt="error icon"
            />
            {meta.error}
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <section className="signup">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
          dj: false,
        }}
        validationSchema={Yup.object({
          fullName: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "password should be 8 characters or more")
            .required("Required"),
          confirmPassword: Yup.string()
            .required("Required")
            .oneOf([Yup.ref("password")], "Passwords do not match"),
          dj: Yup.boolean(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="signup-form">
          <MyTextInput
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Full Name"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="abc@email.com"
          />
          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Your password"
          />
          <MyTextInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
          />
          <div className="signin-form__dj-container">
            <MyCheckbox name="dj" />
            <p className="signin-form__dj-text">
              Sign Up as DJ (This will create a DJ Profile)
            </p>
          </div>
          <button className="signup-form__button" type="submit">
            Sign Up
          </button>
        </Form>
      </Formik>
      <div className="signup-form__signin-container">
        <p className="signup-form__signin">
          Already have an account? <Link to="/">Sign in</Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
