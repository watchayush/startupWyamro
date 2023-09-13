import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../../constants/appConstants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuList from "../MenuList/MenuList";
import Logo from "../../../assets/images/wyamro.svg";

const Navbar = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [menuIndexClicked, setMenuIndexClicked] = useState();

  const [bgColor, setBgColor] = useState(false);

  const appendClass = menuClicked ? " mobileNavItems" : "";

  const loc = useLocation();
  console.log("loc ==> ", loc);

  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  const changeColor = () => {
    if (
      window?.scrollY >= 90 ||
      !["/tour", "/", "home"].includes(loc?.pathname)
    ) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  useEffect(() => {
    if (!["/tour", "/", "home"].includes(loc?.pathname)) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  }, [loc.pathname]);

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <nav className={bgColor ? "navBackground" : ""}>
        {/* website logo */}
        <Link to="/" className="brand">
          {/* <Logo /> */}
          <img
            alt="Brand Logo"
            src={Logo}
            style={{ width: "120px", height: "80px" }}
          />
        </Link>

        {/* website navigation navbar links */}
        <ul className={`navigationItems ${appendClass}`}>
          {navItems?.map((menu, index) => {
            return (
              <li>
                <div
                  className="navLinkContainer"
                  onMouseOver={() => {
                    setShowMenu(true);
                    setMenuIndexClicked(index);
                  }}
                  onMouseLeave={() => {
                    setShowMenu(false);
                    setMenuIndexClicked();
                  }}
                  onClick={() => {
                    setShowMenu(true);
                    setMenuIndexClicked(index);
                  }}
                >
                  {menu?.subMenu?.length === 0 ? (
                    // Navlinks
                    <div className="navLinkParent">
                      <span>
                        <Link
                          to={menu?.path}
                          key={menu?.id}
                          className={bgColor ? "navLink nvLink" : "navLink"}
                        >
                          <div>{menu?.title}</div>
                        </Link>
                      </span>
                    </div>
                  ) : (
                    // dropdowns
                    <div className="navLinkParent">
                      <span>
                        <Link
                          to={menu?.path}
                          key={menu?.id}
                          className={bgColor ? "navLink nvLink" : "navLink"}
                        >
                          <div>{menu?.title}</div>
                        </Link>
                      </span>

                      <span className={bgColor ? "navLink nvLink" : "navLink"}>
                        <ExpandMoreIcon />
                      </span>
                    </div>
                  )}

                  {menu?.subMenu?.length > 0 &&
                    showMenu &&
                    index === menuIndexClicked && (
                      <MenuList menuList={menu?.subMenu} fromNavbar={true} />
                    )}
                  {/* </> */}
                  {/* )} */}
                </div>
              </li>
            );
          })}
        </ul>

        {/* navbar menu open button */}
        <div className="menuBtn" onClick={handleMenuClick}>
          {!menuClicked ? <MenuIcon /> : <CloseIcon className="closeBtn" />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
