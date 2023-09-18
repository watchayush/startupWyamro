import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./MenuList.css";
import styled from "styled-components";

export default function MenuList({
  menuList,
  fromNavbar = false,
  subMenuIdClicked = 1,
  noOfItems,
  setMenuClicked,
  comp,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [menuIndexClicked, setMenuIndexClicked] = useState();
  const [subMenuSelected, setSubMenuSelected] = useState();

  const className = fromNavbar ? "subMenuCard" : "subMenuCard2";
  const itemHeightPercentage = 100 / noOfItems;
  const temp = subMenuIdClicked - 1;
  const topMargin =
    className === "subMenuCard" ? "85%" : `${itemHeightPercentage * temp}%`;

  const SubMenu = styled.div`
    top: ${topMargin};
  `;

  console.log("menuList ==> ", menuList);

  return (
    <SubMenu className={className}>
      {menuList?.map((menu, i) => (
        <div
          className="listItemContainer"
          onClick={() => {
            setShowMenu(true);
            setMenuIndexClicked(menu?.id);
            setSubMenuSelected(menu?.title);
          }}
          onMouseEnter={() => {
            setShowMenu(true);
            setMenuIndexClicked(menu?.id);
            setSubMenuSelected(menu?.title);
          }}
          onMouseLeave={() => {
            setShowMenu(false);
            setMenuIndexClicked();
            setSubMenuSelected();
          }}
        >
          {menu?.subMenu?.length === 0 ? (
            <div className="menuListItem">
              <Link
                to={comp ? `/${comp}/${menu?.path}` : `${menu?.path}`}
                key={menu?.id}
                className="menuListItemLink"
              >
                <div
                  className="menuListItemLinkTxt"
                  onClick={() => setMenuClicked(false)}
                >
                  {menu?.title}
                </div>
              </Link>
            </div>
          ) : (
            <div className="menuListItemContainer">
              <div className="menuListItem">
                <span className="navLink2">
                  <Link
                    to={`/${comp}/${menu?.path}`}
                    key={menu?.id}
                    className="menuListItemLinkTxt"
                    style={{ textDecoration: "none" }}
                  >
                    <div onClick={() => setMenuClicked(false)}>
                      {menu?.title}
                    </div>
                  </Link>
                </span>
                <span className={`navLinkdwn2`}>
                  <ChevronRightIcon style={{ color: "gray" }} />
                </span>
              </div>
              {menu?.subMenu?.length > 0 &&
                showMenu &&
                subMenuSelected === menu?.title &&
                ++i === menuIndexClicked && (
                  <MenuList
                    menuList={menu?.subMenu}
                    subMenuIdClicked={menu?.id}
                    noOfItems={menuList?.length}
                    setMenuClicked={setMenuClicked}
                    comp={comp}
                  />
                )}
            </div>
          )}
        </div>
      ))}
    </SubMenu>
  );
}
