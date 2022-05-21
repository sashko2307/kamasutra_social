import React from "react";
import cl from "./Navbar.module.css";
import { NavLink  } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={cl.nav}>
			<div className={ [cl.item].join(" ") }>
				<NavLink  to='/profile' className={({ isActive }) =>
      isActive ? cl.active : undefined
    }>Profile</NavLink >
			</div>
			<div className={ cl.item }>
				<NavLink  to='/dialogs' className={({ isActive }) =>
      isActive ? cl.active : undefined
    }>Dialogs</NavLink >
			</div>
			<div className={cl.item}>profile</div>
			<div className={cl.item}>profile</div>
			<div className={cl.item}>profile</div>
		</nav>
	)
}

export default Navbar;
