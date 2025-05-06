import React from 'react';
import aboutImg from '../assets/ab2.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="relative w-full min-h-[75vh] px-6 md:px-12 lg:px-24 py-10 flex flex-col lg:flex-row justify-between items-center gap-10">
            {/* Content Box */}
            <div className="w-full lg:w-1/2 p-2">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                    About Us
                </h2>
                <p className="text-gray-300 text-justify mb-5">
                    Assassin's Creed is an open-world, action-adventure,
                    and stealth game franchise published by Ubisoft and developed mainly by
                    its studio Ubisoft Montreal using the game engine Anvil and its more advanced derivatives.
                    Created by Patrice Désilets, Jade Raymond, and Corey May, the Assassin's Creed video game series depicts
                    a fictional millennia-old struggle between the Order of Assassins, who fight for peace and free will, and
                    the Knights Templar, who desire peace through order and control.
                </p>
                <Link
                    to="/cafeInfo"
                    className="inline-block px-5 py-2 mt-4 border border-cyan-400 rounded font-bold text-white tracking-wide hover:bg-cyan-400 hover:text-[#050e2d] hover:shadow-[0_0_10px_#1aeeef]"
                >
                    Read more
                </Link>
            </div>

            {/* Image */}
            <img src={aboutImg} alt="Assassin's Creed" className="w-full max-w-md lg:max-w-[500px]" />
        </div>
    );
};

export default About;
