import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as Comps from './Imports.js';


export default function UserRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Comps.Dashboard />} />
        {/* <Route path="/blogs" element={<Comps.Blogs />} />
        <Route path="/login" element={<Comps.LoginSignUp />} />
        <Route path="/sign-up" element={<Comps.LoginSignUp />} />
        <Route path="/google-callback" element={<Comps.Index />} /> */}

        {/* This route will match any undefined path */}
        {/* <Route path="*" element={<Comps.NotFound />} /> */}
    </Routes>
  )
}
