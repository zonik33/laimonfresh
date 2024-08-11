import React, {useEffect, useRef, useState} from "react";
import lemondots from "../../image/lemon.png";
import dotslemon from "../../image/Dots.svg";
import logo2 from "../../image/logo2.png";
import Footer from "../Footer";
import {Link, useNavigate} from "react-router-dom";
import million from '../../image/img_117.png'
import inputcode from "../../image/img_118.png";
import prizevk from "../../image/img_18.png";
import prizeyandex from "../../image/img_19.png";
import prizesert from "../../image/img_20.png";
import lcexit from "../../image/img_52.png";
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
import berry from "../../image/img_22.png";
import tree5555 from "../../image/img_25.png";
import owntree from "../../image/img_34.png";
import limeright from "../../image/img_12.png";
import Slider from "react-slick";
import prizeozon from "../../image/img_41.png";
import prizekass from "../../image/img_42.png";
import prizesm from "../../image/img_43.png";
import prizega from "../../image/img_44.png";
import prizemv from "../../image/img_45.png";
import prizemoc from "../../image/img_46.png";
import prizevkcp from "../../image/img_66.png";
import prizefit from "../../image/img_48.png";
import prizewink from "../../image/img_49.png";
import prizelit from "../../image/img_50.png";
import {debounce} from "lodash";
import prizemerch from "../../image/img_67.png";
import prizetreav from "../../image/img_68.png";
import lfberriesback from "../../image/img_115.png";
import prizewinknew from "../../image/logo-wink.png";
import prizetreavnew from "../../image/cuva.png";
import PopupU from "../Popups/PopupU";

export default function Profile(props) {
    const [isPopupOpen, setIsPopupOpen] = useState(null);
    const auth_key = localStorage.getItem('auth_key');
    const isAuthenticated = !!auth_key;
    const openPopup = (popupName) => {
        setIsPopupOpen(popupName);
        document.body.classList.add("no-scroll");
    };
    const openPopupLogin = () => {
        document.getElementById("popup-login").style.display = "block";
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
    const selectChoose = (text) => {
        // Удалить токен из localStorage
        localStorage.removeItem('auth_key');

        // Перенаправить на главную страницу
        window.location.href = '/';
    };

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
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem('profile'));
        setProfile(storedProfile);
    }, []);

    let settingsMoment = {
        className: 'prizesShowMoment',
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

    };
    const settingsMobileMoment = {
        className: 'prizesShowMoment',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    let settings = {
        className: 'prizesShow',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    const settingsMobile = {
        className: 'prizesShow',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const [sliderSettingsMoment, setSliderSettingsMoment] = useState(settingsMoment);
    const handleResizeMoment = debounce(() => {
        if (window.innerWidth <= 767) {
            setSliderSettingsMoment(settingsMobileMoment);
        } else {
            setSliderSettingsMoment(settingsMoment);
        }
    }, 200); // Debounce time in milliseconds
    useEffect(() => {
        window.addEventListener("resize", handleResizeMoment);
        return () => window.removeEventListener("resize", handleResizeMoment);
    }, [settingsMobileMoment, settingsMoment, handleResizeMoment]);


    const [sliderSettings, setSliderSettings] = useState(settings);
    const handleResize = debounce(() => {
        if (window.innerWidth <= 767) {
            setSliderSettings(settingsMobile);
        } else {
            setSliderSettings(settings);
        }
    }, 200); // Debounce time in milliseconds

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [settingsMobile, settings, handleResize]);
    const currentDomain = window.location.origin;

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
                            <li className={'li-rules'}><a href={`${currentDomain}/rules.pdf`}
                                                          target="_blank"> Правила</a></li>
                            <li className={'li-ont'}><a className="smooth" href={'#how-prizes'} onClick={(event) => {
                                closeMenu();
                                handleGoToPrizes(event)
                            }}>Призы</a></li>
                            <li className={'li-ont'}><a className="smooth" href={'#winners'} onClick={(event) => {
                                closeMenu();
                                handleGoToWinners(event)
                            }}>Победители</a></li>
                            <li className={'li-ont'}><a className="smooth" href={'#faq'}
                                                        onClick={(event) => {
                                                            closeMenu();
                                                            handleGoToFaq(event)
                                                        }}>Вопросы/ответы</a></li>
                            <li className={'li-lc'}><a className={'active-block'} href={'profile'}>Личный кабинет</a>
                            </li>
                            <li className={'li-lc shadows-li'} onClick={selectChoose}><a className={'smooth'}>Выйти</a>
                            </li>
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
                <div
                    className={'winners-text for-faq lc'}>Здравствуйте, {profile && profile.profile && profile.profile.name}
                    <div>
                        <img className={'bottle-float-left exit-lc'} onClick={selectChoose} src={lcexit}/>
                        <p className={'bottle-float-left exit-lc-text'}>выйти</p>

                    </div>
                </div>
                {/*<div className={'lc-text lc-settings'}>*/}
                {/*    <a onClick={openPopup3}>изменить свои данные</a>*/}
                {/*</div>*/}
                <div className={'prizes-content lc'}>
                    <div className={'left lc'}>
                        <p className={'left-p-name left-down lc checks'}>Мои коды</p>
                        <SliderCodes/>
                    </div>
                    {/*<img className={'bottle-float-left berry-profile'} src={berry}/>*/}
                    <img className={'bottle-float-left example-tree5 profile'} src={tree5555}/>
                    <div className={'right lc'}>
                        <div className={'winners-text for-main lc'}>
                            <p className={'right-p-name left-down lc'}>Зарегистрировать новый код</p>
                            <input
                                type="text"
                                className={'new-code-profile profile-mobile'}
                                onClick={() => openPopup(isAuthenticated ? 'AddCode' : openPopupLogin)}
                                maxLength="20"
                                readOnly
                                placeholder=""
                            />
                            {isPopupOpen === 'AddCode' && isAuthenticated &&
                                <PopupU showPopup={true} closeModal={closePopup}/>}

                            <img className={'bottle-float-left inputcode profile-mobile'} src={inputcode}/>
                            <div className="main-promo-text-input-new-mobile">ввести промокод*</div>
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
                        className={'lc-text-profile-d-down'}>Соберите все 10 карточек городов, чтобы принять участие
                        в розыгрыше главного приза. <br></br>1 код = 1 карточка</p>

                    <SliderCards/>

                </div>
            </div>
            <div id="wave-container-test-22">
                <div id="wave-test-22">
                </div>
            </div>
            <img className={'bottle-float-left example-tree5 profile-down'} src={owntree}/>
            <img className={'bottle-float-left lime-profile'} src={limeright}/>
            <div className={'how-prizes'} id={'how-prizes'}>
                <div className={'wrapper-how-prizes'}>
                    <div className={'prizes-text-next'}>Какие призы можно выиграть?</div>
                    <div className={'prizes-content'}>
                        <div className={'left'}>
                            <img className={'million'} src={million} alt="Million"/>
                            <p className={'right-p-name left-down'}>Главный приз</p>
                            <p className={'left-p-name-low'}>собери карточки 10 городов и участвуй в розыгрыше главного
                                приза</p>
                        </div>
                        <div className={'right'}>
                            <p className={'right-p-name'}>еженедельные призы:</p>
                            <Slider {...sliderSettings}>
                                <div className={'images'}>
                                    <div className="image-container">
                                        <img src={prizevk} alt="Image"/>
                                        <p className={'right-p-prizes'}>Подписка <br></br>VK Music</p>
                                    </div>
                                </div>
                                <div className={'images'}>
                                    <div className="image-container">
                                        <img src={prizeyandex} alt="Image 2"/>
                                        <p className={'right-p-prizes'}>Подписка <br></br>Яндекс Плюс</p>
                                    </div>
                                </div>
                                <div className={'images'}>
                                    <div className="image-container">
                                        <img src={prizeozon} alt="Image 3"/>
                                        <p className={'right-p-prizes'}>Сертификат <br></br>на 1000р <br></br>ОЗОН</p>
                                    </div>
                                </div>
                                <div className={'images'}>
                                    <div className="image-container">
                                        <img src={prizemerch} alt="Image 4"/>
                                        <p className={'right-p-prizes'}>Мерч <br></br>от Laimon Fresh <br></br><p
                                            className={'right-p-prizes-little'}>От 5-ти набранных карточек городов</p>
                                        </p>
                                    </div>
                                </div>
                                <div className={'images'}>
                                    <div className="image-container">
                                        <a><img className={'back-img how-prizes-new'}
                                                src={lfberriesback}/></a>
                                        <img className={'img-bonus-cuva'} src={prizetreavnew} alt="Image 4"/>
                                        <p className={'right-p-prizes'}>Сертификат <br></br>на путешествие <br></br><p
                                            className={'right-p-prizes-little'}>Приз конкурса <br></br>от блогеров</p>
                                        </p>
                                    </div>
                                </div>
                                <div className={'images'}>
                                    <div className="image-container">
                                        <img src={prizekass} alt="Image 4"/>
                                        <p className={'right-p-prizes'}>Сертификат <br></br>на 1000р <br></br>Кассир
                                        </p>
                                    </div>
                                </div>
                                <div className={'images'}>
                                    <div className="image-container">
                                        <img src={prizesm} alt="Image 5"/>
                                        <p className={'right-p-prizes'}>Сертификат <br></br>на 1000р <br></br>Спортмастер
                                        </p>
                                    </div>
                                </div>
                                <div className={'images'}>
                                    <div className="image-container">
                                        <img src={prizega} alt="Image 6"/>
                                        <p className={'right-p-prizes'}>Сертификат <br></br>на 1000р <br></br>Золотое
                                            Яблоко
                                        </p>
                                    </div>
                                </div>
                                <div className={'images'}>
                                    <div className="image-container">
                                        <img src={prizemv} alt="Image 7"/>
                                        <p className={'right-p-prizes'}>Сертификат <br></br>на 1000р <br></br>М
                                            видео
                                        </p>
                                    </div>
                                </div>
                                <div className={'images'}>
                                    <div className="image-container">
                                        <img src={prizemoc} alt="Image 8"/>
                                        <p className={'right-p-prizes'}>Сертификат <br></br>на 1000р <br></br>Мосигра
                                        </p>
                                    </div>
                                </div>
                                <div className={'images'}>
                                    <div className="image-container">
                                        <img src={prizevkcp} alt="Image 9"/>
                                        <p className={'right-p-prizes'}>VK капсула <br></br>нео</p>
                                    </div>
                                </div>
                            </Slider>
                            <p className={'right-p-name down'}>МОМЕНТАЛЬНЫЕ ПРИЗЫ:</p>
                            <Slider {...sliderSettingsMoment}>
                                <div className={'images-moment'}>
                                    <div className="image-container-moment">
                                        <img src={prizefit} alt="Image"/>
                                        <p className={'right-p-prizes-moment'}>Подписка <br></br>Фитмост</p>
                                    </div>
                                </div>
                                <div className={'images-moment'}>
                                    <div className="image-container-moment">
                                        <a><img className={'back-img how-prizes'}
                                                src={lfberriesback}/></a>
                                        <img className={'img-bonus'} src={prizewinknew} alt="Image 2"/>
                                        <p className={'right-p-prizes-moment'}>Подписка <br></br>WINK</p>
                                    </div>
                                </div>
                                <div className={'images-moment'}>
                                    <div className="image-container-moment">

                                        <img src={prizelit} alt="Image 3"/>
                                        <p className={'right-p-prizes-moment'}>Подписка <br></br>Литрес</p>
                                    </div>
                                </div>
                            </Slider>
                            {/*<div className={'new-block'}>*/}
                            {/*</div>*/}


                        </div>

                    </div>
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
            <PopupAddCode/>
            <PopupU/>
        </header>


    );
}