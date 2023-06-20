import "./MyTextInput.scss";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import { useField } from "formik";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="text-input__label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input className="text-input__input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-input__error">
          <img
            src={ErrorIcon}
            className="text-input__error-icon"
            alt="error icon"
          />
          {meta.error}
        </div>
      ) : null}
    </>
  );
};

export default MyTextInput;
