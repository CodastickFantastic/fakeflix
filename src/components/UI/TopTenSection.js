import TopTenItem from "./TopTenItem";
import { useState, useEffect } from "react";

import "./TopTenSection.css";

export default function TopTenSection(props) {
  const [topViwesData, setTopViewsData] = useState([]);
  const [sliderPosition, setSliderPosition] = useState(0);

  //Fetch data from API
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/${props.media_type}/day?api_key=18f5bf837784bc2be97b452a18de806d`
    )
      .then((response) => response.json())
      .then((data) => setData(data.results));

    function setData(data) {
      let newData = data.slice(0, 10);
      setTopViewsData(() => {
        let dataArr = [];
        for (let i = 0; i < newData.length; i++) {
          let item = (
            <TopTenItem
              key={newData[i].id}
              place={i + 1}
              poster={newData[i].poster_path}
              id={newData[i].id}
              mediaType={newData[i].media_type}
            />
          );
          dataArr.push(item);
        }
        return dataArr;
      });
    }
  }, []);

  //Let slider move
  let sliderFilling = document.getElementsByClassName("sliderItems");
  let slider = document.getElementsByClassName("slider");

  function moveLeft() {
    let maxRange = slider[0].offsetWidth - sliderFilling[0].offsetWidth;
    if (sliderPosition > maxRange) {
      setSliderPosition((prevPosition) => prevPosition - (-maxRange/5));
    }
    console.log("sliderFiling",sliderFilling)
    console.log("maxRange",maxRange)
  }

  function moveRigth() {
    let maxRange = slider[0].offsetWidth - sliderFilling[0].offsetWidth;
    if (sliderPosition < 0) {
      setSliderPosition((prevPosition) => prevPosition - maxRange/5);
    }
  }

  return (
    <section className="topViewSection">
      <h3>Top 10 {props.type} today</h3>
      <div className="slider">
        <div className="sliderItems" style={{ left: sliderPosition }}>
          {topViwesData}
        </div>
        <button className="sliderButtonPrev" onClick={moveRigth}>
          &#9665;
        </button>
        <button className="sliderButtonNext" onClick={moveLeft}>
          &#9655;
        </button>
      </div>
    </section>
  );
}
