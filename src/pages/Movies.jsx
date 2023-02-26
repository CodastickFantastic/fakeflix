import Hero from "../components/UI/Hero/Hero";
import MainContent from "../components/layout/MainContent/MainContent";
import CasualSlider from "../components/UI/Sliders/CasualSlider";
import TopSlider from "../components/UI/Sliders/TopSlider";

import MoviesId from "../assets/MoviesId.json";

export default function Movies() {
  function drawSliders() {
    let array = [];

    for (let i = 0; i < 9; i++) {
      let ranMoviesLength = Math.floor(Math.random() * MoviesId.length);
      array.push(
        <CasualSlider
          type={MoviesId[ranMoviesLength].name}
          genre_id={MoviesId[ranMoviesLength].id}
          media_type="movie"
          key={Math.floor(Math.random() * 1000000000000)}
        />
      );
    }

    array[Math.floor(Math.random() * array.length)] = (
      <TopSlider type="movie" media_type="movie" key={Math.floor(Math.random() * 1000000000000)} />
    );

    return array;
  }

  let list = drawSliders();

  return (
    <>
      <Hero media_type="movie" />
      <MainContent>{list}</MainContent>
    </>
  );
}
