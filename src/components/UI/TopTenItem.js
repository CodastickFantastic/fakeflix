import "./TopTenItem.css"

export default function TopTenItem(props) {
  return (
    <div className="topItem">
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
