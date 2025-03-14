// Dashboard.js
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Layout from './Layout/index.jsx';

const UserDashboard = () => {
  return (
    <div className='flex flex-row'>
      <Layout />
      <div className='w-full mt-16 h-[90vh] overflow-y-auto'>
        {/* The Outlet is where nested routes will be rendered */}
        <Outlet />
      </div>
    </div>
    );
};

export default UserDashboard;
