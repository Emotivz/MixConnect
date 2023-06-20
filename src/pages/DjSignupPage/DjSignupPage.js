import { useLocation, useNavigate } from "react-router-dom";
import "./DjSignupPage.scss";
// import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import DjName from "../../components/DjName/DjName";
import DjGenre from "../../components/DjGenre/DjGenre";
import DjImage from "../../components/DjImage/DjImage";
import DjLocation from "../../components/DjLocation/DjLocation";
import DjPrice from "../../components/DjPrice/DjPrice";
import DjBio from "../../components/DjBio/DjBio";

const DjSignupPage = () => {
  const navigate = useNavigate();

  // initial DJ values
  const [data, setData] = useState({
    djName: "",
    genres: [],
    profileImage: "",
    location: "",
    price: "",
    bio: "",
  });

  // This holds information from the previous page and includes the state element which allows use to print the users name from the intial sign up form
  const location = useLocation();
  const signupValues = location.state;

  //manages the changing of pages
  const [currentStep, setCurrentStep] = useState(0);

  // Function to hanlde changing to next step
  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));
    if (final) {
      // replace this with a fucntion that actually submits the form
      console.log("form is submitted", newData);
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
          <div className="djsignup-page__wizard">
            <h1>Welcome {signupValues.fullName} to Mix Connect</h1>
          </div>
          {steps[currentStep]}
        </section>
      )}
    </>
  );
};

export default DjSignupPage;
