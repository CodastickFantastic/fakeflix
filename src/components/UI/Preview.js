import "./Preview.css";
import N from "../../img/n.png"
import playBtn from "../../img/play.png";
import { useEffect, useState } from "react";

export default function Preview(props) {
  const [data, setData] = useState([]);

  console.log(props.mediaType)

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${props.mediaType}/${props.id}?api_key=18f5bf837784bc2be97b452a18de806d`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="itemPreview" onMouseLeave={props.hidePreview}>
      <div className="previewHero">
        <img
          className="previewImg"
          src={"https://image.tmdb.org/t/p/original" + data.backdrop_path}
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
        <button className="previewPlay">
          <img src={playBtn} />
        </button>
        <button className="previwFavourite"></button>
        <button className="previewShowMore"></button>
      </div>
    </div>
  );
}
