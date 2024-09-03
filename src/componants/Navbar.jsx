import React, { useState } from "react";
import menu from '../assets/img/navbar/menu.svg';
import flowbite from '../assets/img/navbar/FlowBite Logo.svg';
import search from '../assets/img/navbar/search.svg';
import notification from '../assets/img/navbar/notification.svg';
import darkmode from '../assets/img/navbar/darkmode.svg';
import lightmode from '../assets/img/navbar/light mode.svg'; // Added light mode image import
import menubar from '../assets/img/navbar/squarepluse.svg';
import profile from '../assets/img/navbar/profile.png';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
            <div className="flex justify-between m-4">
                <div className="flex gap-5 m-1">
                    <img src={menu} alt="menu" className="h-7 pt-1" />
                    <img src={flowbite} alt="flowbite" className="h-8" />
                    <h1 className="text-2xl font-bold">Flowbite</h1>
                    <div className="hidden md:block">
                        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-[#F9FAFB]'} flex border rounded-lg pl-1 py-[2px] pr-40 ml-10`}>
                            <img src={search} alt="search" className="h-9 p-2" />
                            <input
                                placeholder="Search"
                                className={`text-sm font-medium ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-[#F9FAFB] text-black'}`}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <img src={search} alt="search" className="md:hidden h-7 pt-1" />
                    <img src={notification} alt="notification" className="h-7 pt-1" />
                    <img src={menubar} alt="menubar" className="h-7 pt-1" />
                    <img
                        src={isDarkMode ? lightmode : darkmode} // Toggle image based on dark mode state
                        alt="darkmode"
                        className="h-7 pt-1 cursor-pointer"
                        onClick={toggleDarkMode}
                    />
                    <img src={profile} alt="profile" className="h-9 border rounded-full mr-1" />
                </div>
            </div>
            <hr className={`${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`} />
        </div>
    );
};

export default Navbar;
