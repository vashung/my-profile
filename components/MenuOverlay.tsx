import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <div className="h-max">
      <ul className="flex py-4 flex-col items-center mt-0">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title}></NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
