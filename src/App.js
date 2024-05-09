import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import Nav from "./Nav/Nav";
import Faq from "./components/faq-block/Faq";
import Profile from "./components/lk-profile/Profile";
import WinnersAll from "./components/winners/WinnersAll";
import Modal from "react-modal";
import axios from "axios";
import PopupSoon from "./components/Popups/PopupSoon";
const auth_key = localStorage.getItem('auth_key');
const isAuthenticated = !!auth_key;


if (isAuthenticated) {

    try {
        const response = await axios.get('https://promo.laimonfresh.ch/backend/api/getProfile', {
            headers: {
                'X-Auth-Token': auth_key
            }
        });

        if (response.data.result) {
            localStorage.setItem('profile', JSON.stringify(response.data.data));
        }
    } catch (error) {

    }
} else {

}


function App() {
    const [showPopup, setShowPopup] = useState(false);
    const [isContentLoaded, setIsContentLoaded] = useState(false);
    useEffect(() => {
        // Обработчик события, вызываемый после загрузки всего контента
        const handleContentLoaded = () => {
            setIsContentLoaded(true);
        };
        document.addEventListener('DOMContentLoaded', handleContentLoaded);
        // openPopup3()
        // openPopup3()
        return () => {
            document.removeEventListener('DOMContentLoaded', handleContentLoaded);
        };
    }, []);

    useEffect(() => {
        if (isContentLoaded) {
        }
    }, [isContentLoaded]);
    function openPopup3() {
        document.getElementById("popup-soon").style.display = "block";
        document.body.classList.add("no-scroll");
    }
    return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav/>}/>
                <Route path="/faq/*" element={<Faq/>}
                />
                <Route path="/winners/*" element={<WinnersAll/>}
                />
                <Route
                    path="/profile/*"
                    element={isAuthenticated ? <Profile /> : <Navigate to="/" />}
                />
            </Routes>
        </BrowserRouter>
        <PopupSoon/>
    </div>

    );
}

export default App;
