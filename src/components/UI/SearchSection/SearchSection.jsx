import { useContext, useEffect, useState } from "react";
import SearchContext from "../../../utility/SearchContext";
import ItemTile from "../ItemTile/ItemTile";
import "./SearchSection.css";

export default function SearchSection(props) {
  const { searchData } = useContext(SearchContext);

  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=18f5bf837784bc2be97b452a18de806d&query=${props.toSearch}`
    )
      .then((response) => response.json())
      .then((data) => prepareData(data.results));

    function prepareData(data) {
      console.log(data);
      setData(
        data.map((dataItem) => {
          if (dataItem.media_type != "person") {
            return (
              <ItemTile
                key={dataItem.id}
                id={dataItem.id}
                mediaType={dataItem.media_type}
              />
            );
          }
        })
      );
    }
  }, [searchData]);

  console.log(data);

  return (
    <section className="searchSection">
      {!searchData && <div className="searchWelcome">Start typing to see results...</div>}
      {searchData && <div className="searchContainer">{data}</div>}
    </section>
  );
}
