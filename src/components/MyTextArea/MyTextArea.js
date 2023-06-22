import "./MyTextArea.scss";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import { useField } from "formik";

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="text-area__label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <textarea className="text-area__input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="text-area__error">
          <img
            src={ErrorIcon}
            className="text-area__error-icon"
            alt="error icon"
          />
          {meta.error}
        </div>
      ) : null}
    </>
  );
};

export default MyTextArea;
