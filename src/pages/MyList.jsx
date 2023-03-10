import { useContext, useEffect, useState } from "react";
import ItemTile from "../components/UI/ItemTile/ItemTile";
import Preview from "../components/UI/Preview/Preview";
import FavouriteContext from "../utility/FavouriteContext";

import "./MyList.css"

export default function MyList() {
  let [favDisplay, setFavDisplay] = useState();
  let { favourites } = useContext(FavouriteContext);

  useEffect(() => {
    setFavDisplay(
      favourites.map((favItem) => {
        return <ItemTile mediaType={favItem.mediaType} id={favItem.id} key={favItem.id}/>;
      })
    );
  }, [favourites]);

  return <section className="myList">{favDisplay}</section>;
}
