import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TvSeries from "./pages/TvSeries";
import Header from "./components/layout/Header/Header";

import { MoreInfoProvider } from "./utility/MoreInfoContext";
import { SearchContextProvider } from "./utility/SearchContext";
import Movies from "./pages/Movies";

function App() {
  return (
    <BrowserRouter>
      <MoreInfoProvider>
        <SearchContextProvider>
          <Header />

          <Routes>
            <Route path="/fakeflix" element={<Home />} />
            <Route path="/series" element={<TvSeries />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </SearchContextProvider>
      </MoreInfoProvider>
    </BrowserRouter>
  );
}

export default App;
