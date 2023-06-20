import "./Loading.scss";

const Loading = () => {
  return (
    <section className="loading">
      <div className="loading__loader">
        <div className="loading__circle"></div>
        <div className="loading__circle"></div>
        <div className="loading__circle"></div>
        <div className="loading__circle"></div>
        <div className="loading__circle"></div>
      </div>
    </section>
  );
};

export default Loading;
