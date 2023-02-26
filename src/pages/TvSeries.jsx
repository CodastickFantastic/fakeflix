import Hero from "../components/UI/Hero/Hero";
import MainContent from "../components/layout/MainContent/MainContent";
import TopSlider from "../components/UI/Sliders/TopSlider";
import CasualSlider from "../components/UI/Sliders/CasualSlider";

import tvShowsGenresList from "../assets/SeriesId.json";
import { randomNoRepeats } from "utils";

const randTvShowsGenres = randomNoRepeats(tvShowsGenresList);

const drawSliders = () => {
  let array = [];

  array[0] = (
    <TopSlider type="series" media_type="tv" key={Math.floor(Math.random() * 1000000000000)} />
  );

  for (let i = 1; i < 11; i++) {
    let { id: tvSeriesId, name: tvSeriesName } = randTvShowsGenres();

    array.push(
      <CasualSlider
        type={tvSeriesName}
        genre_id={tvSeriesId}
        media_type="tv"
        key={"tvShow_genre" + tvSeriesId}
      />
    );
  }

  return array;
};

export default function TvSeries() {
  return (
    <>
      <Hero media_type="tv" />
      <MainContent>{drawSliders()}</MainContent>
    </>
  );
}
