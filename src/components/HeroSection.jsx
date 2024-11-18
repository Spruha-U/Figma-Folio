// eslint-disable-next-line no-unused-vars
import React from "react";
import profilePic from '../assets/profilePic.png';

const HeroSection = () => {
    return(
        <section className="flex flex-col md:flex-row items-center justify-between bg-maroon text-gold px-8 py-20">
            <div className="text-left"> 
            <h1 className="text-4xl font-bold mb-4">I am Spruha Ukidave</h1>
            <p className="text-xl mb-6">
             UI DESIGNER / WEB DESIGNER
            </p>
            <p>I am a passionate Web Designer and UI Designer who created user-centered digital experiences that merge 
            functionality with stunning asthetics.My creativity extends beyond design, as seen in my photography and Instagram 
            story edits.
            </p> 
            <button className="mt-8 px-6 py-2 bg-gold text-maroon font-bold rounded">Explore my world</button>
            </div>
            <div>
                <img src={profilePic} alt="Spruha Ukidave" className="rounded-full w-80 h-80 object-cover"/>
            </div>
        </section>
    )
};

export default HeroSection;