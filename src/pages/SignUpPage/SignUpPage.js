import "./SignUpPage.scss";
import SignUp from "../../components/SignUp/SignUp";

const SignUpPage = ({ setUser_id }) => {
  return (
    <>
      <SignUp setUser_id={setUser_id} />
    </>
  );
};

export default SignUpPage;
