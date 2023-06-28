import { useEffect, useState } from "react";
import "./DjListPage.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import Dj from "../../components/Dj/Dj";
import Loading from "../../components/Loading/Loading";

const DjListPage = () => {
  const [djList, setDjList] = useState(null);

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
      <h1 className="dj-list__title">Dj List</h1>
      <div className="dj-list__container">
        {djList ? (
          djList.map((dj) => {
            console.log(dj);
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
