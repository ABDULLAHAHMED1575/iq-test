// this is App.js that includes react router dom implementation
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home";
import Test from "./pages/iq_test";
import Contact from "./pages/contact_us";
import Navbar from "./navbar";

function App() {
    return (<div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/test" element={<Test/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>);
}

export default App;
