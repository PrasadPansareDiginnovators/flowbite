import React, { useState } from "react";
import menu from '../assets/img/navbar/menu.svg';
import flowbite from '../assets/img/navbar/FlowBite Logo.svg';
import search from '../assets/img/navbar/search.svg';
import notification from '../assets/img/navbar/notification.svg';
import darkmode from '../assets/img/navbar/darkmode.svg';
import lightmode from '../assets/img/navbar/light mode.svg';
import menubar from '../assets/img/navbar/squarepluse.svg';
import profile from '../assets/img/navbar/profile.png';
import sales from '../assets/img/menubar/sales.svg'
import users from '../assets/img/menubar/users.svg'
import inbox from '../assets/img/menubar/inbox.svg'
import pro from '../assets/img/menubar/profile.svg'
import setting from '../assets/img/menubar/setting.svg'
import products from '../assets/img/menubar/products.svg'
import pricing from '../assets/img/menubar/pricing.svg'
import billings from '../assets/img/menubar/billing.svg'
import logout from '../assets/img/menubar/logout.svg'
import bonnie from '../assets/img/notification/bonnie-green.png'
import jese from '../assets/img/notification/jese-leos.png'
import josepe from '../assets/img/notification/joseph-mcfall.png'
import leslie from '../assets/img/notification/leslie-livingston.png'
import robert from '../assets/img/notification/robert-brown.png'
import eye from '../assets/img/notification/eye.svg'

const Navbar = ({ toggleSidebar }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [showmenubar, setmenubar] = useState(false)
    const [shownotification, setnotification] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    const toggleProfileMenu = () => {
        setShowProfileMenu(!showProfileMenu);
    };

    const toggleshowmenubar = () => {
        setmenubar(!showmenubar)
    }

    const togglenotification = () => {
        setnotification(!shownotification)
    }


    return (
        <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
            <div className="flex justify-between m-3">
                <div className="flex gap-4 mx-1">
                    <img
                        src={menu}
                        alt="menu"
                        className="h-7 pt-1 cursor-pointer"
                        onClick={toggleSidebar} />
                    <img src={flowbite} alt="flowbite" className="h-8" />
                    <h1 className="text-2xl font-semibold">Flowbite</h1>
                    <div className="hidden md:block">
                        <div
                            className={`${isDarkMode ? 'bg-gray-800' : 'bg-[#F9FAFB]'} flex border rounded-lg pl-1 py-[2px] pr-40 ml-16 focus-within:border-blue-500 focus-within:border-2`}
                        >
                            <img src={search} alt="search" className="h-9 p-2" />
                            <input
                                placeholder="Search"
                                className={`text-sm font-normal ${isDarkMode ? 'bg-[#F9FAFB] text-white placeholder-white' : 'bg-[#F9FAFB] text-black placeholder-gray-500'} border-none focus:border-none focus:outline-none`}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 relative">
                    <img src={search} alt="search" className="md:hidden h-7 pt-1" />
                    <img
                        src={notification}
                        alt='notification'
                        className="h-7 pt-1 cursor-pointer"
                        onClick={togglenotification}
                    />                     <img
                        src={menubar}
                        alt='menubar'
                        className="h-7 pt-1 cursor-pointer"
                        onClick={toggleshowmenubar}
                    />                    <img
                        src={isDarkMode ? lightmode : darkmode}
                        alt="darkmode"
                        className="h-7 pt-1 cursor-pointer"
                        onClick={toggleDarkMode}
                    />
                    <img
                        src={profile}
                        alt="profile"
                        className="h-8 w-8 border rounded-full  cursor-pointer"
                        onClick={toggleProfileMenu}
                    />

                    {showProfileMenu && (
                        <div className="absolute right-0 mt-12 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4  ">
                            <p className="">Neil Sims</p>
                            <p className="text-md font-medium  dark:text-gray-400">neil.sims@flowbite.com</p>
                            <hr className="my-2 border-gray-200 dark:border-gray-700" />
                            <ul>
                                <li className="p-1 hover:bg-gray-100 dark:hover:bg-gray-900 ">Dashboard</li>
                                <li className="p-1 hover:bg-gray-100 dark:hover:bg-gray-900 ">Setting</li>
                                <li className="p-1 hover:bg-gray-100 dark:hover:bg-gray-900 ">Earnings</li>
                                <li className="p-1 hover:bg-gray-100 dark:hover:bg-gray-900 ">Sign out</li>
                            </ul>
                        </div>
                    )}


                    {showmenubar && (
                        <div className="absolute right-0 mt-12 w-80 bg-white dark:bg-gray-800 shadow-lg rounded">
                            <h1 className="p-2 bg-gray-50 dark:bg-gray-700 text-center font-semibold">Apps</h1>
                            <div className="p-4 grid grid-cols-3 gap-4">
                                <div className="flex flex-col items-center hover:bg-gray-100 rounded-lg p-2 cursor-pointer ">
                                    <img src={sales} alt="Sales" className="h-8 w-8 pb-1" />
                                    <p className="text-md  font-medium mb-2">Sales</p>
                                </div>
                                <div className="flex flex-col items-center hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                    <img src={users} alt="Users" className="h-8 w-8 pb-1" />
                                    <p className="text-md  font-medium">Users</p>
                                </div>
                                <div className="flex flex-col items-center hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                    <img src={inbox} alt="Inbox" className="h-8 w-8 pb-1" />
                                    <p className="text-md  font-medium">Inbox</p>
                                </div>
                                <div className="flex flex-col items-center hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                    <img src={pro} alt="Profile" className="h-8 w-8 pb-1" />
                                    <p className="text-md  font-medium mb-4">Profile</p>
                                </div>
                                <div className="flex flex-col items-center hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                    <img src={setting} alt="Setting" className="h-8 w-8 pb-1" />
                                    <p className="text-md  font-medium">Setting</p>
                                </div>
                                <div className="flex flex-col items-center hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                    <img src={products} alt="Products" className="h-8 w-8 pb-1" />
                                    <p className="text-md  font-medium">Products</p>
                                </div>
                                <div className="flex flex-col items-center hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                    <img src={pricing} alt="Pricing" className="h-8 w-8 pb-1" />
                                    <p className="text-md  font-medium mb-4">Pricing</p>
                                </div>
                                <div className="flex flex-col items-center hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                    <img src={billings} alt="Billing" className="h-8 w-8 pb-1" />
                                    <p className="text-md  font-medium">Billing</p>
                                </div>
                                <div className="flex flex-col items-center hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                                    <img src={logout} alt="Logout" className="h-8 w-8 pb-1" />
                                    <p className="text-md  font-medium">Logout</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {shownotification && (
                        <div className="absolute right-0 mt-12 w-96 bg-white dark:bg-gray-800 shadow-lg rounded">
                            <h1 className="p-2 bg-gray-50 dark:bg-gray-700 text-center font-semibold">Notifications</h1>
                            <div className="flex p-2 ">
                                <img src={bonnie} alt="bonnie" className=" p-2 h-16 w-16 rounded-full" />
                                <p className="text-base text-gray-400 "> New message from <span className="text-black text-sm font-semibold">Bonnie Green</span>"Hey<br /> what's up? All set the presentation?"<br />
                                    <span className="text-xs text-blue-600 py-3">a few movments ago</span></p>
                            </div>
                            <hr />
                            <div className="flex p-2">
                                <img src={jese} alt="jese" className=" p-2 h-16 w-16 rounded-full" />
                                <p className="text-base  text-gray-400 "><span className="text-black text-sm font-semibold">Jese leos </span> and <span className="text-black text-sm font-semibold">5 others </span> started following<br />you.<br />
                                    <span className="text-xs text-blue-600 py-3">10 minutes ago</span></p>
                            </div>
                            <hr />
                            <div className="flex p-2">
                                <img src={josepe} alt="josepe" className=" p-2 h-16 w-16 rounded-full" />
                                <p className="text-base  text-gray-400 "><span className="text-black text-sm font-semibold">Joseph Mcfall</span> and <span className="text-black text-sm font-semibold"> 141 others </span> love yours <br />story.See it and view more stories<br />
                                    <span className="text-xs text-blue-600 py-3">44 minutes ago</span></p>
                            </div>
                            <hr />
                            <div className="flex p-2">
                                <img src={leslie} alt="Leslie" className=" p-2 h-16 w-16 rounded-full" />
                                <p className="text-base  text-gray-400 "><span className="text-black text-sm font-semibold">Leslie Livingston</span> mentioned you in a comment:<span className="text-sm font-medium text-blue-600 py-3">@bonnie.green</span>what do you say?<br />
                                    <span className="text-xs text-blue-600 py-3">44 minutes ago</span></p>
                            </div>
                            <hr />
                            <div className="flex p-2">
                                <img src={robert} alt="robert" className=" p-2 h-16 w-16 rounded-full" />
                                <p className="text-base  text-gray-400 "><span className="text-black text-sm font-semibold">Robert Brown</span> posted a new video:<br />Glassmorphism - learn how to implement <br /> the new design trend.
                                    <span className="text-xs text-blue-600 py-3">3 hours ago</span></p>
                            </div>
                            <hr />
                            <div className="flex justify-center p-2 gap-2">
                                <img src={eye} alt='eye' />
                                <p className="text-lg">View all</p>
                            </div>
                        </div>


                    )

                    }

                </div>
            </div>
            <hr className={`${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`} />
        </div>
    );
};

export default Navbar;
