import { useEffect, useState, useContext } from "react";

//Importing CSS
import "./MoreInfo.css";

//Importing Images
import netflixPoster from "../../../img/netflix_poster.png";

export default function MoreInfo(props) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${props.media_type}/${props.id}?api_key=18f5bf837784bc2be97b452a18de806d`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    data && (
      <div className="moreInfo">
        <div className="background" onClick={props.quit} />
        <div className="infoToShow">
          <div className="moreInfoHero">
            <img
              src={
                data.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${data.backdrop_path}`
                  : netflixPoster
              }
            />
            <button className="moreInfoQuitBtn" onClick={props.quit}>
              X
            </button>
            <h2 className="moreInfoTitle">{data.title || data.name}</h2>
          </div>
          <div className="moreInfoDescription">
            <div className="genreSection">
              {data.genres.map((genre) => {
                return (
                  <p key={Math.random() * 10000000} className="genrePile">
                    {genre.name}
                  </p>
                );
              })}
            </div>
            <p className="description">{data.overview}</p>
          </div>
        </div>
      </div>
    )
  );
}
