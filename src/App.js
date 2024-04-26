import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import Nav from "./Nav/Nav";
import Faq from "./components/faq-block/Faq";
import Profile from "./components/lk-profile/Profile";
import WinnersAll from "./components/winners/WinnersAll";


function App() {
    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav/>}/>
                <Route path="/faq/*" element={<Faq/>}
                />
                <Route path="/winners/*" element={<WinnersAll/>}
                />
                <Route path="/profile/*" element={<Profile/>}
                />
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;
