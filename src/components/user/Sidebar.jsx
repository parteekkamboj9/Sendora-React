import React, { useState } from 'react';
import { FaHome, FaUserAlt, FaCog, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex h-screen bg-gray-800 ${isOpen ? 'w-64' : 'w-12'} transition-all duration-300`}>
      {/* SideBar */}
      <div className={`flex flex-col items-center bg-gray-900 text-white ${isOpen ? 'w-64' : 'w-12'} transition-all duration-300`}>
        {/* SideBar Header */}
        <div className="flex justify-between items-center w-full p-4">
          <NavLink to={'/'} className={`flex justify-center items-center gap-0 mr-5${isOpen ? '' : 'hidden'}`}>
            <img src='/static/icons/logo.svg' className='w-6' />
            <span className='text-primary pt-0.5'>Sendora</span>
          </NavLink>
          {/* <div className={`text-xl font-base ${isOpen ? '' : 'hidden'}`}>Sendora</div> */}
          <button onClick={toggleSideBar} className="text-white focus:outline-none">
            <span className="material-icons">
              {isOpen ? (
                <img src='/static/icons/dashboard/arrow-left.svg' className='w-6' />
              ) : (
                <img src='/static/icons/dashboard/menu-bar.svg' className='w-6' />
              )}
            </span>
          </button>
        </div>

        {/* SideBar Menu */}
        <div className="flex flex-col items-center space-y-4 w-full mt-6 mx-2">
          <MenuItem icon={<FaHome />} label="Home" isOpen={isOpen} />
          <MenuItem icon={<FaUserAlt />} label="Profile" isOpen={isOpen} />
          <MenuItem icon={<FaChartBar />} label="Analytics" isOpen={isOpen} />
          <MenuItem icon={<FaCog />} label="Settings" isOpen={isOpen} />
          <MenuItem icon={<FaSignOutAlt />} label="Logout" isOpen={isOpen} />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Content will go here */}
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label, isOpen }) => {
  return (
    <div className="flex items-center space-x-3 w-full px-3 py-1 hover:bg-gray-700 rounded-md cursor-pointer">
      <div className="text-lg">{icon}</div>
      {isOpen && <span className="text-lg">{label}</span>}
    </div>
  );
};

export default SideBar;
