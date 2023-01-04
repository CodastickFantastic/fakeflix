import "./Preview.css";
import N from "../../../img/n.png";
import playBtn from "../../../img/icons/play.png";
import emptyStar from "../../../img/icons/empty_star.png";
import fullStar from "../../../img/icons/full_star.png";
import like from "../../../img/icons/like.png";
import moreInfo from "../../../img/icons/info.png";
import netflixPoster from "../../../img/netflix_poster.png"
import { useEffect, useState } from "react";

export default function Preview(props) {
  const [data, setData] = useState();

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
            src={data.backdrop_path ? `https://image.tmdb.org/t/p/original${data.backdrop_path}` : netflixPoster}
          />
          <div className="previewDescription">
            <div className="mediaType">
              <img src={N} />
              {props.mediaType === "tv" ? "SERIES" : "MOVIE"}
            </div>
            <h3 className="previewTitle">{data.title || data.name}</h3>
          </div>
        </div>
        <div className="previewButtons">
          <div>
            <button className="previewPlay">
              <img src={playBtn} />
            </button>
            <button className="previwFavourite">
              <img src={emptyStar} />
            </button>
            <button className="previewShowMore">
              <img src={like} />
            </button>
          </div>
          <button className="previewPlay">
            <img src={moreInfo} />
          </button>
        </div>
      </div>
    )
  );
}
