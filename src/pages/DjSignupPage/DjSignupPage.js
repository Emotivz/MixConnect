import { useLocation, useNavigate } from "react-router-dom";
import "./DjSignupPage.scss";
import { useEffect, useState } from "react";
import DjName from "../../components/DjName/DjName";
import DjGenre from "../../components/DjGenre/DjGenre";
import DjImage from "../../components/DjImage/DjImage";
import DjLocation from "../../components/DjLocation/DjLocation";
import DjPrice from "../../components/DjPrice/DjPrice";
import DjBio from "../../components/DjBio/DjBio";
import axios from "axios";
import Logo from "../../assets/logos/mixconnectlogo.png";

const DjSignupPage = ({ user_id }) => {
  const formData = new FormData();

  const navigate = useNavigate();

  const [signupSuccess, setSignupSuccess] = useState("");

  // initial DJ values
  const [data, setData] = useState({
    djName: "",
    genres: [],
    profile_image: "",
    location: "",
    price: "",
    bio: "",
    user_id,
  });

  // This holds information from the previous page and includes the state element which allows use to print the users name from the intial sign up form
  const location = useLocation();
  const signupValues = location.state;

  //manages the changing of pages
  const [currentStep, setCurrentStep] = useState(0);

  const submitFormData = async (newData) => {
    const newDj = {
      user_id: newData.user_id,
      dj_name: newData.djName,
      genres: newData.genres,
      profile_image: newData.profile_image,
      location: newData.location,
      price: newData.price,
      bio: newData.bio,
    };

    for (let value in newDj) {
      formData.append(value, newDj[value]);
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/djs`,
        formData
      );
      console.log(response.data.message);
      setSignupSuccess("Signed Up Successfully. Redirecting to Sign In");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Function to hanlde changing to next step
  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (final) {
      submitFormData(newData);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  // Function to hanlde changing to next step
  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };
  const steps = [
    <DjName next={handleNextStep} data={data} />,
    <DjGenre next={handleNextStep} prev={handlePrevStep} data={data} />,
    <DjImage next={handleNextStep} prev={handlePrevStep} data={data} />,
    <DjLocation next={handleNextStep} prev={handlePrevStep} data={data} />,
    <DjPrice next={handleNextStep} prev={handlePrevStep} data={data} />,
    <DjBio next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  useEffect(() => {
    if (!signupValues) {
      navigate("/signup");
      return;
    }
    // eslint-disable-next-line
  }, [signupValues]);

  return (
    <>
      {signupValues && (
        <section className="djsignup-page">
          <img src={Logo} alt="Mix connect logo" className="signup__logo" />
          <div className="djsignup-page__wizard">
            <h1>Welcome {signupValues.fullName} to Mix Connect</h1>
          </div>
          {steps[currentStep]}
          <p className="signup__success">{signupSuccess}</p>
        </section>
      )}
    </>
  );
};

export default DjSignupPage;
