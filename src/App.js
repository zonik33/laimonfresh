import './App.css';
import React, {useEffect, useState} from 'react';
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import Nav from "./Nav/Nav";
import Faq from "./components/faq-block/Faq";
import Profile from "./components/lk-profile/Profile";
import WinnersAll from "./components/winners/WinnersAll";
import axios from "axios";
import Error from "./components/Error/Error";
import PopupBanner from "./components/Popups/PopupBanner";
import PopupRegister from "./components/Popups/PopupRegister";


const urlParams = new URLSearchParams(window.location.search);
const authKeyFromURL = urlParams.get('auth_key');
if (authKeyFromURL) {
    localStorage.setItem('auth_key', authKeyFromURL); // Сохраняем auth_key в localStorage
}

const auth_key = localStorage.getItem('auth_key');
let isAuthenticated = !!auth_key;



if (isAuthenticated) {

    try {
        const response = await axios.get('https://promo.laimonfresh.ch/backend/api/getProfile', {
            headers: {
                'X-Auth-Token': auth_key
            }
        });

        if (response.data.result) {
            localStorage.setItem('profile', JSON.stringify(response.data.data));
            if (authKeyFromURL){
                window.location.href = '/profile';
            }
        }
    } catch (error) {

    }
} else {

}



function App() {
    const [showPopup, setShowPopup] = useState(true);
    const [isContentLoaded, setIsContentLoaded] = useState(false);

    const closeModal = () => {
        setShowPopup(false);
    };


// Проверяем, содержит ли текущий URL указанный путь перенаправления

    useEffect(() => {
        // Обработчик события, вызываемый после загрузки всего контента
        const handleContentLoaded = () => {
            setIsContentLoaded(true);
        };
        document.addEventListener('DOMContentLoaded', handleContentLoaded);
        return () => {
            document.removeEventListener('DOMContentLoaded', handleContentLoaded);
        };
    }, []);

    useEffect(() => {
        if (isContentLoaded) {

        }
    }, [isContentLoaded]);

    function openPopup3() {
        document.getElementById("popup-soon5").style.display = "block";
        document.body.classList.add("no-scroll");
    }
    function ErrorPage() {
        return <div>404 - Page Not Found</div>;
    }
    return (
    <div className="App">
        <HashRouter>
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
                <Route path="*" element={<Error/>} />
            </Routes>
        </HashRouter>
        <PopupRegister showPopup={showPopup} closeModal={closeModal} />
        <PopupBanner/>
    </div>

    );
}

export default App;
