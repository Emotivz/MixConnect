import "./Landing.scss";
import SignIn from "../../components/SignIn/SignIn";
import { useState, useEffect } from "react";
import Home from "../../components/Home/Home";
import axios from "axios";
// import Background from "../components/Background/Background";
import Loading from "../../components/Loading/Loading";

const Landing = ({
  isLoggedIn,
  setIsLoggedIn,
  fullName,
  setFullName,
  djDetails,
  setDjDetails,
  isDj,
  setIsDj,
}) => {
  const [checkingToken, setCheckingToken] = useState(true);
  // eslint-disable-next-line
  const [userId, setUserId] = useState(null);

  // fetch dj details if the user is a dj
  const fetchDjDetails = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/djs/${userId}`
    );
    setDjDetails(response.data);
    sessionStorage.setItem("djDetails", JSON.stringify(response.data));
  };

  const verifyToken = async (token) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/users/login`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsLoggedIn(true);
      sessionStorage.setItem("isLoggedIn", true);

      setCheckingToken(false);
      sessionStorage.setItem("checkingToken", false);

      setFullName(response.data.full_name);
      sessionStorage.setItem("fullName", response.data.full_name);

      setIsDj(response.data.is_dj);
      sessionStorage.setItem("isDj", response.data.is_dj);

      setUserId(response.data.id);
      sessionStorage.setItem("userId", response.data.id);

      if (isDj) {
        fetchDjDetails();
      }
    } catch (error) {
      setIsLoggedIn(false);
      setCheckingToken(false);
      console.log(error.response.data.message);
    }
  };

  // check if the users token is valid
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      verifyToken(token);
    } else {
      setCheckingToken(false);
    }
    // eslint-disable-next-line
  }, [isLoggedIn, isDj]);

  if (checkingToken) {
    return <Loading />;
  }

  if (isLoggedIn) {
    return <Home />;
  } else {
    return <SignIn setIsLoggedIn={setIsLoggedIn} />;
  }
};

export default Landing;
