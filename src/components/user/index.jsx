// Dashboard.js
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import SideBar from './Sidebar.jsx';

const UserDashboard = () => {
  return (
    <div className='flex flex-row'>
      <SideBar />
      <div>
        {/* The Outlet is where nested routes will be rendered */}
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
