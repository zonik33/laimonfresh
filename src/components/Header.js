import React, {useEffect, useState} from 'react';
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
import inputcode from "../image/img_118.png";
import PopupAddCode from "./Popups/PopupAddCode";
import {Link} from "react-router-dom";
import PopupSoon from "./Popups/PopupSoon";
import PopupU from "./Popups/PopupU";
import Cookies from 'js-cookie';
// function setPopupExpiration() {
//     const expirationTime = Date.now() + 5000; // Установите время истечения через 5 секунд
//     localStorage.setItem('popupUShown', 'true');
//     localStorage.setItem('popupExpiration', expirationTime);
// }

// function isPopupExpired() {
//     const expirationTime = localStorage.getItem('popupExpiration');
//     return expirationTime && Date.now() > expirationTime;
// }

export default function Header(props) {
    const [showPopup, setShowPopup] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(null);
    // useEffect(() => {
    //     const popupShown = Cookies.get('popupUShown');
    //
    //     if (!popupShown) {
    //         setShowPopup(true);
    //         Cookies.set('popupUShown', 'true', { expires: 5/1440 }); // 1 минута в днях, 1/1440 = 1 минута
    //         // console.log("Cookie set: popupUShown");
    //
    //         const timer = setTimeout(() => {
    //             // console.log("Removing cookie...");
    //             Cookies.remove('popupUShown'); // Удаляем куку вручную
    //
    //             // Проверяем, была ли кука удалена
    //             const checkCookieAfterRemoval = Cookies.get('popupUShown');
    //             if (!checkCookieAfterRemoval) {
    //                 // console.log("Cookie successfully removed");
    //             } else {
    //                 // console.log("Cookie still exists: ", checkCookieAfterRemoval);
    //             }
    //
    //             setShowPopup(false); // Скрываем попап после удаления куки
    //             // console.log("Popup hidden");
    //         }, 60000); // 10 секунд для демонстрации, чтобы скрыть попап
    //
    //         return () => {
    //             clearTimeout(timer); // Очищаем таймер при размонтировании
    //             // console.log("Cleanup timer");
    //         };
    //     } else {
    //         // console.log("Cookie already set: popupUShown");
    //     }
    // }, []);

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
    const currentDomain = window.location.origin;
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
                        <li className={'li-rules'}><a href={`${currentDomain}/rules.pdf`} target="_blank"> Правила</a></li>
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
                            <div className="main-promo-text-input-new">ввести промокод*</div>
                            <input
                                type="text"
                                className={'shadow-button-animation-text'}
                                onClick={() => openPopup(isAuthenticated ? 'AddCode' : openPopupLogin)}
                                maxLength="20"
                                readOnly
                                placeholder=""
                            />
                            {isPopupOpen === 'AddCode' && isAuthenticated &&
                                <PopupAddCode showPopup={true} closeModal={closePopup}/>}
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
            <PopupSoon/>
            <PopupSuccessRegister/>
            {/*<PopupU showPopup={showPopup} closeModal={() => setShowPopup(false)} />*/}
        </header>
    );
}