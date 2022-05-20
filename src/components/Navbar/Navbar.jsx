import React from "react";
import cl from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={cl.nav}>
			<div className={ [cl.item, cl.active].join(" ") } activeClassName='active'>
				<Link to='/profile'>Profile</Link>
			</div>
			<div className={ cl.item }>
				<Link to='/dialogs' activeClassName='active'>Dialogs</Link>
			</div>
			<div className={cl.item}>profile</div>
			<div className={cl.item}>profile</div>
			<div className={cl.item}>profile</div>
		</nav>
	)
}

export default Navbar;
