import "./Sliders.css";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import ItemTile from "../ItemTile/ItemTile";
import { myFetch } from "utils";

export default function CasualSlider({ media_type, genre_id, type }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    myFetch(`/discover/${media_type}`, `&with_genres=${genre_id}`).then(({ results }) => {
      setData(
        results?.map((item) => (
          <SwiperSlide key={item.id}>
            <ItemTile id={item.id} mediaType={media_type} />
          </SwiperSlide>
        )) ?? []
      );
    });
  }, [media_type, genre_id]);

  return (
    data?.length > 0 && (
      <section className="sliderSection casualSlider">
        <h3>{type}</h3>
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
              centeredSlides: true,
            },
            100: {
              slidesPerView: 2,
              slidesOffsetBefore: -40,
              centeredSlides: true,
              allowTouchMove: true,
            },
          }}
        >
          {data}
        </Swiper>
      </section>
    )
  );
}
