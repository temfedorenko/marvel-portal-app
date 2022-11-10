import { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage as FormikErrorMessage,
} from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./charSearch.scss";

const CharSearch = () => {
  const [char, setChar] = useState(null);
  const { loading, error, getCharacterByName, clearError } = useMarvelService();

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const updateCharacter = (name) => {
    clearError();

    getCharacterByName(name).then((res) => onCharLoaded(res));
  };

  return (
    <>
      <div className="char__search">
        <Formik
          initialValues={{ charName: "" }}
          validationSchema={Yup.object({
            charName: Yup.string()
              .required("Please, enter the name of character")
              .min(3, "Min 3 symbols"),
          })}
          onSubmit={({ charName }) => updateCharacter(charName)}
        >
          <Form>
            <div className="char__search-title">Find a character by name:</div>
            <Field
              className="char__search-input"
              id="charName"
              name="charName"
              type="text"
              placeholder="Enter name here"
            />
            <button
              type="submit"
              className="button button__main"
              disabled={loading}
            >
              Find
            </button>
            <FormikErrorMessage
              className="char__search-error"
              name="charName"
              component="div"
            />
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default CharSearch;
