import { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import useMarvelService from "../../services/MarvelService";

import "./charList.scss";
import { useMemo } from "react";

const setContent = (process, Component, newItemsLoading) => {
  switch (process) {
    case "waiting":
      return <Spinner />;
    case "loading":
      return newItemsLoading ? <Component /> : <Spinner />;
    case "confirmed":
      return <Component />;
    case "error":
      return <ErrorMessage />;
    default:
      throw new Error("unespected process state");
  }
};

const CharList = (props) => {
  const [charList, setCharList] = useState([]);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [offset, setOffset] = useState(73);
  const [charEnded, setCharEnded] = useState(false);

  const { getAllCharacters, process, setProcess } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemsLoading(false) : setNewItemsLoading(true);
    getAllCharacters(offset)
      .then(onCharListLoaded)
      .then(() => setProcess("confirmed"));
  };

  const onCharListLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }
    setCharList((charList) => [...charList, ...newCharList]);
    setNewItemsLoading(false);
    setOffset((offset) => offset + 9);
    setCharEnded(ended);
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
    if (
      item.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ||
      item.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"
    ) {
      imgStyle = { objectFit: "unset" };
    }

    return (
      <CSSTransition key={item.id} timeout={500} classNames="char__item">
        <li
          className="char__item"
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
          }}
        >
          <img src={item.thumbnail} alt={item.name} style={imgStyle} />
          <div className="char__name">{item.name}</div>
        </li>
      </CSSTransition>
    );
  });

  const itemsContent = () => {
    return (
      <ul className="char__grid">
        <TransitionGroup component={null}>{items}</TransitionGroup>
      </ul>
    );
  };

  const elements = useMemo(() => {
    return setContent(process, itemsContent, newItemsLoading);
  }, [process]);

  return (
    <div className="char__list">
      {elements}
      <button
        className="button button__main button__long"
        disabled={newItemsLoading}
        style={{ display: charEnded ? "none" : "block" }}
        onClick={() => onRequest(offset)}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

CharList.propTypes = {
  onCharSelect: PropTypes.func.isRequired,
};

export default CharList;
