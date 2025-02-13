import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import * as Comps from './Imports.js';


function App() {

  return (
    <>
    <Router>
      <Comps.Header/>
      <div className='mt-10'>
      <Routes>
        <Route path="/" element={<Comps.Index />} />
        <Route path="/blogs" element={<Comps.Blogs />} />
        <Route path="/login" element={<Comps.LoginSignUp />} />
        <Route path="/sign-up" element={<Comps.LoginSignUp />} />

        {/* This route will match any undefined path */}
        <Route path="*" element={<Comps.NotFound />} />
      </Routes>
      </div>
      <Comps.Footer/>
    </Router>
      </>
  )
}

export default App
