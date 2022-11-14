import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import useMarvelService from "../../services/MarvelService";

import "./comicsList.scss";

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

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);
  const [newItemsLoading, setNewItemsLoading] = useState(false);
  const [offset, setOffset] = useState(200);
  const [comicsEnded, setComicsEnded] = useState(false);

  const { getAllComics, process, setProcess } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemsLoading(false) : setNewItemsLoading(true);
    getAllComics(offset)
      .then(onComicsListLoaded)
      .then(() => setProcess("confirmed"));
  };

  const onComicsListLoaded = (newComicsList) => {
    let ended = false;
    if (newComicsList.length < 8) {
      ended = true;
    }

    setComicsList((comicsList) => [...comicsList, ...newComicsList]);
    setNewItemsLoading(false);
    setOffset((offset) => offset + 8);
    setComicsEnded(ended);
  };

  const items = comicsList.map((item, i) => {
    return (
      <CSSTransition key={i} timeout={700} classNames="comics__item">
        <li className="comics__item">
          <Link to={`/comics/${item.id}`}>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="comics__item-img"
            />
            <div className="comics__item-name">{item.title}</div>
            <div className="comics__item-price">{item.price}</div>
          </Link>
        </li>
      </CSSTransition>
    );
  });

  const itemsContent = () => {
    return (
      <ul className="comics__grid">
        <TransitionGroup component={null}>{items}</TransitionGroup>
      </ul>
    );
  };

  console.log("comics");

  const elements = useMemo(() => {
    return setContent(process, itemsContent, newItemsLoading);
  }, [process]);

  return (
    <div className="comics__list">
      {elements}
      <button
        onClick={() => onRequest(offset)}
        className="button button__main button__long"
        disabled={newItemsLoading}
        style={{ display: comicsEnded ? "none" : "block" }}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
