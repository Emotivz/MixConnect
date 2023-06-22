import "./DjGenre.scss";
import { Form, Formik } from "formik";
import MyMultiSelect from "../MyMultiSelect/MyMultiSelect";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import NextButton from "../NextButton/NextButton";
import BackButton from "../BackButton/BackButton";

const DjGenre = ({ data, next, prev }) => {
  const [genres, setGenres] = useState(null);
  const [genreErrors, setGenreErrors] = useState(null);

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
    if (values.genres.length === 0) {
      return setGenreErrors("Please select at least one genre");
    }
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
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
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
            </div>
            {genreErrors && (
              <div className="text-input__error">{genreErrors}</div>
            )}
            <div className="dj-genre__button-container">
              <BackButton prev={prev} values={values} />
              <NextButton />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DjGenre;
