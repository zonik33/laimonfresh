import React, {useEffect, useRef, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Example from "./Example";
import "react-accessible-accordion/dist/fancy-example.css";
import Footer from "./Footer";
import Winners from "./Winners";
import howFull5 from '../image/img_36.png';
import How from "./How";
import Products from "./Products";
import wintohealth from '../image/img_121.png'
import wintohealth119 from '../image/img_119.png'
import wintohealth120 from '../image/img_120.png'
import inputcode from '../image/img_118.png'
import uptree from '../image/img_3.png'
import lefttree from '../image/img_4.png'
import gps from '../image/img_5.png'
import gpsmobile from '../image/gps-mobile.png'
import nature from '../image/img_6.png'
import tree5555 from '../image/img_64.png'
import tree12345 from '../image/img_65.png'
import tree6666 from '../image/img_26.png'
import fruit from '../image/img_28.png'
import bigline from '../image/img_7.png'
import biglinemobile from '../image/img_38.png'
import wintohealth2 from '../image/img_1.png'
import HowPrizes from "./HowPrizes";
import {useLocation} from "react-router-dom";
import PopupAddCode from "./Popups/PopupAddCode";
import PopupSuccessCode from "./Popups/PopupSuccessCode";
import PopupRegister from "./Popups/PopupRegister";
import owntreep from "../image/img_36.png";


export default function Main(props) {
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
    const prizesRef = useRef(null);
    const winnersRef = useRef(null);
    const faqRef = useRef(null);
    const supportRef = useRef(null);

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const activeSection = params.get("section");

    useEffect(() => {
        if (activeSection === "how-prizes" && prizesRef.current) {
            setTimeout(() => {
                prizesRef.current.scrollIntoView({ behavior: "smooth" });
            }, 0);
        } else if (activeSection === "winners" && winnersRef.current) {
            setTimeout(() => {
                winnersRef.current.scrollIntoView({ behavior: "smooth" });
            }, 0);
        } else if (activeSection === "faq" && faqRef.current) {
            setTimeout(() => {
                faqRef.current.scrollIntoView({ behavior: "smooth" });
            }, 0);
        } else if (activeSection === "support" && supportRef.current) {
            setTimeout(() => {
                supportRef.current.scrollIntoView({ behavior: "smooth" });
            }, 0);
        }
    }, [activeSection]);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    };
    const auth_key = localStorage.getItem('auth_key');
    const isAuthenticated = !!auth_key;
    const openPopupLogin = () => {
        document.getElementById("popup-login").style.display = "block";
        document.body.classList.add("no-scroll");
    };
    return (
        <main>
            <div className={'main'} id={'main'}>
                <div className={'main-items'}>
                    <div className={'main-promo'}>Промоакция</div>
                    <div className={'winners-text for-main'}>Летопутешествие с laimon fresh
                        <input
                            type="text"
                            className={'new-code'}
                            onClick={() => openPopup(isAuthenticated ? 'AddCode' : openPopupLogin)}
                            maxLength="20"
                            readOnly
                            placeholder=""
                        />
                        {isPopupOpen === 'AddCode' && isAuthenticated &&
                            <PopupAddCode showPopup={true} closeModal={closePopup}/>}
                        <img className={'bottle-float-left inputcode'} src={inputcode}/>
                        <div className="main-promo-text-input">ввести промокод*</div>
                        <div className={'winners-text-inputcode'}>
                            <span className={'text-inputcode'}>*найди код под крышкой/ключиком и введи промокод</span>
                        </div>
                        <div className={'main-promo block'}>Зарегистрируй код и забирай гарантированные подарки.
                            <br/>Не упусти возможность выиграть главный приз 1 000 000 рублей на путешествие мечты.
                        </div>
                    </div>
                    <div className={'bottle-left'}>
                        <img className={'bottle-float-left uptree'} src={uptree}/>
                        <img className={'bottle-float-left'} src={wintohealth}/>
                        <img className={'bottle-float-left air-bonus'} src={wintohealth119}/>
                        <img className={'bottle-float-left air'} src={wintohealth120}/>
                        <img className={'bottle-float-left two'} src={wintohealth2}/>
                        <img className={'bottle-float-left gps'} src={gps}/>

                        <img className={'bottle-float-left lefttree'} src={lefttree}/>
                        <img className={'bottle-float-left nature'} src={nature}/>
                    </div>
                    <div className={'bigline-container'}>
                        <img className={'bottle-float-left bigline'} src={bigline}/>
                    </div>

                    <p className="absolute-text">Москва</p>
                    <div className={'main-text-text'}>

                        {/*<div className={'main-text'}> Купите билет и получите гарантированный приз от 585 ЗОЛОТОЙ! Выиграйте медицинскую страховку!</div>*/}
                        <div className={'main-text'}>
                        </div>
                    </div>
                    <div className={'right-float-img'}>

                    </div>
                </div>
            </div>
            <div id="wave-container-test">
                <div id="wave-test">
                </div>
            </div>
            <img className={'bottle-float-left-mobile-gps'} src={gpsmobile}/>
            <img className={'bottle-float-left-mobile-gps bon1'} src={gpsmobile}/>
            <img className={'bottle-float-left-mobile-gps bon2'} src={gpsmobile}/>
            <img className={'bottle-float-left lefttree-mobile'} src={lefttree}/>
            <p className="absolute-text-mobile">Москва</p>
            <p className="absolute-text-mobile bon1">Санкт-Петербург</p>
            <p className="absolute-text-mobile bon2">Казань</p>
            <Products/>
            <div id="wave-container-test-2">
                <div id="wave-test-2">
                </div>
            </div>
            <How/>
            <HowPrizes/>
            <Winners/>
            <div id="wave-container-test-3">
                <div id="wave-test-3">
                </div>
            </div>
            <div className={'accordion-example'}>
                <div className={'winners-text for-faq'} id={'faq'} ref={faqRef}>Часто задаваемые вопросы
                </div>
                <img className={'bottle-float-left example-tree5 main-down'} src={owntreep}/>
                <img className={'bottle-float-left example-tree5'} src={tree5555}/>

                <img className={'bottle-float-left example-tree6'} src={tree6666}/>
                <img className={'bottle-float-left-mobile-gps bon9'} src={gpsmobile}/>
                <p className="absolute-text-mobile bon9">Владивосток</p>
                <Example/>
                <img className={'bottle-float-left example-tree5 faq-down-leetree'} src={tree12345}/>
                <img className={'bottle-float-left example-tree5 main-down-town'} src={owntreep}/>
                <div id="wave-container-test-4">
                    <div id="wave-test-4">
                    </div>
                </div>
            </div>
            {/*<Questions/>*/}
            {/*<Footer/>*/}
            <Footer/>
            <PopupSuccessCode/>
        </main>
    );
}