import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import Home from './pages/Home';
import Configurations from './pages/Configurations';
import Sopro from './pages/Sopro';
import Rotuladora from './pages/Rotuladora';
import Menu from './components/Menu';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Menu>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Routes>
                    <Route path="/configurations" element={<Configurations />} />
                </Routes>
                <Routes>
                    <Route path="/sopro" element={<Sopro />} />
                </Routes>
                <Routes>
                    <Route path="/rotuladora" element={<Rotuladora />} />
                </Routes>
            </Menu>
        </BrowserRouter>
    );
}