import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebars';
import { Outlet } from 'react-router-dom';

const Flowbite = () => {
  return (
    <div className="h-screen flex flex-col bg-slate-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 overflow-x-auto p-4 bg-slate-50 dark:bg-gray-900">
          <div className="flex flex-nowrap space-x-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flowbite;
