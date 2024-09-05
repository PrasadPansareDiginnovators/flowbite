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
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const handleMenuClick = (label) => {
        setOpenSubmenu(openSubmenu === label ? null : label);
    };

    const menuItems = [
        { img: dashboard, label: 'Dashboard', type: 'main' },
        { img: kanban, label: 'Kanban', type: 'main' },
        { img: inbox, label: 'Inbox', badge: '3', type: 'main' },
        { img: ecommerece, label: 'E-commerce', arrow: true, onClick: () => handleMenuClick('E-commerce'), type: 'main' },
        { img: users, label: 'Users', arrow: true, onClick: () => handleMenuClick('Users'), type: 'main' },
        { img: pages, label: 'Pages', arrow: true, onClick: () => handleMenuClick('Pages'), type: 'main' },
        { img: authentication, label: 'Authentication', arrow: true, onClick: () => handleMenuClick('Authentication'), type: 'main' },
        { img: docs, label: 'Docs', type: 'secondary' },
        { img: componants, label: 'Components', type: 'secondary' },
        { img: help, label: 'Help', type: 'secondary' },
    ];

    const submenuItems = {
        'E-commerce': [
            { label: 'Product' },
            { label: 'Billing' },
            { label: 'Invoice' },
        ],
        'Users': [
            { label: 'User List' },
            { label: 'Profile' },
            { label: 'Feed' },
            { label: 'Settings' },
        ],
        'Pages': [
            { label: 'Pricing' },
            { label: 'Maintenance' },
            { label: '404 not found' },
            { label: '500 server error' },
        ],
        'Authentication': [
            { label: 'Sign In' },
            { label: 'Sign Up' },
            { label: 'Forgot Password' },
            { label: 'Reset Password' },
            { label: 'Profile Lock' },
        ],
    };

    const footerItems = [
        { img: slinr, alt: 'sline',  },
        { img: setting, alt: 'setting',  },
        { img: flag, alt: 'flag', }
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
                {menuItems.map((item, index) => (
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

                        {/* Submenus */}
                        {item.type === 'main' && openSubmenu === item.label && (
                            <div className="pl-8 space-y-2 mb-2">
                                {submenuItems[item.label].map((submenuItem, subIndex) => (
                                    <div key={subIndex} className="flex text-lg gap-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
                                        <p className="text-base">{submenuItem.label}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {item.label === 'Authentication' && <hr className="border-t border-gray-200 dark:border-gray-700 my-2" />}
                    </div>
                ))}
            </div>

            <div className='flex flex-row gap-9 mt-28 mx-10 justify-center'>
                {footerItems.map((item, index) => (
                    <div
                        key={index}
                        className="h-5 w-5 rounded-full overflow-hidden flex items-center justify-center"
                    >
                        <img
                            src={item.img}
                            alt={item.alt}
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Sidebars;
