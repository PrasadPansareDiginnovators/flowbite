import React, { useState } from 'react';
import dashboard from '../assets/img/sidebar/dashboard.svg';
import kanban from '../assets/img/sidebar/kanban.svg';
import inbox from '../assets/img/sidebar/inbox.svg';
import ecommerece from '../assets/img/sidebar/e commerece.svg';
import users from '../assets/img/sidebar/users.svg';
import authentication from '../assets/img/sidebar/Authentication.svg';
import docs from '../assets/img/sidebar/Docs.svg';
import componants from '../assets/img/sidebar/componants.svg';
import help from '../assets/img/sidebar/help.svg';
import dawnarrow from '../assets/img/sidebar/dawnarrow.svg';
import search from '../assets/img/navbar/search.svg';
import slinr from '../assets/img/sidebar/sline1.svg';
import setting from '../assets/img/sidebar/setting1.svg';
import flag from '../assets/img/sidebar/flag1.svg';
import pages from '../assets/img/sidebar/pages.svg';

const Sidebars = ({ isvisible }) => {
    const [showEcommerceSubmenu, setShowEcommerceSubmenu] = useState(false);
    const [showUsersSubmenu, setShowUsersSubmenu] = useState(false);
    const [showPagesSubmenu,setshowpagessubmenu] = useState(false)
    const [showAuthenticationSubmenu, setShowAuthenticationSubmenu] = useState(false);

    const handleEcommerceClick = () => {
        setShowEcommerceSubmenu(!showEcommerceSubmenu);
    };

    const handleUsersClick = () => {
        setShowUsersSubmenu(!showUsersSubmenu);
    };

    const handlePagesClick = () =>{
        setshowpagessubmenu(!showPagesSubmenu)
    }

    const handleAuthenticationClick = () => {
        setShowAuthenticationSubmenu(!showAuthenticationSubmenu);
    };

    const mainMenuItems = [
        { img: dashboard, label: 'Dashboard' },
        { img: kanban, label: 'Kanban' },
        { img: inbox, label: 'Inbox', badge: '3' },
        { img: ecommerece, label: 'E-commerce', arrow: true, onClick: handleEcommerceClick },
        { img: users, label: 'Users', arrow: true, onClick: handleUsersClick },
        { img: pages, label: 'Pages', arrow: true, onClick: handlePagesClick },
        { img: authentication, label: 'Authentication', arrow: true, onClick: handleAuthenticationClick },
    ];

    const ecommerceSubmenuItems = [
        { label: 'Product' },
        { label: 'Billing' },
        { label: 'Invoice' },
    ];

    const usersSubmenuItems = [
        { label: 'User List' },
        { label: 'Profile' },
        { label: 'Feed' },
        { label: 'Settings' },
    ];

    const showPagesSubmenuItems = [
        { label: 'Pricing' },
        { label: 'Maintenance' },
        { label: '404 not found' },
        { label: '500 server error' },
    ];

    const authenticationSubmenuItems = [
        { label: 'Sign In' },
        { label: 'Sign Up' },
        { label: 'Forgot Password' },
        { label: 'Reset Password' },
        { label: 'Profile Lock' },
    ];

    const secondaryMenuItems = [
        { img: docs, label: 'Docs' },
        { img: componants, label: 'Components' },
        { img: help, label: 'Help' },
    ];

    const footerItems = [
        { img: slinr, alt: 'sline', className: 'h-6 w-6' },
        { img: setting, alt: 'setting', className: 'h-6 w-6' },
        { img: flag, alt: 'flag', className: 'rounded-full h-5 w-5 mt-1' }
    ];

    return (
        <div className="hidden lg:block top-0 left-0 pt-3 w-64 bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg border-r border-gray-200 dark:border-gray-700">
            <div className="flex border rounded-lg pl-1 py-[2px] m-4 bg-[#F9FAFB] dark:bg-gray-800 md:flex lg:hidden">
                <img src={search} alt="search" className="h-9 p-2" />
                <input
                    placeholder="Search"
                    className="text-sm font-medium bg-[#F9FAFB] dark:bg-gray-800 dark:text-white flex-1"
                />
            </div>

            <div className="space-y-2">
                {mainMenuItems.map((item, index) => (
                    <div key={index}>
                        <div
                            className={`relative flex gap-2 mx-4 my-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 py-2 rounded-md ${item.onClick ? 'cursor-pointer' : ''}`}
                            onClick={item.onClick}
                        >
                            <img src={item.img} alt={item.label.toLowerCase()} />
                            <p className="text-md cursor-pointer">{item.label}</p>
                            {item.badge && (
                                <p className="w-5 h-5 flex items-center justify-center rounded-full text-sm font-medium text-blue-700 bg-blue-100 dark:bg-blue-900 dark:text-blue-200 ml-auto">
                                    {item.badge}
                                </p>
                            )}
                            {item.arrow && <img src={dawnarrow} alt="dawnarrow" className="ml-auto" />}
                        </div>

                        {/* Submenu for E-commerce */}
                        {item.label === 'E-commerce' && showEcommerceSubmenu && (
                            <div className="pl-8 space-y-2 mb-2">
                                {ecommerceSubmenuItems.map((submenuItem, subIndex) => (
                                    <div key={subIndex} className="flex text-lg gap-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
                                        <p className="text-md">{submenuItem.label}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Submenu for Users */}
                        {item.label === 'Users' && showUsersSubmenu && (
                            <div className="pl-8 space-y-2 mb-2">
                                {usersSubmenuItems.map((submenuItem, subIndex) => (
                                    <div key={subIndex} className="flex text-lg gap-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
                                        <p className="text-md">{submenuItem.label}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Submenu for Pages */}
                        {item.label === 'Pages' && showPagesSubmenu && (
                            <div className="pl-8 space-y-2 mb-2">
                                {showPagesSubmenuItems.map((submenuItem, subIndex) => (
                                    <div key={subIndex} className="flex text-lg gap-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
                                        <p className="text-md">{submenuItem.label}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Submenu for Authentication */}
                        {item.label === 'Authentication' && showAuthenticationSubmenu && (
                            <div className="pl-8 space-y-2 mb-2">
                                {authenticationSubmenuItems.map((submenuItem, subIndex) => (
                                    <div key={subIndex} className="flex text-lg gap-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
                                        <p className="text-md">{submenuItem.label}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                <hr className="border-gray-200 dark:border-gray-700" />
                {secondaryMenuItems.map((item, index) => (
                    <div key={index} className="flex gap-2 mx-4 my-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 py-2 rounded-md">
                        <img src={item.img} alt={item.label.toLowerCase()} />
                        <p className="text-md cursor-pointer">{item.label}</p>
                    </div>
                ))}
            </div>

            <div className='flex flex-row gap-2 mt-20 justify-evenly'>
                {footerItems.map((item, index) => (
                    <img
                        key={index}
                        src={item.img}
                        alt={item.alt}
                        className={`h-8 ${item.className ? item.className : ''}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sidebars;
