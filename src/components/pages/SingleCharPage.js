import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import useMarvelService from "../../services/MarvelService";

import "./singleCharPage.scss";

const SingleCharPage = () => {
  const { charId } = useParams();
  const [char, setChar] = useState(null);

  const { loading, error, getCharacter, clearError } = useMarvelService();

  useEffect(() => {
    updateChar();
  }, [charId]);

  const updateChar = () => {
    clearError();
    getCharacter(charId).then(onCharLoaded);
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

const View = ({ char }) => {
  const { name, description, thumbnail, comics } = char;
  return (
    <div className="single-char">
      <Helmet>
        <meta name="description" content={`${name} page`} />
        <title>{name}</title>
      </Helmet>
      <img src={thumbnail} alt={name} className="single-char__img" />
      <div className="single-char__info">
        <h2 className="single-char__name">{name}</h2>
        <p className="single-char__descr">
          {description
            ? description
            : "Unfortunately, there is no detailed information about this character:("}
        </p>
        <div className="single-char__comics">Comics:</div>
        <ul className="single-char__comics-list">
          {comics.length > 0 ? null : "There is no comics with this character"}
          {comics.map((item, i) => {
            return (
              <li key={i} className="char__comics-item">
                <Link to={`/comics/${item.resourceURI.slice(43)}`}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <Link to="/" className="single-char__back">
        Back to main page
      </Link>
    </div>
  );
};

export default SingleCharPage;
