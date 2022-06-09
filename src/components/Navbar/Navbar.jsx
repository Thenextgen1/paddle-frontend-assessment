import React from 'react'
import { NavLink } from "react-router-dom";
import '../../styles/navbar.css'
import logo from '../../assets/logo.png'



const Navbar = ({ setcontactSection, contactSection }) => {

    const activeStyle = {
        color: '#FF00F7'
    }


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
                <NavLink to="/"><img className='logo' src={logo} alt="logo" /></NavLink>

                <ul>
                    <li>
                        <NavLink to="/about" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>About us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>Blog</NavLink>
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