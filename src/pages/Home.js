import Hero from "../components/UI/Hero/Hero";
import MainContent from "../components/layout/MainContent";
import TopSlider from "../components/UI/TopSlider/TopSlider";

export default function Home() {
  return (
    <div>
      <Hero media_type="all"/>
      <MainContent>
        <TopSlider type="series" media_type="tv" />
        <TopSlider type="movies" media_type="movie" />
      </MainContent>
    </div>
  );
}
