import { useState, useEffect, useContext } from "react";
import MoreInfoContext from "../../../utility/MoreInfoContext";

//Importing CSS
import "./Hero.css";

//Importing Images
import playIcon from "../../../img/icons/play.png";
import infoIcon from "../../../img/icons/info.png";
import N from "../../../img/n.png";

export default function Hero(props) {
  const [data, setData] = useState();

  const { displayMoreInfo } = useContext(MoreInfoContext);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/${props.media_type}/week?api_key=18f5bf837784bc2be97b452a18de806d`
    )
      .then((response) => response.json())
      .then((data) => pickRandomData(data.results));

    function pickRandomData(data) {
      let randomNumber = Math.floor(Math.random() * data.length);
      setData(data[randomNumber]);
    }
  }, []);

  return (
    data && (
      <section className="hero">
        <img
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          alt="hero"
        />
        <div className="textContainer">
          <div className="mediaType">
            <img src={N} />
            {data.media_type === "tv" ? "SERIES" : "MOVIE"}
          </div>
          <h2 className="heroTitle">{data.title || data.name}</h2>
          <p className="shortDescription">{data.overview}</p>
          <div className="heroButtons">
            <button className="playBtn">
              <img src={playIcon} />
              Play
            </button>
            <button
              className="infoBtn"
              onClick={() => {
                displayMoreInfo(data.id, data.media_type);
              }}
            >
              <img src={infoIcon} />
              More info
            </button>
          </div>
        </div>
      </section>
    )
  );
}
