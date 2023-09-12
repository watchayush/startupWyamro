import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ props }) {
  const { menuList } = { ...props };
  return (
    <div>
      {menuList?.map((menu, i) => {
        menu?.subMenu?.length === 0 ? (
          <Link to={menu?.path} key={menu?.id} className="navLink">
            <div>{menu?.title}</div>
          </Link>
        ) : (
          <div>
            {menu?.title}
            <ArrowDropDownIcon />
          </div>
        );
      })}
    </div>
  );
}
