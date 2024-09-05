// Flowbite.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebars';
import { Outlet } from 'react-router-dom';

const Flowbite = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true); // Sidebar is visible by default

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="h-screen flex flex-col bg-slate-50 dark:bg-gray-900">
      <Navbar toggleSidebar={toggleSidebar} /> {/* Pass toggle function to Navbar */}
      <div className="flex flex-1">
        {isSidebarVisible && <Sidebar />} {/* Conditionally render Sidebar */}
        <div className={`flex-1 overflow-x-auto p-4 bg-slate-50 dark:bg-gray-900 ${isSidebarVisible ? 'ml-0' : 'ml-0'}`}>
          <div className="flex flex-nowrap space-x-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flowbite;
