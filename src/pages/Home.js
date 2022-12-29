import Hero from "../components/UI/Hero";
import MainContent from "../components/layout/MainContent";
import TopTenSection from "../components/UI/TopTenSection";

export default function Home() {
  return (
    <div>
      <Hero media_type="all"/>
      <MainContent>
        <TopTenSection type="series" media_type="tv" />
      </MainContent>
    </div>
  );
}
