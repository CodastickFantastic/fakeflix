import { Link } from "react-router-dom";

import logo from "../../../img/netflix-logo.png";
import search from "../../../img/icons/search.png";
import avatar from "../../../img/avatar-1.jpg";

import "./Header.css";

export default function Header() {
  return (
    <header className="mainNavigationHeader">
      <img className="logo" src={logo} alt="FakeFlix Logo" />
      <nav>
        <ul className="mainMenu">
          <li>
            <Link className="active" to="/">Home</Link>
          </li>
          <li>
            <Link to="/series">TV Series</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/recently-added">Recently Added</Link>
          </li>
          <li>
            <Link to="/my-list">My List</Link>
          </li>
        </ul>
      </nav>
      <div className="searchDiv">
        <img
          className="searchImg"
          src={search}
          alt="Search for Series, Movie or Actor"
        />
      </div>
      <div className="profile">
        <img className="avatar" src={avatar} alt="My profile" />
      </div>
    </header>
  );
}
