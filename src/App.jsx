import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css'
import * as Comps from './Imports.js';


function Layout() {
  const location = useLocation();

  // Define the pages where you want to show the header and footer
  const showHeaderAndFooter = !(
    location.pathname === '/login' || location.pathname === '/sign-up' || location.pathname === '/google-callback' || location.pathname.includes('/dashboard')
  );

  return (
    <>
      {showHeaderAndFooter && <Comps.Header />}
      <Routes>
        <Route path="/" element={<Comps.Index />} />
        <Route path="/dashboard" element={<Comps.UserDashboard />}>
          <Route index element={<Comps.Dashboard />} />
          <Route path="overview" element={<Comps.Overview />} />
        </Route>
        <Route path="/blogs" element={<Comps.Blogs />} />
        <Route path="/login" element={<Comps.LoginSignUp />} />
        <Route path="/sign-up" element={<Comps.LoginSignUp />} />
        <Route path="/google-callback" element={<Comps.Index />} />

        {/* This route will match any undefined path */}
        <Route path="*" element={<Comps.NotFound />} />
      </Routes>
      {showHeaderAndFooter && <Comps.Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
