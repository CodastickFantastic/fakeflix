import playIcon from "../../../img/icons/play.png";
import infoIcon from "../../../img/icons/info.png";
import { useState, useEffect } from "react";
import N from "../../../img/n.png";
import MoreInfo from "../MoreInfo/MoreInfo";

import "./Hero.css";

export default function Hero(props) {
  const [heroSection, setHeroSection] = useState();
  const [moreInfo, setMoreInfo] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/${props.media_type}/week?api_key=18f5bf837784bc2be97b452a18de806d`
    )
      .then((response) => response.json())
      .then((data) => setData(data.results));

    function setData(data) {
      let randomNumber = Math.floor(Math.random() * data.length);
      setHeroSection(data[randomNumber]);
    }
  }, []);

  function toggleMoreInfo(event) {
    event.stopPropagation()
    if (
      event.target.className === "infoBtn" ||
      event.target.className === "moreInfo" ||
      event.target.className === "moreInfoQuitBtn"
    ) {
      setMoreInfo((prev) => !prev);
    }
  }

  return (
    <>
      {moreInfo && <MoreInfo id={heroSection.id} quit={toggleMoreInfo} media_type={heroSection.media_type} />}
      {heroSection && (
        <section className="hero">
          <img
            src={`https://image.tmdb.org/t/p/original/${heroSection.backdrop_path}`}
            alt="hero"
          />
          <div className="textContainer">
            <div className="mediaType">
              <img src={N} />
              {heroSection.media_type === "tv" ? "SERIES" : "MOVIE"}
            </div>
            <h2 className="heroTitle">
              {heroSection.title || heroSection.name}
            </h2>
            <p className="shortDescription">{heroSection.overview}</p>
            <div className="heroButtons">
              <button className="playBtn">
                <img src={playIcon} />
                Play
              </button>
              <button className="infoBtn" onClick={toggleMoreInfo}>
                <img src={infoIcon} />
                More info
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
