import Hero from "../components/UI/Hero/Hero";
import MainContent from "../components/layout/MainContent/MainContent";
import TopSlider from "../components/UI/Sliders/TopSlider";
import CasualSlider from "../components/UI/Sliders/CasualSlider";

import moviesGenresList from "../assets/MoviesId.json";
import tvShowsGenresList from "../assets/SeriesId.json";
import { randomNoRepeats } from "utils";

const numOfSliders = 6;
const randMoviesGenres = randomNoRepeats(moviesGenresList);
const randTvShowsGenres = randomNoRepeats(tvShowsGenresList);

const drawSliders = () => {
  let array = [];

  array[0] = <TopSlider type="movies" media_type="movie" key="TopSlider movies" />;
  array[numOfSliders] = <TopSlider type="series" media_type="tv" key="TopSlider tv series" />;

  for (let i = 0; i < numOfSliders; i++) {
    let { id: movieId, name: movieName } = randMoviesGenres();
    let { id: tvSeriesId, name: tvSeriesName } = randTvShowsGenres();

    if (i === 0 || i === numOfSliders) {
      continue;
    }

    array[i] = (
      <CasualSlider
        type={movieName}
        genre_id={movieId}
        media_type="movie"
        key={"movie_genre" + movieId}
      />
    );

    array[i + numOfSliders] = (
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

const Home = () => {
  return (
    <>
      <Hero media_type="all" />
      <MainContent>{drawSliders()}</MainContent>

      {/* <MainContent>
        <TopSlider type="movies" media_type="movie" key="TopSlider movies" />
        {moviesGenresList.map(({ name, id }) => (
          <CasualSlider type={name} genre_id={id} media_type="movie" key={id} />
        ))}

        <TopSlider type="series" media_type="tv" key="TopSlider tv series" />
        {moviesGenresList.map(({ name, id }) => (
          <CasualSlider type={name} genre_id={id} media_type="movie" key={id} />
        ))}
      </MainContent> */}
    </>
  );
};

export default Home;
