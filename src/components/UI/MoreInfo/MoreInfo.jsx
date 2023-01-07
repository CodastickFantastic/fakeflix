import { useEffect, useState } from "react";

import netflixPoster from "../../../img/netflix_poster.png";
import "./MoreInfo.css";

export default function MoreInfo(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${props.media_type}/${props.id}?api_key=18f5bf837784bc2be97b452a18de806d`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
      <div className="moreInfo" onClick={props.quit}>
        <div className="infoToShow">
          <div className="moreInfoHero">
            <img
              src={
                data.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
                  : netflixPoster
              }
            />
            <button className="moreInfoQuitBtn" onClick={props.quit}>X</button>
          </div>
          <div className="moreInfoDescription"></div>
        </div>
      </div>
  );
}
