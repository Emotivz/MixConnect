import "./EditProfilePage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EditProfile from "../../components/EditProfile/EditProfile";
import Loading from "../../components/Loading/Loading";

const EditProfilePage = () => {
  // fetch token
  // use token to auth user and get user_id
  // use user id to filter which profile needs to be edited
  // Render the edit profile component when data has been recieced from API call
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

  return <>{myProfile ? <EditProfile myProfile={myProfile} /> : <Loading />}</>;
};

export default EditProfilePage;
