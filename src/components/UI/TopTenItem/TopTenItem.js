import "./TopTenItem.css";
import Preview from "../Preview/Preview";
import { useEffect, useState } from "react";

export default function TopTenItem(props) {
  const [preview, setPreview] = useState();

  
  useEffect(()=>{

  },[])

  function showPreview() {
    setPreview(true);
  }

  function hidePreview() {
    setPreview(false);
  }

  return (
    <div
      className="topItem"
      onMouseOver={showPreview}
      style={
        props.place === 1
          ? { width: 170 }
          : props.place === 10
          ? { width: 235 }
          : { width: 200 }
      }
    >
      {preview && (
        <Preview
          hidePreview={hidePreview}
          id={props.id}
          mediaType={props.mediaType}
        />
      )}
      <img
        className="number"
        src={require("../../../img/numbers/" + props.place + ".png")}
      />
      <img
        className="poster"
        src={"https://image.tmdb.org/t/p/original" + props.poster}
        style={
          props.place === 1
            ? { marginLeft: -5 }
            : props.place === 10
            ? { marginLeft: -60 }
            : { marginLeft: -30 }
        }
      />
    </div>
  );
}
