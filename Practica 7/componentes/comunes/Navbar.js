import React from 'react';
//Con Link y NavLinkvamos a poder navegar entre las diferentes páginas utilizando el Router de React. 
import { Link, NavLink } from 'react-router-dom';
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand"
                to="/"
            >
                Gamebook
            </Link>
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exactto="/ps">
                        PlayStation
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exactto="/xbox">Xbox
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exactto="/switch">
                        Switch
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exactto="/pc">
                        PC
                    </NavLink>
                </div>
            </div>
            <div
                className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exactto="/login">
                        Salir
                    </NavLink>
                </ul>
            </div>
        </nav>)
}