import React from 'react';
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"; 

const Navbar = () => {
    return (
        <nav className="mb-10 flex items-center justify-between py-6 lg:mb-1">
            <div className="flex flex-shrink-0 items-center">
                <img className='mx-2 w-10' src={logo} alt="logo" />
            </div>
            <div className="m-15 flex items-center justify-center gap-4">
                <FaLinkedin  />
                <FaGithub  />
                <FaTwitter  /> 
                <FaInstagram  />            
            </div>
        </nav>
    );
};

export default Navbar;
