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
import wintohealth from '../image/img.png'
import inputcode from '../image/img_2.png'
import uptree from '../image/img_3.png'
import lefttree from '../image/img_4.png'
import gps from '../image/img_5.png'
import nature from '../image/img_6.png'
import tree5555 from '../image/img_25.png'
import tree6666 from '../image/img_26.png'
import fruit from '../image/img_28.png'
import bigline from '../image/img_7.png'
import wintohealth2 from '../image/img_1.png'
import HowPrizes from "./HowPrizes";
import {useLocation} from "react-router-dom";
import PopupAddCode from "./Popups/PopupAddCode";
import PopupSuccessCode from "./Popups/PopupSuccessCode";
import PopupRegister from "./Popups/PopupRegister";


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

    return (
        <main>
            <div className={'main'} id={'main'}>
                <div className={'main-items'}>
                    <div className={'winners-text for-main'}>Летопутешествие с laimon fresh
                        <input
                            type="text"
                            className={'new-code'}
                            onClick={() => openPopup('Register')}
                            maxLength="20"
                            readOnly
                            placeholder=""
                        />
                        {isPopupOpen === 'Register' && (
                            <PopupRegister showPopup={true} closeModal={closePopup} />
                        )}
                        <img className={'bottle-float-left inputcode'} src={inputcode}/>
                        <div className={'winners-text-inputcode'}>
                            <span className={'text-inputcode'}>*найди код под крышкой/ключиком и введи промокод</span>
                        </div>
                    </div>
                    <div className={'bottle-left'}>
                        <img className={'bottle-float-left uptree'} src={uptree}/>
                        <img className={'bottle-float-left'} src={wintohealth}/>
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
                <div className={'winners-text for-faq' } id={'faq'} ref={faqRef}>Часто задаваемые вопросы
                </div>
                <img className={'bottle-float-left fruit'} src={fruit}/>
                <img className={'bottle-float-left example-tree5'} src={tree5555}/>
                <img className={'bottle-float-left example-tree6'} src={tree6666}/>
                <Example/>
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