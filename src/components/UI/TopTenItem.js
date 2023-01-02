import "./TopTenItem.css"
import Preview from "./Preview";
import { useEffect, useState } from "react";

export default function TopTenItem(props) {
  const [preview, setPreview] = useState(false)

  function showPreview(){
    setPreview(true)
  }

  function hidePreview(){
    setPreview(false)
  }
  
  // useEffect(()=>{
  //   const item = document.getElementsByClassName("topItem")
  //   item.array.forEach(element => {
  //   console.log("d")
  //   });
  // },[])

  return (
    <div className="topItem" onMouseOver={showPreview}>
      {preview && <Preview hidePreview={hidePreview} id={props.id} mediaType={props.mediaType}/>}
      <img
        className="number"
        src={require("../../img/numbers/" + props.place + ".png")}
      />
      <img
        className="poster"
        src={"https://image.tmdb.org/t/p/original" + props.poster}
      />
    </div>
  );
}

