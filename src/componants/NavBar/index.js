import React from 'react';
import './style.css';

const NavBar = () => {
    return (
        <nav
        className='navBar'
        >
            <ul className='empList'>
                <li className='navLi'><a className='navBtn' href='#'>Directory</a></li>
                <li className='navLi'><a className='navBtn' href='#'>Search</a></li>
                <li className='navLi'><a className='navBtn' href='#'>NotSure</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;