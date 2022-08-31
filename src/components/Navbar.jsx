import React from 'react';
import { NavLink } from "react-router-dom";
import styless from '../styles/Navbar.module.css';
import {category} from '../constants/navbar';

const Navbar = () => {
  const navLinkStyles = ({isActive}) =>{
    return  isActive ? styless.active : "";
  }

  return (
    <nav className={styless.nav}>
    {category.map((item,index)=>(
      <NavLink className={navLinkStyles} to={item.link} key={index}>
      {item.label}
      </NavLink>
    ))};
    </nav>
  );
};

export default Navbar;