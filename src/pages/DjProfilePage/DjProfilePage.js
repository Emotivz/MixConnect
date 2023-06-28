import "./DjProfilePage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import DjProfile from "../../components/DjProfile/DjProfile";

const DjProfilePage = () => {
  const [djProfile, setDjProfile] = useState(null);
  const { djId } = useParams();

  const fetchDjProfile = async () => {
    try {
      const djProfile = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile/${djId}`
      );

      setDjProfile(djProfile.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    fetchDjProfile();
    // eslint-disable-next-line
  }, []);

  return <>{djProfile ? <DjProfile djProfile={djProfile} /> : <Loading />}</>;
};

export default DjProfilePage;
