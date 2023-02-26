import { useState, useEffect, useContext } from "react";
import MoreInfoContext from "contexts/MoreInfoContext";

//Importing CSS
import "./Hero.css";

//Importing Images
import playIcon from "assets/images/icons/play.png";
import infoIcon from "assets/images/icons/info.png";
import netflixN from "assets/images/n.png";
import { myFetch, randomNumber } from "utils";

export default function Hero({ media_type }) {
  const [data, setData] = useState({});
  const { displayMoreInfo } = useContext(MoreInfoContext);

  useEffect(() => {
    myFetch("/trending/all/week").then(({ results }) =>
      setData(results[randomNumber(results.length)] ?? {})
    );
  }, [media_type]);

  return (
    Object.keys(data)?.length > 0 && (
      <section className="hero">
        <img
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          height="700"
          alt="hero"
        />
        <div className="textContainer">
          <div className="mediaType">
            <img src={netflixN} alt="netflis's n letter" />
            {data.media_type === "tv" ? "TV SERIES" : "MOVIE"}
          </div>

          <h2 className="heroTitle">{data.title || data.name}</h2>

          <p className="shortDescription">{data.overview}</p>
          <div className="heroButtons">
            <button className="playBtn">
              <img src={playIcon} alt="play icon" />
              Play
            </button>
            <button className="infoBtn" onClick={() => displayMoreInfo(data.id, data.media_type)}>
              <img src={infoIcon} alt="info icon" />
              More info
            </button>
          </div>
        </div>
      </section>
    )
  );
}
