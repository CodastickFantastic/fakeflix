import glasonion from "../../img/glasonion.jpg";
import playIcon from "../../img/play.png";
import infoIcon from "../../img/info.png";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <img src={glasonion} alt="hero" />
      <div className="textContainer">
        <h2 className="heroTitle">Glass Onion</h2>
        <p className="shortDescription">
          World-famous detective Benoit Blanc heads to Greece to peel back the
          layers of a mystery surrounding a tech billionaire and his eclectic
          crew of friends.
        </p>
        <div className="heroButtons">
          <button className="playBtn">
            <img src={playIcon} />
            Play
          </button>
          <button className="infoBtn">
            <img src={infoIcon} />
            More info
          </button>
        </div>
      </div>
    </section>
  );
}
