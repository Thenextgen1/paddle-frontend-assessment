import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/navbar.css'
import logo from '../../assets/logo.png'



const Navbar = ({ setcontactSection, contactSection }) => {


    function handleClick() {
        setcontactSection(prevcontactSection => {
            return {
                ...prevcontactSection,
                arrowClicked: !contactSection.arrowClicked
            }
        })
    }


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
                    <li className='contactus-link' onClick={handleClick}>

                        <button href='#' alt="contact">Contact Us</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar