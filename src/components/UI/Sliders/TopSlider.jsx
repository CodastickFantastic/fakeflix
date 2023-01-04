import { useState, useEffect } from "react";
import TopTenItem from "../TopTenItem/TopTenItem";


import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Sliders.css";

export default function TopSlider(props) {
  const [topViwesData, setTopViewsData] = useState([]);

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
            <SwiperSlide key={newData[i].id}>
              <TopTenItem
                key={newData[i].id}
                place={i + 1}
                poster={newData[i].poster_path}
                id={newData[i].id}
                mediaType={newData[i].media_type}
              />
            </SwiperSlide>
          );
          dataArr.push(item);
        }
        return dataArr;
      });
    }
  }, []);

  return (
    <section className="sliderSection">
      <h3>Top 10 {props.type} today</h3>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        loop={true}
        loopedSlides={10}
        allowTouchMove={false}
        modules={[Navigation]}
        navigation
        centeredSlides
        breakpoints={{
          1900:{slidesPerView:8, slidesOffsetBefore: 70, centeredSlides: false},
          1400:{slidesPerView:6, slidesOffsetBefore: 70 ,centeredSlides: false},
          1100:{slidesPerView:5, slidesOffsetBefore: 70, centeredSlides: false},
          850:{slidesPerView:4, slidesOffsetBefore: 60, centeredSlides: false},
          600:{slidesPerView:3, slidesOffsetBefore: 50, centeredSlides: false}
          }}
      >
        {topViwesData}
      </Swiper>
    </section>
  );
}
