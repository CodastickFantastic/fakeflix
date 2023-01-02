import Hero from "../components/UI/Hero";
import MainContent from "../components/layout/MainContent";
import TopTenSection from "../components/UI/TopTenSection";
import Preview from "../components/UI/Preview";

export default function Home() {
  return (
    <div>
      <Hero media_type="all"/>
      <MainContent>
        <TopTenSection type="series" media_type="tv" />
        {/* <Preview /> */}
      </MainContent>
    </div>
  );
}
