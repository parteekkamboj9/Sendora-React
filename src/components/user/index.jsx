// Dashboard.js
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import SideBar from './Sidebar.jsx';

const UserDashboard = () => {
  return (
    <div className=''>
      <SideBar />
      {/* The Outlet is where nested routes will be rendered */}
      <Outlet />
    </div>
  );
};

export default UserDashboard;
