import glasonion from "../../img/glasonion.jpg";
import playIcon from "../../img/play.png";
import infoIcon from "../../img/info.png";
import {useState, useEffect} from "react"

import "./Hero.css";

export default function Hero(props) {
  const [heroSection, setHeroSection] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/${props.media_type}/week?api_key=18f5bf837784bc2be97b452a18de806d`
    )
      .then((response) => response.json())
      .then((data) => setData(data.results));

      function setData(data){
        let randomNumber = Math.floor(Math.random() * data.length)
        setHeroSection(data[randomNumber])
      }
  }, []);

  console.log("log", heroSection)

  return (
    <section className="hero">
      <img src={`https://image.tmdb.org/t/p/original/${heroSection.backdrop_path}`} alt="hero" />
      <div className="textContainer">
        <h2 className="heroTitle">{heroSection.title || heroSection.name}</h2>
        <p className="shortDescription">
          {heroSection.overview}
        </p>
        <div className="heroButtons">
          <button className="playBtn">
            <img src={playIcon} />
            Play
          </button>
          <button className="infoBtn" onClick={()=> console.log(heroSection.id)}>
            <img src={infoIcon} />
            More info
          </button>
        </div>
      </div>
    </section>
  );
}
