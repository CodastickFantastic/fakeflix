import Hero from "../components/UI/Hero/Hero";
import MainContent from "../components/layout/MainContent";
import TopSlider from "../components/UI/Sliders/TopSlider";
import CasualSlider from "../components/UI/Sliders/CasualSlider";

export default function Home() {
  return (
    <div>
      <Hero media_type="all"/>
      <MainContent>
        <TopSlider type="series" media_type="tv" />
        <CasualSlider type="Best of Crimes" genre_id="80" media_type="movie"/>
        <CasualSlider type="Love in Romance" genre_id="10749" media_type="movie"/>
        <TopSlider type="movies" media_type="movie" />
        <CasualSlider type="Animate It" genre_id="16" media_type="movie"/>
      </MainContent>
    </div>
  );
}
