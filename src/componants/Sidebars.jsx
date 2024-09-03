import React from 'react';
import dashboard from '../assets/img/sidebar/dashboard.svg';
import kanban from '../assets/img/sidebar/kanban.svg';
import inbox from '../assets/img/sidebar/inbox.svg';
import ecommerece from '../assets/img/sidebar/e commerece.svg';
import users from '../assets/img/sidebar/pages.svg';
import authentication from '../assets/img/sidebar/Authentication.svg';
import docs from '../assets/img/sidebar/Docs.svg';
import componants from '../assets/img/sidebar/componants.svg';
import help from '../assets/img/sidebar/help.svg';
import dawnarrow from '../assets/img/sidebar/dawnarrow.svg';
import search from '../assets/img/navbar/search.svg';

const Sidebars = () => {
    const mainMenuItems = [
        { img: dashboard, label: 'Dashboard' },
        { img: kanban, label: 'Kanban' },
        { img: inbox, label: 'Inbox', badge: '3' },
        { img: ecommerece, label: 'E-commerce', arrow: true },
        { img: users, label: 'Users', arrow: true },
        { img: authentication, label: 'Authentication', arrow: true },
    ];

    const secondaryMenuItems = [
        { img: docs, label: 'Docs' },
        { img: componants, label: 'Components' },
        { img: help, label: 'Help' },
    ];

    return (
        <div className="hidden lg:block top-0 left-0 w-64 bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg transition-colors duration-300">
            <div className="flex border rounded-lg pl-1 py-[2px] m-4 bg-[#F9FAFB] dark:bg-gray-800">
                <img src={search} alt="search" className="h-9 p-2" />
                <input
                    placeholder="Search"
                    className="text-sm font-medium bg-[#F9FAFB] dark:bg-gray-800 dark:text-white flex-1"
                />
            </div>
            <div className="space-y-2">
                {mainMenuItems.map((item, index) => (
                    <div key={index} className="flex gap-2 mx-4 my-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 py-2 rounded-md">
                        <img src={item.img} alt={item.label.toLowerCase()} />
                        <p className="text-lg">{item.label}</p>
                        {item.badge && <p className="rounded-full px-2 text-blue-700 bg-blue-100 dark:bg-blue-900 dark:text-blue-200 ml-auto">{item.badge}</p>}
                        {item.arrow && <img src={dawnarrow} alt="dawnarrow" className="ml-auto" />}
                    </div>
                ))}
                <hr className="border-gray-200 dark:border-gray-700" />
                {secondaryMenuItems.map((item, index) => (
                    <div key={index} className="flex gap-2 mx-4 my-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 py-2 rounded-md">
                        <img src={item.img} alt={item.label.toLowerCase()} />
                        <p className="text-lg">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebars;
