import React from "react";
import {NavLink } from "react-router-dom";
import "./LinkNav.css";

const Nav_Link = ({route}) => {
  return (
    <li
      className="mr-4 p-1 mb-1 px-3
   bg-[#22c55e]
   hover:bg-[#059862] 
   focus:outline
   rounded 
   focus:ring 
   focus:border-slate-800 ..."
    >
      <NavLink to={route.path}>{route.name}</NavLink>
    </li>
  );
};

export default Nav_Link;
