import { useContext, useEffect, useState } from "react";
import SearchContext from "../../../contexts/SearchContext";
import ItemTile from "../ItemTile/ItemTile";
import "./SearchSection.css";

export default function SearchSection({ toSearch }) {
  const { searchData } = useContext(SearchContext);

  const [data, setData] = useState();

  useEffect(() => {
    if (searchData) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=18f5bf837784bc2be97b452a18de806d&query=${toSearch}`
      )
        .then((response) => response.json())
        .then((data) => prepareData(data.results));

      const prepareData = (data) => {
        setData(
          data.map(({ id, media_type }) =>
            media_type === "person" ? null : <ItemTile key={id} id={id} mediaType={media_type} />
          )
        );
      };
    }
  }, [searchData]);

  // TODO - do that better
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => (document.body.style.overflowY = "visible");
  }, []);

  return (
    <section className="searchSection">
      {!searchData && <div className="searchWelcome">Start typing to see results...</div>}

      {searchData && <div className="searchContainer">{data}</div>}
    </section>
  );
}
