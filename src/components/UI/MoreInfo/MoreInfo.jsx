import { useEffect, useState } from "react";
import "./MoreInfo.css";

export default function MoreInfo(props) {
  const [data, setData] = useState();

  fetch(
    `https://api.themoviedb.org/3/${props.media_type}/${props.id}?api_key=18f5bf837784bc2be97b452a18de806d`
  )
    .then((response) => response.json())
    .then((data) => console.log(data))

  return (
    <>
      <div className="moreInfo" onClick={props.quit}>
        <div className="infoToShow"></div>
      </div>
    </>
  );
}
