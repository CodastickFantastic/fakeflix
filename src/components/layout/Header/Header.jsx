import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "assets/images/netflix-logo.png";
import search from "assets/images/icons/search.png";
import avatar from "assets/images/avatar-1.jpg";
import burgerMenuIcon from "assets/images/icons/menu.png";

import SearchContext from "contexts/SearchContext";
import FavouriteContext from "contexts/FavouriteContext";

import "./Header.css";
import SearchSection from "components/UI/SearchSection/SearchSection";

export default function Header() {
  // Handling Navbar Responsivnes
  // const [mobileNav, setMobileNav] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  //My List Handling
  const { favourites } = useContext(FavouriteContext);

  //Search Event Handling
  const { setSearchData, searchData } = useContext(SearchContext);

  useEffect(() => {
    // Navigation Change Effect
    // const menuBtn = Array.from(document.getElementsByClassName("menuItem"));

    // menuBtn.forEach((button) => {
    //   button.addEventListener("click", () => {
    //     menuBtn.forEach((button) => button.classList.remove("active"));
    //     button.classList.add("active");
    //   });
    // });

    //Show Search BTN
    const searchBtn = document.querySelector(".searchImg");
    searchBtn.addEventListener("click", () => {
      const searchInput = document.querySelector(".searchFor");
      searchInput.classList.toggle("active");
      searchInput.focus();
    });
  }, []);

  // https://javascript.info/bubbling-and-capturing
  // useEffect(() => {
  //   const ul = document.querySelector(".mainMenu");
  //   ul.addEventListener("click", (ev) => {
  //     if (ev.target.tagName === "A") {
  //       ev.target.classList.add("sdssssssssssssssssssss");
  //     }
  //   });
  // }, []);

  return (
    // <header className={mobileNav ? "mobileHeder" : "desktopHeder"}>
    <header className={"desktopHeder"}>
      <img className="logo" src={logo} alt="FakeFlix Logo" />
      <img
        className="showMenu"
        src={burgerMenuIcon}
        alt="show menu"
        onClick={() => setShowMenu(!showMenu)}
        // onClick={() => setShowMenu((prev) => !prev)}
      />

      {/* <nav className={mobileNav && showMenu ? "active" : ""}> */}
      <nav className={showMenu ? "active" : ""}>
        <ul className="mainMenu">
          <li>
            <NavLink
              className={({ isActive }) => `menuItem ${isActive ? "active" : ""}`}
              to="/fakeflix"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `menuItem ${isActive ? "active" : ""}`}
              to="/series"
            >
              TV Series
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `menuItem ${isActive ? "active" : ""}`}
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `menuItem ${isActive ? "active" : ""}`}
              to="/my-list"
            >
              My List ( {favourites.length} )
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="searchDiv">
        <img className="searchImg" src={search} alt="Search for Series, Movie or Actor" />
        <input
          className="searchFor"
          type="text"
          placeholder="Search For...."
          onChange={({ target: { value } }) => setSearchData(value)}
          name="searchFor"
          value={searchData}
          autoFocus={true}
        />
      </div>

      <div className="profile">
        <img className="avatar" src={avatar} alt="My profile" />
      </div>

      {searchData.length > 0 && <SearchSection toSearch={searchData} />}
    </header>
  );
}
