// eslint-disable-next-line no-unused-vars
import React from "react";

const Header =() => {
    return (
        <header className="flex justify-between items-center py-4 px-8 bg-transparent text-gold">
            <h1 className="text-2xl font-bold">I am Spruha Ukidave</h1>
            <nav>
              <ul className="flex gap-6">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
              </ul>  
            </nav>
        </header>
    );
};

export default Header;