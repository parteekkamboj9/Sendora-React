import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import * as Comps from './Imports.js';


function App() {
  return (
    <>
      <Router>
        <Comps.Header/>
        <Routes>
          <Route path="/" element={<Comps.Index />} />
          <Route path="/dashboard" element={<Comps.UserRoutes />} />
          <Route path="/blogs" element={<Comps.Blogs />} />
          <Route path="/login" element={<Comps.LoginSignUp />} />
          <Route path="/sign-up" element={<Comps.LoginSignUp />} />
          <Route path="/google-callback" element={<Comps.Index />} />

          {/* This route will match any undefined path */}
          <Route path="*" element={<Comps.NotFound />} />
        </Routes>
        <Comps.Footer/>
      </Router>
    </>
  )
}

export default App
