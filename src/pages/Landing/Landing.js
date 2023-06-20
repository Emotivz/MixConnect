import "./Landing.scss";
import SignIn from "../../components/SignIn/SignIn";
import { useState, useEffect } from "react";
import Home from "../../components/Home/Home";
import axios from "axios";
// import Background from "../components/Background/Background";

const Landing = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullName, setFullName] = useState("");

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
      setFullName(response.data.full_name);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      verifyToken();
    }
  }, []);

  return (
    <>
      {/* <Background /> */}
      {isLoggedIn ? (
        <Home fullName={fullName} />
      ) : (
        <SignIn setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
};

export default Landing;
