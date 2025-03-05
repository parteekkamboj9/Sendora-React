import React, { useState } from 'react';
import { FaHome, FaUserAlt, FaCog, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ isOpen }) => {

  return (
    <div className={`flex h-screen bg-gray-800 ${isOpen ? 'w-40' : 'w-20'} transition-all duration-300`}>
      {/* SideBar */}
      <div className={`flex flex-col items-center bg-gray-800 text-white ${isOpen ? 'w-40' : 'w-14'} transition-all duration-300`}>

        {/* SideBar Menu */}
        <div className={`flex flex-col items-center space-y-3 w-full mt-20 ${isOpen ? 'px-2' : 'px-1'}`}>
          <MenuItem link={'/dashboard'} icon={<FaHome />} label="Home" isOpen={isOpen} />
          <MenuItem link={'/dashboard/profile'} icon={<FaUserAlt />} label="Profile" isOpen={isOpen} />
          <MenuItem link={'/dashboard/analytics'} icon={<FaChartBar />} label="Analytics" isOpen={isOpen} />
          <MenuItem link={'/dashboard/settings'} icon={<FaCog />} label="Settings" isOpen={isOpen} />
          <MenuItem link={'/dashboard/logout'} icon={<FaSignOutAlt />} label="Logout" isOpen={isOpen} />
        </div>
      </div>

    </div>
  );
};

const MenuItem = ({ link, icon, label, isOpen }) => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center space-x-3 w-full px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer" onClick={() => navigate(link)}>
      <div className="text-sm">{icon}</div>
      {isOpen && <span className="text-sm">{label}</span>}
    </div>
  );
};

export default SideBar;
