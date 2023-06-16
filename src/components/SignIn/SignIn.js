import "./SignIn.scss";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
      <>
        <label className="signin-form__label" htmlFor={props.id || props.name}>
          {label}
        </label>
        <input className="signin-form__input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };

  const MyCheckbox = ({ children, ...props }) => {
    // React treats radios and checkbox inputs differently from other input types: select and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
      <div>
        <label className="signin-form__checkbox">
          <input type="checkbox" {...field} {...props} />
          <span className="signin-form__slider"></span>
          {children}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  return (
    <section className="signin">
      <p>Sign In Page</p>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "password should be 8 characters or more")
            .required("Required"),
          rememberMe: Yup.boolean(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="signin-form">
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
          <div className="signin-form__rememberme-container">
            <MyCheckbox name="rememberMe" />{" "}
            <p className="signin-form__rememberme-text">Remember Me</p>
          </div>
          <button className="signin-form__button" type="submit">
            Sign In
          </button>
        </Form>
      </Formik>
    </section>
  );
};

export default SignIn;
