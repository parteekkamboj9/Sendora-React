import React, { useState } from 'react';
import { FaHome, FaUserAlt, FaCog, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import MenuBar from './MenuBar';
import SideBar from './Sidebar';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(localStorage.getItem('isSidebarOpen') === 'true');

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
    localStorage.setItem('isSidebarOpen', !isOpen);
  };

  return (
    <div>
      <SideBar isOpen={isOpen} />
      <MenuBar openSidebar={toggleSideBar} isOpen={isOpen} />
    </div>
  )
}

export default Layout;