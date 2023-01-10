import { Link } from "react-router-dom";

import logo from "../../../img/netflix-logo.png";
import search from "../../../img/icons/search.png";
import avatar from "../../../img/avatar-1.jpg";

import "./Header.css";
import { useContext, useEffect, useState } from "react";
import SearchContext from "../../../utility/SearchContext";

export default function Header() {

  const {toggleSearchSection, setSearchData, searchData} = useContext(SearchContext)

  function handleSearch(event) {
    const {value} = event.target
    setSearchData(value)
  }

  useEffect(() => {
    // Navigation Change Effect
    const menuBtn = Array.from(document.getElementsByClassName("menuItem"));

    menuBtn.forEach((button) => {
      button.addEventListener("click", () => {
        menuBtn.forEach((button) => button.classList.remove("active"));
        button.classList.add("active");
      });
    });

    //Show Search BTN
    const searchBtn = document.querySelector(".searchImg");

    searchBtn.addEventListener("click", (event) => {
      const searchInput = document.querySelector(".searchFor");
      searchInput.classList.toggle("active");
      toggleSearchSection()
    });
  }, []);

  return (
    <header className="mainNavigationHeader">
      <img className="logo" src={logo} alt="FakeFlix Logo" />
      <nav>
        <ul className="mainMenu">
          <li>
            <Link className="menuItem active" to="/fakeflix">
              Home
            </Link>
          </li>
          <li>
            <Link className="menuItem" to="/series">
              TV Series
            </Link>
          </li>
          <li>
            <Link className="menuItem" to="/movies">
              Movies
            </Link>
          </li>
          <li>
            <Link className="menuItem" to="/my-list">
              My List
            </Link>
          </li>
        </ul>
      </nav>
      <div className="searchDiv">
        <img
          className="searchImg"
          src={search}
          alt="Search for Series, Movie or Actor"
        />
        <input
          className="searchFor"
          type="text"
          placeholder="Search For..."
          onChange={handleSearch}
          name="searchFor"
          value={searchData}
        />
      </div>
      <div className="profile">
        <img className="avatar" src={avatar} alt="My profile" />
      </div>
    </header>
  );
}
