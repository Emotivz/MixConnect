import { useFormikContext } from "formik";
import Chance from "chance";

const GenerateData = () => {
  const chance = new Chance();

  const { setFieldValue } = useFormikContext();

  const setValues = () => {
    setFieldValue("full_name", chance.name());
    setFieldValue("email", chance.email());
    setFieldValue("is_dj", true);
    setFieldValue("djName", chance.animal());
    setFieldValue("bio", chance.paragraph());
  };

  return (
    <button onClick={setValues} className="signup-form__button" type="button">
      Generate Random Details
    </button>
  );
};

export default GenerateData;
