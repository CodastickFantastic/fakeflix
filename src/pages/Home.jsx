import Hero from "../components/UI/Hero/Hero";
import MainContent from "../components/layout/MainContent/MainContent";
import TopSlider from "../components/UI/Sliders/TopSlider";
import CasualSlider from "../components/UI/Sliders/CasualSlider";

import MoviesId from "../assets/MoviesId.json";
import SeriesId from "../assets/SeriesId.json";

export default function Home() {
  function drawSliders() {
    let array = [];

    for (let i = 0; i < 5; i++) {
      let ranMovieLength = Math.floor(Math.random() * MoviesId.length);
      let ranSeriesLength = Math.floor(Math.random() * SeriesId.length);
      array.push(
        <CasualSlider
          type={MoviesId[ranMovieLength].name}
          genre_id={MoviesId[ranMovieLength].id}
          media_type="movie"
          key={Math.floor(Math.random() * 1000000000000)}
        />
      );
      array.push(
        <CasualSlider
          type={SeriesId[ranSeriesLength].name}
          genre_id={SeriesId[ranSeriesLength].id}
          media_type="tv"
          key={Math.floor(Math.random() * 1000000000000)}
        />
      );
    }

    array[Math.floor(Math.random() * array.length)] = (
      <TopSlider type="series" media_type="tv" key={Math.floor(Math.random() * 1000000000000)} />
    );
    array[Math.floor(Math.random() * array.length)] = (
      <TopSlider type="movies" media_type="movie" key={Math.floor(Math.random() * 1000000000000)} />
    );

    return array;
  }

  let list = drawSliders();

  return (
    <main>
      <Hero media_type="all" />
      <MainContent>{list}</MainContent>
    </main>
  );
}
