import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
  // ScrollEfect 
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  // Humburger 
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  // search bar icon
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  const controlNavbar = () => {
    // console.log(window.scrollY)
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide")
      }
      else {
        setShow("show")
      }
    }
    else {
      setShow("top")
    }
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar)
    return () => {
      window.removeEventListener("scroll", controlNavbar)

    }
  }, [lastScrollY])


  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  }

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  }

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)
      setTimeout(() => { setShowSearch(false) }, 1000)
    }
  }

  const navigationHandler = (type) => {
    if (type == "movie") {
      navigate("/explore/movie");
    }
    else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  }

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movie")}>Movies</li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>TV Shows</li>
          <li className="menuItem" ><HiOutlineSearch onClick={() => openSearch()} /></li>
        </ul>


        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={() => openSearch()} />
          {
            mobileMenu ?
              (<VscChromeClose className="mobiIcons" onClick={() => setMobileMenu(false)} />) :
              (<SlMenu className="mobiIcons" onClick={() => openMobileMenu()} />)

          }
        </div>

      </ContentWrapper>
      {
        showSearch && (
          <div className="searchBar">
            <ContentWrapper>
              <div className="searchInput">
                <input
                  type="text"
                  placeholder='Search for a movie or tv show....'
                  onKeyUp={(event) => searchQueryHandler(event)}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <VscChromeClose onClick={() => setShowSearch(false)} />
              </div>
            </ContentWrapper>
          </div>
        )
      }
    </header>
  );
};

export default Header;