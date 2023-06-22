import "./MyImageUpload.scss";
import ErrorIcon from "../../assets/icons/error-24px.svg";
import { useField, useFormikContext } from "formik";

const MyImageUpload = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);

  return (
    <>
      <label className="text-input__label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        type="file"
        accept="image/*"
        className="text-input__input"
        {...field}
        {...props}
        onChange={(e) => {
          setFieldValue(props.name, e.currentTarget.files[0]);
        }}
      />
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

export default MyImageUpload;
