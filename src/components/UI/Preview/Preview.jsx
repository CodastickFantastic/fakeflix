import { useEffect, useState, useContext } from "react";
import MoreInfoContext from "../../../contexts/MoreInfoContext";

//CSS Importing
import "./Preview.css";

// Icons Importing
import N from "../../../img/n.png";
import playBtn from "../../../img/icons/play.png";
import emptyStar from "../../../img/icons/empty_star.png";
import fullStar from "../../../img/icons/full_star.png";
import moreInfoImg from "../../../img/icons/info.png";
import netflixPoster from "../../../img/netflix_poster.png";
import FavouriteContext from "../../../contexts/FavouriteContext";

export default function Preview(props) {
  const [data, setData] = useState();

  const { displayMoreInfo } = useContext(MoreInfoContext);
  const { addToFav, isFav, removeFav } = useContext(FavouriteContext);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${props.mediaType}/${props.id}?api_key=18f5bf837784bc2be97b452a18de806d`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    data && (
      <div className="itemPreview" onMouseLeave={props.hidePreview}>
        <div className="previewHero">
          <img
            className="previewImg"
            src={
              data.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${data.backdrop_path}`
                : netflixPoster
            }
            alt="alt TODO"
          />
          <div className="previewDescription">
            <div className="mediaType">
              <img src={N} alt="alt TODO" />
              {props.mediaType === "tv" ? "SERIES" : "MOVIE"}
            </div>
            <h3 className="previewTitle">{data.title || data.name}</h3>
          </div>
        </div>
        <div className="previewButtons">
          <div>
            <button className="previewPlay">
              <img src={playBtn} alt="alt TODO" />
            </button>
            <button className="previwFavourite">
              {isFav(props.id) ? (
                <img src={fullStar} onClick={() => removeFav(props.id, props.mediaType)} />
              ) : (
                <img src={emptyStar} onClick={() => addToFav(props.id, props.mediaType)} />
              )}
            </button>
          </div>
          <button className="moreInfoBtn">
            <img
              src={moreInfoImg}
              alt="info icon"
              onClick={() => displayMoreInfo(props.id, props.mediaType)}
            />
          </button>
        </div>
      </div>
    )
  );
}
