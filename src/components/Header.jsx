import logo from './../logo.png';
import React from "react";
import cl from './Header/Header.module.css'

const Header = () => {
	return (
		<header>
			  <img src={logo} alt="logo" />
		  </header>
	)
}

export default Header;
