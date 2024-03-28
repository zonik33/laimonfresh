import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import Nav from "./Nav/Nav";


function App() {
    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav/>}/>
            </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;
