import React from 'react';
import './Nav.css';
const Nav = () => {
    return (
        <nav>
            <ul className='nav-links'>
                <li><a href="/">Home</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href='/quiz'>Quiz</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
