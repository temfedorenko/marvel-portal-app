import { useState } from "react";
import { Link } from "react-router-dom";

import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

import "./charSearch.scss";

const CharSearch = () => {
  const [charName, setCharName] = useState("");
  const [char, setChar] = useState(null);
  const [validationMessage, setValidationMessage] = useState("");
  const { loading, error, getCharacterByName, clearError } = useMarvelService();

  const onChange = (e) => {
    setCharName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(charName.length);

    if (charName.length === 0) {
      setValidationMessage("This field is required");
      return;
    }

    if (charName.length < 3) {
      setValidationMessage("At least three characters");
      return;
    }

    setValidationMessage("");
    updateCharacter(charName);
  };

  const onCharLoaded = (char) => {
    setChar(char);
    setCharName("");
  };
  console.log(char);

  const updateCharacter = () => {
    clearError();

    getCharacterByName(charName).then((res) => onCharLoaded(res));
  };

  const searchResult = !char ? null : char.length > 0 ? (
    <div className="char__search-success">
      Click to visit {char[0].name}'s page
      <Link to={`/characters/${char[0].id}`} className="button button__secondary">
        <div className="inner">To page</div>
      </Link>
    </div>
  ) : (
    <div className="char__search-error">This character was not found</div>
  );
  const validation = validationMessage ? (
    <div className="char__search-error">{validationMessage}</div>
  ) : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  return (
    <div className="char__search">
      <form action="#" className="char__search-form" onSubmit={onSubmit}>
        <label htmlFor="charName" className="char__search-label">
          Find a character by name:
        </label>
        <input
          className="char__search-input"
          id="charName"
          type="text"
          name="charName"
          value={charName}
          placeholder="Enter a name here"
          onChange={onChange}
          onFocus={() => {
            setValidationMessage("");
          }}
        />
        <button type="submit" className="button button__main">
          <div className="inner">Find</div>
        </button>
      </form>

      <div className="char__search-result">
        {spinner}
        {errorMessage}
        {validation}
        {!loading ? searchResult : null}
      </div>
    </div>
  );
};

export default CharSearch;
