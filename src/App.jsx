import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TvSeries from "./pages/TvSeries";
import Header from "./components/layout/Header/Header";
import Movies from "./pages/Movies";
import MyList from "./pages/MyList";

import { FavouriteProvider } from "./contexts/FavouriteContext";
import { MoreInfoProvider } from "./contexts/MoreInfoContext";
import { SearchContextProvider } from "./contexts/SearchContext";
import { Footer } from "components/UI/Footer";

const App = () => (
  <BrowserRouter>
    <FavouriteProvider>
      <MoreInfoProvider>
        <SearchContextProvider>
          <Header />
          <main className="main">
            <Routes>
              <Route path="/fakeflix" element={<Home />} />
              <Route path="/series" element={<TvSeries />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/my-list" element={<MyList />} />
            </Routes>
          </main>
          <Footer />
        </SearchContextProvider>
      </MoreInfoProvider>
    </FavouriteProvider>
  </BrowserRouter>
);

export default App;
