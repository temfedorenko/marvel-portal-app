import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";

import AppBanner from "../appBanner/AppBanner";
import useMarvelService from "../../services/MarvelService";
import setContent from "../../utils/setContent";

import "./singleCharPage.scss";

const SingleCharPage = () => {
  const { charId } = useParams();
  const [char, setChar] = useState(null);

  const { getCharacter, clearError, process, setProcess } = useMarvelService();

  useEffect(() => {
    updateChar();
  }, [charId]);

  const updateChar = () => {
    clearError();
    getCharacter(charId)
      .then(onCharLoaded)
      .then(() => setProcess("confirmed"));
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  return (
    <>
      <AppBanner />
      {setContent(process, View, char)}
    </>
  );
};

const View = ({ data }) => {
  const { name, description, thumbnail, comics } = data;
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
