import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="px-6 md:px-24 py-6">
            <div className="border-t border-[#1aeeef] mb-6"></div>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Logo */}
                <a href="#" className="text-white text-3xl font-bold">
                    Gammers
                </a>

                {/* Copyright */}
                <p className="text-white text-center text-sm">
                    &copy; 2023 All Rights Reserved
                </p>

                {/* Social Icons */}
                <ul className="flex space-x-3">
                    <li className="h-[50px] w-[50px] flex items-center justify-center border border-[#1aeeef] rounded-full hover:bg-[#1aeeef] hover:shadow-[0_0_10px_#1aeeef] transition">
                        <a href="#"><FaFacebook className="text-white hover:text-[#050e2d] text-xl" /></a>
                    </li>
                    <li className="h-[50px] w-[50px] flex items-center justify-center border border-[#1aeeef] rounded-full hover:bg-[#1aeeef] hover:shadow-[0_0_10px_#1aeeef] transition">
                        <a href="#"><FaInstagram className="text-white hover:text-[#050e2d] text-xl" /></a>
                    </li>
                    <li className="h-[50px] w-[50px] flex items-center justify-center border border-[#1aeeef] rounded-full hover:bg-[#1aeeef] hover:shadow-[0_0_10px_#1aeeef] transition">
                        <a href="#"><FaTwitter className="text-white hover:text-[#050e2d] text-xl" /></a>
                    </li>
                    <li className="h-[50px] w-[50px] flex items-center justify-center border border-[#1aeeef] rounded-full hover:bg-[#1aeeef] hover:shadow-[0_0_10px_#1aeeef] transition">
                        <a href="#"><FaYoutube className="text-white hover:text-[#050e2d] text-xl" /></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
