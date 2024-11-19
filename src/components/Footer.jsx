/* eslint-disable no-unused-vars */
import React from "react";
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-maroon text-gold text-center py-6">
            <div className="flex justify-center gap-4 text-2xl mb-4">
                <a href="www.linkedin.com/in/spruhaukidaves" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/Spruha-U/Figma-Folio" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.instagram.com/spruhaukidave/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>

        </footer>
    );
};

export default Footer;