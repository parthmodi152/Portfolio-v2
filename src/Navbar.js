import React from 'react';
import "./Navbar.css";

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar__left">
            </div>
            <div className="Navbar__right">
                <a href="/">Start<span>{'/>'}</span></a>
                <a href="/">Work<span>{'/>'}</span></a>
                <a href="/">About<span>{'/>'}</span></a>
                <a href="/">Contact<span>{'/>'}</span></a>
            </div>
        </div>
    )
}

export default Navbar
