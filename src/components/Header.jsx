import React from 'react';
import '../styles/Header.css'

const Header = () => {
    
    return (
        <nav className='stroke'>
            <ul>
                <li><a href="http://localhost:3000">Home</a></li>
                <li><a href="http://localhost:3000">About Me</a></li>
                <li><a href="http://localhost:3000">Projects</a></li>
                <li><a href="http://localhost:3000">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Header;