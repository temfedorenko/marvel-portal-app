import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

import "../comicsSearch/comicsSearch.scss";

const ComicsSearch = () => {
  const [comicName, setComicName] = useState("");
  const [comic, setComic] = useState([]);
  const [blockVisibility, setBlockVisibility] = useState(false);
  const { getComicByName, process, setProcess } = useMarvelService();

  useEffect(() => {
    if (comicName) {
      getComicByName(comicName)
        .then((res) => setComic(res))
        .then(() => setProcess("confirmed"));
    }
  }, [comicName]);

  const searchResults = comic.map((item) => (
    <li key={item.id} className="result__item">
      <Link to={`/comics/${item.id}`} className="result__item-link">
        <img
          className="result__item-img"
          src={item.thumbnail}
          alt={item.title}
        />
        <div className="result__item-title">{item.title}</div>
        <div className="result__item-price">{item.price}</div>
      </Link>
      <div className="background"></div>
    </li>
  ));

  const content =
    comic.length > 0 ? (
      <ul className="result__items">{searchResults}</ul>
    ) : (
      <div className="result__not-found">
        <p>This comic was not found. </p>
        <p>Please, check the name and try again</p>
      </div>
    );
  const errorMessage = process === "error" ? <ErrorMessage /> : null;
  const spinner = process === "loading" ? <Spinner /> : null;

  return (
    <div className="comic__search">
      <form className="comic__search-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="charName" className="comic__search-label">
          Find a comic by name:
        </label>
        <div className="comic__search-wrapper">
          <input
            className="comic__search-input"
            id="comicName"
            type="text"
            name="comicName"
            value={comicName}
            placeholder="Enter a name here"
            onChange={(e) => setComicName(e.target.value)}
            onFocus={() => setBlockVisibility(true)}
            onBlur={() => setTimeout(() => setBlockVisibility(false), 100)}
          />
          <div
            className={
              blockVisibility && comicName
                ? "comic__search-result result active"
                : "comic__search-result result"
            }
          >
            {errorMessage}
            {spinner}
            {process !== "loading" ? content : null}
          </div>
        </div>
        <div className={blockVisibility ? "backdrop active" : "backdrop"}></div>
      </form>
    </div>
  );
};

export default ComicsSearch;
