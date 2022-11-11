import { logDOM } from "@testing-library/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";

import "./charSearch.scss";

const CharSearch = () => {
  const [charName, setCharName] = useState("");
  const [char, setChar] = useState(null);
  const { loading, error, getCharacterByName, clearError } = useMarvelService();

  const onChange = (e) => {
    setCharName(e.target.value);
  };

  const onCharLoaded = (char) => {
    setChar(char);
    setCharName("");
  };
  console.log(char);
  console.log(char && char.length);

  const updateCharacter = () => {
    clearError();

    getCharacterByName(charName).then((res) => onCharLoaded(res));
  };

  return (
    <>
      <form
        action="#"
        className="char__search"
        onSubmit={(e, charName) => {
          e.preventDefault();
          updateCharacter(charName);
        }}
      >
        <label htmlFor="charName" className="char__search-label">
          Find a character by name:
        </label>
        <input
          className="char__search-input"
          id="charName"
          type="text"
          name="charName"
          value={charName}
          placeholder="Enter name here"
          onChange={onChange}
        />
        <button type="submit" className="button button__main">
          <div className="inner">Find</div>
        </button>
        {char ? <a href={char[0].homepage}>{char[0].name}</a> : null}
      </form>
    </>
  );
};

export default CharSearch;
