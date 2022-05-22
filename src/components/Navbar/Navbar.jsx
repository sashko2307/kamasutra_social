import React from "react";
import cl from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return (
        <div className={cl.sidebar}>
            <nav className={cl.nav}>
                <div className={[cl.item].join(" ")}>
                    <NavLink
                        to='/profile'
                        className={({ isActive }) =>
                            isActive ? cl.active : undefined
                        }
                    >
                        Profile
                    </NavLink>
                </div>
                <div className={cl.item}>
                    <NavLink
                        to='/dialogs'
                        className={({ isActive }) =>
                            isActive ? cl.active : undefined
                        }
                    >
                        Dialogs
                    </NavLink>
                </div>
                <div className={cl.item}>profile</div>
                <div className={cl.item}>profile</div>
                <div className={cl.item}>profile</div>
			</nav>

			<Friends friends={props.sidebar.friends} />

        </div>
    );
};

export default Navbar;
