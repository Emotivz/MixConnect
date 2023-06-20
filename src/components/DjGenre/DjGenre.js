import "./DjGenre.scss";
import { Form, Formik } from "formik";
// import * as Yup from "yup";
import MyMultiSelect from "../MyMultiSelect/MyMultiSelect";
import MyTextInput from "../MyTextInput/MyTextInput";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const DjGenre = ({ data, next, prev }) => {
  const [genres, setGenres] = useState(null);

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

  const handleSubmit = (values) => {
    next(values);
  };

  useEffect(() => {
    getGenres();
  }, []);

  if (!genres) {
    return <Loading />;
  }

  return (
    <>
      <h1>What kind of music do you play? (select as many that apply)</h1>
      <Formik initialValues={data} onSubmit={handleSubmit}>
        {(values) => (
          <Form className="dj-genre__form">
            <div className="dj-genre__genres">
              {genres.map((genre) => (
                <MyMultiSelect
                  key={genre.id}
                  name="genres"
                  value={genre.genre}
                  label={genre.genre}
                />
              ))}
              <MyTextInput name="genres" />
            </div>
            <div className="dj-genre__button-container">
              <button
                className="dj-genre__back-button"
                onClick={() => prev(values)}
                type="button"
              >
                Back
              </button>
              <button className="dj-genre__next-button" type="submit">
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DjGenre;
