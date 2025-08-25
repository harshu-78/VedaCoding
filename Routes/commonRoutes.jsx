import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
// import About from '../pages/About';
// import Contact from '../pages/Contact';
// import NotFound from '../pages/NotFound';
import Bracelet from '../VedaStructure/src/pages/Bracelet';

// Import your page components here

const CommonRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bracelet" element={<Bracelet/>} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<h1>404</h1>} />
    </Routes>
);

export default CommonRoutes;