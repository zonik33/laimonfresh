import React, {useEffect, useRef, useState} from "react";
import lemondots from "../../image/lemon.png";
import dotslemon from "../../image/Dots.svg";
import logo2 from "../../image/logo2.png";
import Footer from "../Footer";
import tree5555 from "../../image/img_25.png";
import tree6666 from "../../image/img_26.png";
import {Link, useLocation, useNavigate} from "react-router-dom";
import winnersprize from "../../image/img_21.png";
import berry from "../../image/img_22.png";
import axios from "axios";
import SliderSearch from "./SliderSearch";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import owntreep from "../../image/img_36.png";
import limeright1 from "../../image/img_35.png";
import inputcode from "../../image/img_2.png";


import PopupRegister from "../Popups/PopupRegister";
import Slider from "react-slick";
import PopupSuccessCode from "../Popups/PopupSuccessCode";
import PopupSuccessPassword from "../Popups/PopupSuccessPassword";
import PopupSuccessEmail from "../Popups/PopupSuccessEmail";
import PopupPasswordNewStepOne from "../Popups/PopupPasswordNewStepOne";
import PopupPasswordNewStepTwo from "../Popups/PopupPasswordNewStepTwo";
import PopupLogin from "../Popups/PopupLogin";
import PopupSuccessRegister from "../Popups/PopupSuccessRegister";
import PopupAddCode from "../Popups/PopupAddCode";
import prizeImage1 from "../../image/img_82.png";
import prizeImage2 from "../../image/img_83.png";
import prizeImage3 from "../../image/img_84.png";
import prizeImage4 from "../../image/img_87.png";
import prizeImage5 from "../../image/img_88.png";
import prizeImage6 from "../../image/img_89.png";
import prizeImage7 from "../../image/img_90.png";
import prizeImage8 from "../../image/img_91.png";
import prizeImage9 from "../../image/img_92.png";
import prizeImage10 from "../../image/img_85.png";
import prizeImage11 from "../../image/img_86.png";


export default function WinnersAll(props) {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
        document.body.style.overflow = showPopup ? 'auto' : 'hidden';

    };
    const handleImageClick = () => {
        window.location.href = '/'
    };
    const [totalPages, setTotalPages] = useState(null); // Используем useState для хранения значения totalPages
    let [currentPage, setCurrentPage] = useState(1); // Используем useState для хранения значения currentPage


    const [winners, setWinners] = useState([]);

    useEffect(() => {
        const fetchWinners = async () => {
            try {
                const response = await axios.get('https://promo.laimonfresh.ch/backend/api/getWinners?type=main');
                const winnersData = response.data.data.rows || [];
                setWinners(winnersData);
            } catch (error) {
                console.error('Error fetching winners data:', error);
            }
        };

        fetchWinners();
    }, []);


    const prizesRef = useRef(null);
    const winnersRef = useRef(null);
    const faqRef = useRef(null);
    const supportRef = useRef(null);

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const activeSection = params.get("section");
    const [weekWinners, setWeekWinners] = useState([]);
    const [week1Winners, setWeek1Winners] = useState([]);
    const [week2Winners, setWeek2Winners] = useState([]);
    const [week3Winners, setWeek3Winners] = useState([]);
    const [week4Winners, setWeek4Winners] = useState([]);
    const [week5Winners, setWeek5Winners] = useState([]);
    const [week6Winners, setWeek6Winners] = useState([]);

    const [currentWeekWinners, setCurrentWeekWinners] = useState([]);
    const handleSliderChange = (currentSlide) => {
        if (currentSlide === 0) {
            setCurrentWeekWinners(weekWinners);
        } else if (currentSlide === 1) {
            setCurrentWeekWinners(week1Winners);
        } else if (currentSlide === 2) {
            setCurrentWeekWinners(week2Winners);
        }
        else if (currentSlide === 3) {
            setCurrentWeekWinners(week3Winners);
        }
        else if (currentSlide === 4) {
            setCurrentWeekWinners(week4Winners);
        }
        else if (currentSlide === 5) {
            setCurrentWeekWinners(week5Winners);
        }

    };
    useEffect(() => {
        const fetchWeekWinners = async () => {
            try {
                const response = await axios.get('https://promo.laimonfresh.ch/backend/api/getWinners?type=week');
                const data = response.data.data.rows || [];
                setWeekWinners(data);

                // Устанавливаем данные weekWinners в currentWeekWinners
                if (data.length > 0) {
                    setCurrentWeekWinners(data);
                }
            } catch (error) {
                console.error('Error fetching week winners:', error);
            }
        };

        fetchWeekWinners();

        const fetchWeek1Winners = async () => {
            try {
                const response = await axios.get('https://promo.laimonfresh.ch/backend/api/getWinners?type=week&week=2');
                const data = response.data.data.rows || [];
                setWeek1Winners(data);
            } catch (error) {
                console.error('Error fetching week 1 winners:', error);
            }
        };
        fetchWeek1Winners();

        const fetchWeek2Winners = async () => {
            try {
                const response = await axios.get('https://promo.laimonfresh.ch/backend/api/getWinners?type=week&week=3');
                const data = response.data.data.rows || [];
                setWeek2Winners(data);
            } catch (error) {
                console.error('Error fetching week 2 winners:', error);
            }
        };
        fetchWeek2Winners();

        const fetchWeek3Winners = async () => {
            try {
                const response = await axios.get('https://promo.laimonfresh.ch/backend/api/getWinners?type=week&week=4');
                const data = response.data.data.rows || [];
                setWeek3Winners(data);
            } catch (error) {
                console.error('Error fetching week 2 winners:', error);
            }
        };
        fetchWeek3Winners();

        const fetchWeek4Winners = async () => {
            try {
                const response = await axios.get('https://promo.laimonfresh.ch/backend/api/getWinners?type=week&week=5');
                const data = response.data.data.rows || [];
                setWeek4Winners(data);
            } catch (error) {
                console.error('Error fetching week 2 winners:', error);
            }
        };
        fetchWeek4Winners();

        const fetchWeek5Winners = async () => {
            try {
                const response = await axios.get('https://promo.laimonfresh.ch/backend/api/getWinners?type=week&week=6');
                const data = response.data.data.rows || [];
                setWeek5Winners(data);
            } catch (error) {
                console.error('Error fetching week 2 winners:', error);
            }
        };
        fetchWeek5Winners();

        const fetchWeek6Winners = async () => {
            try {
                const response = await axios.get('https://promo.laimonfresh.ch/backend/api/getWinners?type=week&week=7');
                const data = response.data.data.rows || [];
                setWeek6Winners(data);
            } catch (error) {
                console.error('Error fetching week 2 winners:', error);
            }
        };
        fetchWeek6Winners();
    }, []);


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
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://promo.laimonfresh.ch/backend/api/getWinners?type=main');
                // Получаем данные из ответа
                const winnersData = response.data.data.rows || [];
                setWinners(winnersData); // Убедитесь, что здесь winnersData устанавливается в качестве массива
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    let settings = {
        className: 'winnersSearch',
        dots: false,
        infinite: false,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: handleSliderChange, // Измените onChange на afterChange
    };
    const prizeImages = {
        1: prizeImage1,
        2: prizeImage2,
        3: prizeImage3,
        4: prizeImage4,
        5: prizeImage5,
        6: prizeImage6,
        7: prizeImage7,
        8: prizeImage8,
        9: prizeImage9,
        10: prizeImage10,
        11: prizeImage11,
    };
    const auth_key = localStorage.getItem('auth_key');
    const isAuthenticated = !!auth_key;
    const openPopupLogin = () => {
        document.getElementById("popup-login").style.display = "block";
        document.body.classList.add("no-scroll");
    };
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
                            <li className={'li-ont'}><a className="smooth active-block" href={'#winners'} onClick={(event) => {
                                closeMenu();
                                handleGoToWinners(event)
                            }}>Победители</a></li>
                            <li className={'li-ont'}><a className="smooth" href={'#faq'}
                                                        onClick={(event) => {
                                                            closeMenu();
                                                            handleGoToFaq(event)
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

            </div>
            <div className={'winners all'} id={'winnersAll'} ref={winnersRef}>
                <div className={'wrapper'}>
                    <div className={'winners-text winners-main center'}>Победители
                    </div>
                    <img className={'bottle-float-left example-tree5 winners'} src={tree5555}/>
                    <img className={'bottle-float-left example-tree6 winners'} src={tree6666}/>
                    <div className={'winners-text winners-main left'}>Победители недели
                    </div>
                    <Slider {...settings} onChange={handleSliderChange}>
                        <div>
                            <p className={'slider-search-winnersall'}>с 15.05 по 21.05</p>
                        </div>
                        <div>
                            <p className={'slider-search-winnersall'}>с 22.05 по 28.05</p>
                        </div>
                        <div>
                            <p className={'slider-search-winnersall'}>с 29.05 по 04.06</p>
                        </div>
                        <div>
                            <p className={'slider-search-winnersall'}>с 05.06 по 11.06</p>
                        </div>
                        <div>
                            <p className={'slider-search-winnersall'}>с 12.06 по 18.06</p>
                        </div>
                        <div>
                            <p className={'slider-search-winnersall'}>с 19.06 по 25.06</p>
                        </div>
                        <div>
                            <p className={'slider-search-winnersall'}>с 26.06 по 02.07</p>
                        </div>
                        <div>
                            <p className={'slider-search-winnersall'}>с 03.07 по 09.07</p>
                        </div>
                        <div>
                            <p className={'slider-search-winnersall'}>с 10.07 по 16.07</p>
                        </div>
                        <div>
                            <p className={'slider-search-winnersall'}>с 17.07 по 23.07</p>
                        </div>
                        <div>
                            <p className={'slider-search-winnersall'}>с 24.07 по 30.07</p>
                        </div>
                        <div>
                            <p className={'slider-search-winnersall'}>с 31.07 по 06.08</p>
                        </div>
                        <div>
                            <p className={'slider-search-winnersall'}>с 07.08 по 13.08</p>
                        </div>
                        <div>
                            <p className={'slider-search-winnersall'}>с 14.08 по 20.08</p>
                        </div>
                        <div>
                            <p className={'slider-search-winnersall'}>с 21.08 по 27.08</p>
                        </div>
                        <div>
                            <p className={'slider-search-winnersall'}>с 28.08 по 31.08</p>
                        </div>

                        {/* Добавьте больше слайдов с датами, если нужно */}
                    </Slider>
                    <div className={'winners-tabs-content'}>
                        <div className={'tab'}>
                        <div className={'tab-inner'}>
                                <div className={'table'}>
                                    <div className={'table-body'}>
                                        <div className={'table-body'}>
                                            <div className="scroll-container">
                                                <div className="scroll-content">
                                                    <div className={'custom-simple-bar2'}>
                                                        <SimpleBar forceVisible="y" autoHide={false} style={{
                                                            maxHeight: 450,
                                                            left: 0,
                                                            top: 0,
                                                            bottom: 0,
                                                            width: '100%',
                                                            position: 'absolute'
                                                        }}>
                                                            <div className={'winners-tabs-content'}>
                                                                {currentWeekWinners.map((winner, index) => (
                                                                    <div key={index} className={'table-body-winners'}>
                                                                        <div
                                                                            className={'head-colm-prize1'}>{index + 1}</div>
                                                                        <div
                                                                            className={'head-colm-name'}>{winner.name}</div>
                                                                        <div
                                                                            className={'head-colm-phone1'}>{winner.code}</div>
                                                                        <div className={'head-colm-date1'}>
                                                                            <div className={'winners-block-img'}>
                                                                                <img className={'winners-prize-img'}
                                                                                     alt={'Приз'}
                                                                                     src={prizeImages[winner.prize_id]}/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </SimpleBar>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={'winners-text winners-main second-second'}>Главный призер
                                            </div>
                                            {/*{winners && winners.length > 0 ? (*/}
                                            {/*    winners.map((winner, index) => (*/}
                                            {/*        <div key={index} className={'table-body-winners down'}>*/}
                                            {/*            <div className={'head-colm-prize1'}>{index + 1}</div>*/}
                                            {/*            <div className={'head-colm-name'}>{winner.name}</div>*/}
                                            {/*            <div className={'head-colm-phone1'}>{winner.code}</div>*/}
                                            {/*            <div className={'head-colm-date1'}>*/}
                                            {/*                /!*<img className={'winners-prize-img'} alt={'Приз'} src={prizeImages[winner.prize_id]}/>*!/*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    ))*/}
                                            {/*) : (*/}
                                            {/*    <div className="table-body-winners down">*/}
                                            {/*        <div className={'head-colm-prize1'}>&nbsp;</div>*/}
                                            {/*        <div className={'head-colm-name'}>&nbsp;</div>*/}
                                            {/*        <div className={'head-colm-phone1'}>&nbsp;</div>*/}
                                            {/*        <div className={'head-colm-date1'}>&nbsp;</div>*/}
                                            {/*    </div>*/}
                                            {/*)}*/}
                                            <div className="table-body-winners down">
                                                <div className={'head-colm-prize1'}>&nbsp;</div>
                                                <div className={'head-colm-name'}>&nbsp;</div>
                                                <div className={'head-colm-phone1'}>&nbsp;</div>
                                                <div className={'head-colm-date1'}>&nbsp;</div>
                                            </div>
                                            <img className={'bottle-float-left example-tree5 faq-down-down'}
                                                 src={owntreep}/>
                                            <img className={'bottle-float-left berry-winners'} src={berry}/>
                                            <img className={'bottle-float-left lime-winners'} src={limeright1}/>


                                        </div>

                                    </div>
                                    <div className={'winners-videos'}>
                                        {/*<a href={'#'}>Показать всех</a>*/}
                                    </div>

                                </div>
                        </div>
                        </div>

                    </div>


                </div>
                <div id="wave-container-test-44">
                    <div id="wave-test-44">
                    </div>
                </div>
            </div>
            <PopupSuccessCode/>
            <PopupSuccessPassword/>
            <PopupSuccessEmail/>
            <PopupPasswordNewStepOne/>
            <PopupPasswordNewStepTwo/>
            <PopupLogin/>
            <PopupSuccessRegister/>
            <Footer/>
        </header>


    )
        ;
}