import React from 'react';
import nav from './Header.module.css';
import {NavLink} from 'react-router-dom';



const Header = (props) => {
    return (
        <div>
            <nav class={nav.sidebar__nav__items}>
                <div class={nav.items}>
                    <NavLink to='#' activeClassName={nav.activeLink}> Sign up </NavLink>
                </div>
                <div class={nav.items}>
                    <NavLink to='#' activeClassName={nav.activeLink}>  Login </NavLink>
                </div>

            </nav>
        </div>
    )
}

export default Header;