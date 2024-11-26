import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Updated styles for sleek and modern design

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h1>The Model Method</h1>
            </div>
            <nav>
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/courses">Courses</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
