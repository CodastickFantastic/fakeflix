import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TvSeries from "./pages/TvSeries";
import Header from "./components/layout/Header/Header";
import Movies from "./pages/Movies";
import MyList from "./pages/MyList";

import { FavouriteProvider } from "./utility/FavouriteContext";
import { MoreInfoProvider } from "./utility/MoreInfoContext";
import { SearchContextProvider } from "./utility/SearchContext";

function App() {
  return (
    <BrowserRouter>
      <FavouriteProvider>
        <MoreInfoProvider>
          <SearchContextProvider>
            <Header />
            <div className="isMobile">
              <Routes>
                <Route path="/fakeflix" element={<Home />} />
                <Route path="/series" element={<TvSeries />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/my-list" element={<MyList />} />
              </Routes>
            </div>
          </SearchContextProvider>
        </MoreInfoProvider>
      </FavouriteProvider>
    </BrowserRouter>
  );
}

export default App;
