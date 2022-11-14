import { useState, useEffect } from "react";

import useMarvelService from "../../services/MarvelService";
import setContent from "../../utils/setContent";

import "./randomChar.scss";
import mjolnir from "../../resources/img/mjolnir.png";

const RandomChar = () => {
  const [char, setChar] = useState({});
  const { getCharacter, clearError, process, setProcess } = useMarvelService();

  useEffect(() => {
    updateCharacter();

    const timerId = setInterval(updateCharacter, 40000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const updateCharacter = () => {
    clearError();

    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    getCharacter(id)
      .then((res) => onCharLoaded(res))
      .then(() => setProcess("confirmed"));
  };

  return (
    <div className="randomchar">
      {setContent(process, View, char)}
      <div className="randomchar__static">
        <p className="randomchar__title">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p className="randomchar__title">Or choose another one</p>
        <button onClick={updateCharacter} className="button button__main">
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
      </div>
    </div>
  );
};

const View = ({ data }) => {
  const { name, description, thumbnail, homepage, wiki } = data;

  let thumbnailClassName = "randomchar__img";

  if (thumbnail && thumbnail.endsWith("image_not_available.jpg")) {
    thumbnailClassName += " contain";
  }

  return (
    <div className="randomchar__block">
      <img src={thumbnail} alt="Random character" className={thumbnailClassName} />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">
          {description
            ? `${description.slice(0, 206)}...`
            : "Unfortunately, there is no detailed information about this character:("}
        </p>
        <div className="randomchar__btns">
          <a href={homepage} className="button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href={wiki} className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomChar;
