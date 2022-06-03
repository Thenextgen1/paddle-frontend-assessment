import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/navbar.css'
import logo from '../../assets/logo.png'



const Navbar = () => {
    return (
        <header className='header'>
            <nav className='nav'>
                <Link to="/"><img className='logo' src={logo} alt="logo" /></Link>

                <ul>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className='contactus-link'>
                        <Link to="/contact" >Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar