import { useLocation } from "react-router-dom";
import "./MyMultiSelect.scss";
import { useField } from "formik";
const MyMultiSelect = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  const location = useLocation();

  return (
    <article
      className={
        location.pathname === "/profile/edit"
          ? "edit-my-multi-select"
          : "my-multi-select"
      }
    >
      <input
        className="my-multi-select__input"
        {...field}
        {...props}
        type="checkbox"
      />
      <div className="my-multi-select__container">
        {props.label}
        {children}
      </div>
      {meta.touched && meta.error ? (
        <div className="my-multi-select__error">{meta.error}</div>
      ) : null}
    </article>
  );
};

export default MyMultiSelect;
