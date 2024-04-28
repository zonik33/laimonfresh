import React, {useRef, useState} from "react";
import lemondots from "../../image/lemon.png";
import dotslemon from "../../image/Dots.svg";
import logo2 from "../../image/logo2.png";
import Footer from "../Footer";
import {Link, useNavigate} from "react-router-dom";
import million from "../../image/img_17.png";
import inputcode from "../../image/img_2.png";
import prizevk from "../../image/img_18.png";
import prizeyandex from "../../image/img_19.png";
import prizesert from "../../image/img_20.png";
import lcexit from "../../image/img_30.png";
import SliderCodes from "./SliderCodes";
import SliderCards from "./SliderCards";
import PopupRegister from "../Popups/PopupRegister";
import PopupLogin from "../Popups/PopupLogin";
import PopupAddCode from "../Popups/PopupAddCode";
import PopupPasswordNewStepOne from "../Popups/PopupPasswordNewStepOne";
import PopupPasswordNewStepTwo from "../Popups/PopupPasswordNewStepTwo";
import PopupSuccessEmail from "../Popups/PopupSuccessEmail";
import PopupSuccessCode from "../Popups/PopupSuccessCode";
import PopupSuccessPassword from "../Popups/PopupSuccessPassword";
import PopupFail from "../Popups/PopupFail";

export default function Profile(props) {
    const [isPopupOpen, setIsPopupOpen] = useState(null);
    const openPopup = (popupName) => {
        setIsPopupOpen(popupName);
        document.body.classList.add("no-scroll");
    };
    function openPopup3() {
        document.getElementById("popup-password-step-two").style.display = "block";
        document.body.classList.add("no-scroll");
    }

    const closePopup = () => {
        setIsPopupOpen(false);
        document.body.classList.remove("no-scroll");
    };


    const auth_key = localStorage.getItem('auth_key');
    const isAuthenticated = !!auth_key;
    const handleOnClick = () => {

            document.body.classList.add("no-scroll");
            // document.body.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
            // document.documentElement.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
    };
    const handleOnClickCode = () => {

        document.body.classList.add("no-scroll");
        // document.body.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
        // document.documentElement.style.overflow = "hidden"; // Разблокируйте прокрутку страницы
    };



    // const togglePopup = () => {
    //     setShowPopup(!showPopup);
    //     document.body.style.overflow = showPopup ? 'auto' : 'hidden';
    //
    // };
    const handleImageClick = () => {
        window.location.href = '/'
    };
    const navigate = useNavigate();

    const handleGoToPrizes = (event) => {
        event.preventDefault();
        navigate("/?section=how-prizes"); // Передаем параметр "section" в URL
    };

    const handleGoToWinners = (event) => {
        event.preventDefault();
        navigate("/?section=winners"); // Передаем параметр "section" в URL
    };
    const handleGoToFaq = (event) => {
        event.preventDefault();
        navigate("/?section=faq"); // Передаем параметр "section" в URL
    };
    const [activeSection, setActiveSection] = useState(null);
    const prizesRef = useRef(null);
    const winnersRef = useRef(null);
    const faqRef = useRef(null);
    const supportRef = useRef(null);
    const handleClick = () => {
        window.location.href = '/'; // замените ссылкой, на которую вы хотите перейти
    };
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
                <div className="menu">
                    <nav className="main-menu">
                        <ul>
                            <li className={'li-rules'}><a href={'#'}> Правила</a></li>
                            <li className={'li-ont'}><a className="smooth" href={'#how-prizes'} onClick={(event) => {
                                handleGoToPrizes(event)
                            }}>Призы</a></li>
                            <li className={'li-ont'}><a className="smooth" href={'#winners'} onClick={(event) => {
                                handleGoToWinners(event)
                            }}>Победители</a></li>
                            <li className={'li-ont'}><a className="smooth" href={'#faq'} onClick={(event) => {
                                handleGoToFaq(event)
                            }}>Вопросы/ответы</a></li>
                            <li className={'li-lc'}><a className={'active-block'} href={'profile'}>Личный кабинет</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="contact-info">
                    {/*<p>Адрес: Ваш адрес</p>*/}
                    {/*<p>Телефон: Ваш номер телефона</p>*/}
                    {/*<p>Время работы: Ваши рабочие часы</p>*/}
                </div>

            </div>
            <div className={'accordion-example faq lc'}>
                <div className={'winners-text for-faq lc'}>Здравствуйте, Александр Ф.
                    <div>
                        <img className={'bottle-float-left exit-lc'} onClick={handleClick} src={lcexit}/>
                        <p className={'bottle-float-left exit-lc-text'}>выйти</p>

                    </div>
                </div>
                <div className={'lc-text lc-settings'}>
                    <a onClick={openPopup3}>изменить свои данные</a>
                </div>
                <div className={'prizes-content lc'}>
                    <div className={'left lc'}>
                        <p className={'left-p-name left-down lc checks'}>Мои коды</p>
                        <SliderCodes/>
                    </div>
                    <div className={'right lc'}>
                        <div className={'winners-text for-main lc'}>
                            <p className={'right-p-name left-down lc'}>Зарегистрировать новый код</p>
                            <input
                                type="text"
                                className={'new-code'}
                                onClick={() => openPopup('AddCode')}
                                maxLength="20"
                                readOnly
                                placeholder=""
                            />
                            {isPopupOpen === 'AddCode' && (
                                <PopupAddCode showPopup={true} closeModal={closePopup} />
                            )}

                            <img className={'bottle-float-left inputcode'} src={inputcode}/>
                            <div className={'winners-text-inputcode lc'}>
                                <span
                                    className={'text-inputcode lc'}>*найди код под крышкой/ключиком и введи промокод</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'winners-text lc-text-profile'}>
                    <p className={'lc-text-profile-d'}>Твоё летопутешествие с Laimon Fresh</p>
                    <p
                        className={'lc-text-profile-d-down'}>Соберите все 10 карточек городов, что бы принять участие
                        в розыгрыше главного приза. <br></br>1 код = 1 карточка</p>

                    <SliderCards/>

                </div>
            </div>
            <div id="wave-container-test-22">
                <div id="wave-test-22">
                </div>
            </div>
            <div className={'how-prizes'} id={'how-prizes'}>
                <div className={'wrapper-how-prizes'}>
                    <div className={'prizes-text-next'}>Какие призы возможно выиграть?</div>
                    <div className={'prizes-content'}>
                        <div className={'left'}>
                            <img className={'million'} src={million} alt="Million"/>
                            <p className={'right-p-name left-down'}>Главный приз</p>
                            <p className={'left-p-name-low'}>собери карточки 10 городов и участвуй в розыгрыше главного
                                приза</p>
                        </div>
                        <div className={'right'}>
                            <p className={'right-p-name'}>еженедельные призы:</p>
                            <div className={'images'}>
                                <div className="image-container">
                                    <img src={prizevk} alt="Image"/>
                                    <p className={'right-p-prizes'}>Подписка <br></br>VK Music</p>
                                </div>
                                <div className="image-container">
                                    <img src={prizeyandex} alt="Image 2"/>
                                    <p className={'right-p-prizes'}>Подписка <br></br>Яндекс Плюс</p>
                                </div>
                                <div className="image-container">
                                    <img src={prizesert} alt="Image 3"/>
                                    <p className={'right-p-prizes'}>Сертификат <br></br>на 1000р</p>
                                </div>
                            </div>
                            <p className={'right-p-name down'}>МОМЕНТАЛЬНЫЕ ПРИЗЫ</p>
                            <div className={'new-block'}>
                            </div>
                        </div>

                    </div>
                    <p className="absolute-text nv">Нижний новгород</p>

                </div>
            </div>
            <div id="wave-container-test-44">
                <div id="wave-test-44">
                </div>
            </div>
            <PopupSuccessCode/>
            <PopupSuccessPassword/>
            <PopupSuccessEmail/>
            <PopupPasswordNewStepOne/>
            <PopupPasswordNewStepTwo/>
            <PopupLogin/>
            <Footer/>
        </header>


    );
}