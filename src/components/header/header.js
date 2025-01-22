import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <div className="header--logo">
                        <h1>Logo</h1>
                    </div>
                    <nav className="header--navbar">
                        <NavLink to={'/'}><a>home</a></NavLink>
                        <NavLink to={'/about'}><a>about</a></NavLink>
                        <NavLink to={'/reviews'}><a>reviews</a></NavLink>
                        <NavLink to={'/contact'}><a>contact</a></NavLink>
                    </nav>
                    <button>click</button>
                </div>
            </div>
        </header>
    );
};

export default Header;