import "./ProfilePage.scss";
import Profile from "../../components/Profile/Profile";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const ProfilePage = () => {
  const [myProfile, setMyProfile] = useState(null);

  const navigate = useNavigate();

  const fetchProfile = async (token) => {
    try {
      const profile = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMyProfile(profile.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      fetchProfile(token);
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return <>{myProfile ? <Profile myProfile={myProfile} /> : <Loading />}</>;
};

export default ProfilePage;
