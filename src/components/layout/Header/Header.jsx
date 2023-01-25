import { Link } from "react-router-dom";

import logo from "../../../img/netflix-logo.png";
import search from "../../../img/icons/search.png";
import avatar from "../../../img/avatar-1.jpg";

import "./Header.css";
import { useContext, useEffect, useState } from "react";
import SearchContext from "../../../utility/SearchContext";
import FavouriteContext from "../../../utility/FavouriteContext";

export default function Header() {

  //My List Handling
  const {favourites} = useContext(FavouriteContext)


  //Search Event Handling
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

      handleNavbarResponsive()

    window.addEventListener("resize", () =>{
      handleNavbarResponsive()
    })
  }, []);

// Handling Navbar Responsivnes
  const [mobileNav, setMobileNav] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  function handleNavbarResponsive(){
    if(window.innerWidth < 940){
      setMobileNav(true)
    } else {
      setMobileNav(false)
    }
  }

  function handleShowMenu(){
    setShowMenu(prev => !prev)
  }

  return (
    <header className={mobileNav ? "mobileHeder" : "desktopHeder"}>
      <img className="logo" src={logo} alt="FakeFlix Logo" />
      <img className="showMenu" src={require("../../../img/icons/menu.png")} alt="show menu" onClick={handleShowMenu}/>
      <nav className={(mobileNav && showMenu) ? "active" : ""}>
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
              My List{favourites !== 0 && ` ( ${favourites.length} )`}
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
