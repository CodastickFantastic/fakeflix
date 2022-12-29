import TopTenItem from "./TopTenItem";
import { useState, useEffect } from "react";

import "./TopTenSection.css";

export default function TopTenSection(props) {
  const [topViwesData, setTopViewsData] = useState([]);
  const [moveSlider, setMoveSlider] = useState(-2000)

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
            />
          );
          dataArr.push(item);
        }
        return dataArr;
      });
    }
  }, []);


  let slider = document.getElementsByClassName("itemHolder");
  function HandleMoveLeft() {
    if(moveSlider > -2200){
      setMoveSlider(prevPosition => prevPosition - 1500)
    }
    console.log(slider)
    
  }

  return (
    <section className="topViews">
      <h3>Top 10 {props.type} today</h3>
      <div className="navigation">
        <button>L</button>
        <div className="itemHolder" style={{left: moveSlider}}>{topViwesData}</div>
        <button onClick={HandleMoveLeft}>P</button>
      </div>
    </section>
  );
}
