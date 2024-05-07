import React, {useState} from 'react';
import logo2 from '../image/logo2.png';
import lemondots from '../image/lemon.png';
import dotslemon from '../image/Dots.svg';
import ScrollPrizes from "../Scroll/ScrollPrizes";
import ScrollWinners from "../Scroll/ScrollWinners";
import ScrollFaq from "../Scroll/ScrollFaq";
import PopupSuccessCode from "./Popups/PopupSuccessCode";
import PopupPasswordNewStepOne from "./Popups/PopupPasswordNewStepOne";
import PopupPasswordNewStepTwo from "./Popups/PopupPasswordNewStepTwo";
import PopupRegister from "./Popups/PopupRegister";
import PopupLogin from "./Popups/PopupLogin";
import PopupSuccessPassword from "./Popups/PopupSuccessPassword";
import PopupSuccessEmail from "./Popups/PopupSuccessEmail";
import PopupSuccessRegister from "./Popups/PopupSuccessRegister";
import inputcode from "../image/img_2.png";
import PopupAddCode from "./Popups/PopupAddCode";
import {Link} from "react-router-dom";

export default function Header(props) {
    const [showPopup, setShowPopup] = useState(false);

    const [isPopupOpen, setIsPopupOpen] = useState(null);
    const openPopup = (popupName) => {
        if (!isPopupOpen) {
            setIsPopupOpen(popupName);
            document.body.classList.add("no-scroll");
        }
    };

    const closePopup = () => {
        setIsPopupOpen(null);  // Add this line to reset isPopupOpen
        document.body.classList.remove("no-scroll");
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
        document.body.style.overflow = showPopup ? 'auto' : 'hidden';

    };
    function toggleMenu() {
        const navLists = document.querySelector('.header-burger');
        navLists.classList.toggle('active');
        const navList = document.querySelector('header .menu');
        navList.classList.toggle('show');
        document.documentElement.classList.toggle('menu-open');
        document.body.classList.toggle('menu-open');
    }
    function closeMenu() {
        const navLists = document.querySelector('.header-burger');
        navLists.classList.remove('active');
        const navList = document.querySelector('header .menu');
        navList.classList.remove('show');
        document.documentElement.classList.remove('menu-open'); // Удаление класса 'menu-open' у элемента <html>
        document.body.classList.remove('menu-open');
    }
    const openPopupLogin = () => {
        document.getElementById("popup-login").style.display = "block";
        document.body.classList.add("no-scroll");
    };
    const handleImageClick = () => {
        window.location.href = '/'
    };
    const auth_key = localStorage.getItem('auth_key');
    const isAuthenticated = !!auth_key;
    return (
        <header>
            <img src={lemondots} alt="Photo" className="left-photo"/>
            <img src={dotslemon} alt="SVG" className="svg-img"/>
            <div className="header" id="header">

                <div className="logo">
                    <Link to="">
                        <img src={logo2} alt="Logo" onMouseOver={() => { /* Обработчик наведения на картинку */
                        }} onClick={handleImageClick}
                        />
                    </Link>
                </div>
                <div className={'header-burger'} onClick={toggleMenu}>
                    <span className={'span-burger'}></span>
            </div>
            <div className="menu">
                <nav className="main-menu">
                    <ul>
                        <li className={'li-rules'}><a href={'#'}> Правила</a></li>
                        <li className={'li-ont'}><a className="smooth" href={'#how-prizes'} onClick={(event) => {
                            closeMenu();
                            ScrollPrizes(event);
                        }}>Призы</a></li>
                        <li className={'li-ont'}><a className="smooth" href={'#winners'} onClick={(event) => {
                            closeMenu();
                            ScrollWinners(event);
                        }}>Победители</a></li>
                        <li className={'li-ont'}><a className="smooth" href={'#faq'} onClick={(event) => {
                            closeMenu();
                            ScrollFaq(event);
                        }}>Вопросы/ответы</a></li>
                        {isAuthenticated ? (
                        <li className={'li-lc'}><a href={'profile'}>Личный кабинет</a></li>
                            ): (
                            <li className={'li-lc'}><a onClick={openPopupLogin}>Войти</a></li>
                        )}
                            <li className={'shadow-dont'}>
                            <img className={'bottle-float-left show'} src={inputcode}/>
                            <input
                                type="text"
                                className={'shadow-button-animation-text'}
                                onClick={() => openPopup(isAuthenticated ? 'AddCode' : openPopupLogin)}
                                maxLength="20"
                                readOnly
                                placeholder=""
                            />
                                {isPopupOpen === 'AddCode' && isAuthenticated && <PopupAddCode showPopup={true} closeModal={closePopup}/>}
                        </li>
                    </ul>
                </nav>
            </div>
                <div className="contact-info">
                    {/*<p>Адрес: Ваш адрес</p>*/}
                    {/*<p>Телефон: Ваш номер телефона</p>*/}
                    {/*<p>Время работы: Ваши рабочие часы</p>*/}
                </div>
                {/*<button onClick={togglePopup} className="btn-leave-request">Оставить заявку</button>*/}
        </div>
    <PopupSuccessCode/>
    <PopupSuccessPassword/>
    <PopupSuccessEmail/>
    <PopupPasswordNewStepOne/>
    <PopupPasswordNewStepTwo/>
    <PopupLogin/>
            <PopupSuccessRegister/>
        </header>
    );
}