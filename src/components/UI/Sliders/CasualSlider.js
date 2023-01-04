import "./Sliders.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import ItemTile from "../ItemTile/ItemTile";

export default function CasualSlider(props) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/${props.media_type}?api_key=18f5bf837784bc2be97b452a18de806d&with_genres=${props.genre_id}`
    )
      .then((response) => response.json())
      .then((data) => showData(data.results));

    function showData(data) {
      setData(
        data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <ItemTile id={item.id} mediaType={props.media_type} />
            </SwiperSlide>
          );
        })
      );
    }
  }, []);

  return (
    data && (
      <section className="sliderSection casualSlider">
        <h3>{props.type}</h3>
        <Swiper
          slidesPerView={2}
          loop={true}
          loopedSlides={20}
          allowTouchMove={false}
          modules={[Navigation]}
          navigation
          centeredSlides={true}
          breakpoints={{
            1900: {
              slidesPerView: 6,
              slidesOffsetBefore: 70,
              centeredSlides: false,
            },
            1400: {
              slidesPerView: 5,
              slidesOffsetBefore: 70,
              centeredSlides: false,
            },
            1100: {
              slidesPerView: 4,
              slidesOffsetBefore: 70,
              centeredSlides: false,
            },
            850: {
              slidesPerView: 3,
              slidesOffsetBefore: 60,
              centeredSlides: false,
            },
            600: {
              slidesPerView: 2,
              slidesOffsetBefore: 50,
              centeredSlides: false,
            },
            300:{
              slidesPerView: 2,
              centeredSlides: true,
              allowTouchMove: true
            }
          }}
        >
          {data}
        </Swiper>
      </section>
    )
  );
}
