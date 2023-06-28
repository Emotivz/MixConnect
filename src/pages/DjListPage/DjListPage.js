import { useEffect, useState } from "react";
import "./DjListPage.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Dj from "../../components/Dj/Dj";
import Loading from "../../components/Loading/Loading";
import ArrowLeft from "../../assets/icons/arrowleft.svg";

const DjListPage = () => {
  const [djList, setDjList] = useState(null);
  const navigate = useNavigate();

  const fetchDjs = async () => {
    const djs = await axios.get(`${process.env.REACT_APP_API_URL}/djs`);
    setDjList(djs.data);
    try {
    } catch (error) {
      console.log(error.data);
    }
  };

  useEffect(() => {
    fetchDjs();
  }, []);
  return (
    <main className="dj-list main">
      <div className="dj-list__header-container">
        <img
          src={ArrowLeft}
          alt="back"
          className="dj-list__back"
          onClick={() => navigate(-1)}
        />
        <h1 className="dj-list__title">Djs</h1>
      </div>
      <div className="dj-list__container">
        {djList ? (
          djList.map((dj) => {
            return (
              <Link className="dj-list__link" key={dj.id}>
                <Dj dj={dj} key={dj.id} />
              </Link>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </main>
  );
};

export default DjListPage;
