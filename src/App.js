import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TvSeries from "./pages/TvSeries";
import Header from "./components/layout/Header/Header";

import { MoreInfoProvider } from "./utility/MoreInfoContext";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MoreInfoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/series" element={<TvSeries />} />
        </Routes>
      </MoreInfoProvider>
    </BrowserRouter>
  );
}

export default App;
