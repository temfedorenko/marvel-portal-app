import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import useMarvelService from "../../services/MarvelService";

import "./charList.scss";

const CharList = (props) => {
  const [charList, setCharList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [charEnded, setCharEnded] = useState(false);

  const marvelService = useMarvelService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = (offset) => {
    onCharListLoading();
    marvelService.getAllCharacters(offset).then(onCharListLoaded).catch(onError);
  };

  const onCharListLoading = () => {
    setNewItemsLoading(true);
  };

  const onCharListLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }

    setCharList((charList) => [...charList, ...newCharList]);
    setLoading(false);
    setNewItemsLoading(false);
    setOffset((offset) => offset + 9);
    setCharEnded(ended);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const refItems = useRef([]);

  const onFocusItem = (i) => {
    refItems.current.forEach((item) => {
      item.classList.remove("char__item_selected");
    });
    refItems.current[i].classList.add("char__item_selected");
  };

  const items = charList.map((item, i) => {
    let imgStyle = { objectFit: "cover" };
    if (item.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
      imgStyle = { objectFit: "unset" };
    }

    return (
      <li
        className="char__item"
        key={item.id}
        tabIndex={0}
        ref={(el) => (refItems.current[i] = el)}
        onClick={() => {
          props.onCharSelect(item.id);
          onFocusItem(i);
        }}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            props.onCharSelect(item.id);
            onFocusItem(i);
          }
        }}>
        <img src={item.thumbnail} alt={item.name} style={imgStyle} />
        <div className="char__name">{item.name}</div>
      </li>
    );
  });

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? items : null;

  return (
    <div className="char__list">
      {errorMessage}
      {spinner}
      <ul className="char__grid">{content}</ul>
      <button
        className="button button__main button__long"
        disabled={newItemsLoading}
        style={{ display: charEnded ? "none" : "block" }}
        onClick={() => onRequest(offset)}>
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

CharList.propTypes = {
  onCharSelect: PropTypes.func.isRequired,
};

export default CharList;
