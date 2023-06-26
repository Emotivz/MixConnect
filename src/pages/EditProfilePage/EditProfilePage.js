import "./EditProfilePage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EditProfile from "../../components/EditProfile/EditProfile";
import Loading from "../../components/Loading/Loading";

const EditProfilePage = () => {
  const [myProfile, setMyProfile] = useState(null);
  const navigate = useNavigate();
  const [genres, setGenres] = useState(null);
  const [genresParsed, setGenresParsed] = useState(false);

  // convert genres from database back into array
  const parseSelectedGenres = () => {
    if (!myProfile.is_dj) {
      return setGenresParsed(true);
    }
    myProfile.genres = JSON.parse(myProfile.genres);
    setGenresParsed(true);
  };

  const getGenres = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/genres`
      );
      setGenres(response.data);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

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
      getGenres();
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  // parse selected genres into array format
  useEffect(() => {
    myProfile && parseSelectedGenres();
    // eslint-disable-next-line
  }, [myProfile]);

  return (
    <>
      {myProfile && genres && genresParsed ? (
        <EditProfile myProfile={myProfile} genres={genres} />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default EditProfilePage;
