import "./Landing.scss";
import SignIn from "../../components/SignIn/SignIn";
import { useState, useEffect } from "react";
import Home from "../../components/Home/Home";
import axios from "axios";
// import Background from "../components/Background/Background";
import Loading from "../../components/Loading/Loading";

const Landing = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullName, setFullName] = useState("");
  const [checkingToken, setCheckingToken] = useState(true);
  const [isDj, setIsDj] = useState(0);
  const [userId, setUserId] = useState("");
  const [djDetails, setDjDetails] = useState(null);

  // fetch dj details if the user is a dj
  const fetchDjDetails = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/djs/${userId}`
    );
    setDjDetails(response.data);
  };

  const verifyToken = async () => {
    const token = sessionStorage.getItem("token");
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
      setCheckingToken(false);
      setFullName(response.data.full_name);
      setIsDj(response.data.is_dj);
      setUserId(response.data.id);
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
      verifyToken();
    } else {
      setCheckingToken(false);
    }
    // eslint-disable-next-line
  }, [isLoggedIn, isDj]);

  if (checkingToken) {
    return <Loading />;
  }

  // when user is logged in do axios to pull full name and set in state
  if (isLoggedIn) {
    return (
      <Home
        fullName={fullName}
        djDetails={djDetails}
        setIsLoggedIn={setIsLoggedIn}
      />
    );
  } else {
    return <SignIn setIsLoggedIn={setIsLoggedIn} />;
  }
};

export default Landing;
