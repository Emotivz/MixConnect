import "./BackButton.scss";

const BackButton = ({ prev, values }) => {
  return (
    <button className="back-button" onClick={() => prev(values)} type="button">
      Back
    </button>
  );
};

export default BackButton;
