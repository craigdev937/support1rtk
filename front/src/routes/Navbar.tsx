import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

export const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <header className="nav__header">
                <nav className="navbar">
                    <Link
                        to={"/"}
                        className="nav__logo"
                        onClick={closeMenu}
                    >
                        Support Desk
                    </Link>

                    {/* NAV MENU BUTTON */}
                    <button 
                        className="nav__button"
                        type="button"
                        aria-label="open the menu"
                        aria-expanded={open}
                        onClick={handleClick}
                    >
                        <aside className={`
                            nav__burger ${open ? "open" : ""}
                        `}>
                            <span className="nav__line" />
                            <span className="nav__line" />
                            <span className="nav__line" />
                        </aside>
                    </button>

                    {/* SIDEBAR AND CONTAINER QUERIES */}
                    <menu className={open ?
                        "nav__menu active" : 
                        "nav__menu"
                    }>
                        <li className="nav__item">
                            <Link
                                to={"/register"}
                                className="nav__links"
                                onClick={closeMenu}
                            >
                                <FaUser />Register
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to={"/login"}
                                className="nav__links"
                                onClick={closeMenu}
                            >
                                <FaSignInAlt />Login
                            </Link>
                        </li>
                    </menu>
                </nav>
            </header>
            <Outlet />
        </React.Fragment>
    );
};


