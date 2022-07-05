import React, { useEffect, useState } from "react";
import logoPng from "../../../assets/images/icons/logo-01.png";
import logo2Png from "../../../assets/images/icons/logo-02.png";
import { Link, useLocation } from "react-router-dom";
import { Collapse } from "reactstrap";
import OffCanvas from "../OffCanvas/OffCanvas";
import FavouriteItem from "../FavouriteItem/FavouriteItem";

const Header = ({ locationType }) => {
  const Nav = [
    {
      name: "Home",
      path: "/",
      value: 1,
    },
    { name: "Shop", path: "/shop", value: 2 },
    { name: "Cart", path: "/cart", value: 3 },
    { name: "Blog", path: "/blog", value: 4 },
    { name: "About", path: "/about", value: 5 },
    { name: "Contact", path: "/contact", value: 6 },
  ];
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [isOpenFavourite, setIsOpenFavourite] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleOpenFavourite = () => {
    setIsOpenFavourite(!isOpenFavourite);
  };
  const handleOpenSideBar = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };
  const location = useLocation();
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        scrollPosition > 30
          ? `container-menu-desktop ${
              location.pathname === "/"
                ? "fix-menu-desktop"
                : "container-menu-desktop color"
            }`
          : "container-menu-desktop"
      }
    >
      <div className="wrap-menu-desktop" style={{ top: "0px" }}>
        <nav className="limiter-menu-desktop container">
          {/* <!-- Logo desktop -->		 */}
          <Link to="/" className="logo">
            <img
              src={location.pathname === "/" ? logo2Png : logoPng}
              alt="IMG-LOGO"
            />
          </Link>

          {/* <!-- Menu desktop --> */}
          <div className="menu-desktop">
            <ul className="main-menu text-decoration-none">
              {Nav.map((item, index) => (
                <li
                  className={
                    (location.pathname === item.path ? "active-menu" : "") &&
                    (item.value === 3 ? "label11" : "")
                  }
                  key={index}
                >
                  <Link
                    to={item.path}
                    className="text-decoration-none hov"
                    style={{
                      color: location.pathname === "/" ? "white" : "black",
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <!-- Icon header --> */}
          <div className="wrap-icon-header flex-w flex-r-m">
            <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
              <i
                className="fas fa-search"
                onClick={handleOpen}
                style={{
                  color: location.pathname === "/" ? "white" : "black",
                }}
              ></i>
            </div>
            <Collapse isOpen={isOpen} className="search flex-c-m trans-04">
              <div className="container-search-header">
                <button
                  className="flex-c-m btn-hide-modal-search trans-04"
                  onClick={handleOpen}
                  style={{ fontSize: "40px" }}
                >
                  <i
                    class="fa-solid fa-xmark"
                    style={{
                      color: location.pathname === "/" ? "white" : "black",
                    }}
                  ></i>
                </button>
                <form className="wrap-search-header flex-w p-l-15">
                  <button>
                    <i
                      class="fa-solid fa-magnifying-glass"
                      style={{
                        color: location.pathname === "/" ? "white" : "black",
                      }}
                    ></i>
                  </button>
                  <input placeholder="Search..." />
                </form>
              </div>
              {/* </Collapse> */}
            </Collapse>
            {/* <Collapse isOpen={isOpen}> */}

            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
              data-notify="2"
              onClick={handleOpenSideBar}
            >
              <i
                className="fas fa-shopping-cart"
                style={{
                  color: location.pathname === "/" ? "white" : "black",
                }}
              ></i>
            </div>
            <OffCanvas
              isOpenSideBar={isOpenSideBar}
              handleOpenSideBar={handleOpenSideBar}
            />

            <div
              className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
              data-notify="0"
              onClick={handleOpenFavourite}
            >
              <i
                className="fa-regular fa-heart"
                style={{
                  color: location.pathname === "/" ? "white" : "black",
                }}
              ></i>
            </div>
            <FavouriteItem
              isOpenSideBar={isOpenFavourite}
              handleOpenSideBar={handleOpenFavourite}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
