import React, {useEffect, useRef, useState} from "react";
import million from '../image/img_117.png'
import prizevk from '../image/img_18.png'
import prizeyandex from '../image/img_19.png'
import prizesert from '../image/img_20.png'
import prizeozon from '../image/img_41.png'
import prizekass from '../image/img_42.png'
import prizesm from '../image/img_43.png'
import prizega from '../image/img_44.png'
import prizemv from '../image/img_45.png'
import prizemoc from '../image/img_46.png'
import prizevkcp from '../image/img_66.png'
import prizemerch from '../image/img_67.png'
import prizetreav from '../image/img_68.png'
import prizetreavnew from '../image/cuva.png'
import prizefit from '../image/img_48.png'
import prizewink from '../image/img_49.png'
import prizelit from '../image/img_50.png'
import prizewinknew from '../image/logo-wink.png'
import lefttree from "../image/img_4.png";
import toptreeprod from "../image/img_10.png";
import leftlinehow from "../image/img_8.png";
import gps from "../image/img_5.png";
import prizeLine from "../image/img_37.png";
import twotree from "../image/img_23.png";
import {useLocation} from "react-router-dom";
import Slider from "react-slick";
import {debounce} from "lodash";
import gpsmobile from "../image/gps-mobile.png";
import lefttreebon1 from "../image/img_40.png";
import lfberriesback from "../image/img_115.png";

const HowPrizes = (props) => {
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
    return (
        <div className={'how-prizes'} id={'how-prizes'} ref={prizesRef}>
            <div className={'wrapper-how-prizes'}>
                <div className={'prizes-text-next'}>Какие призы можно выиграть?</div>
                <div className={'prizes-content'}>
                    <img className={'bottle-float-left-mobile-gps bon5'} src={gpsmobile}/>
                    <p className="absolute-text-mobile bon5">Нижний Новгород</p>
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
                                    <p className={'right-p-prizes'}>Мерч <br></br>от Laimon Fresh <br></br><p className={'right-p-prizes-little'}>От 5-ти набранных карточек городов</p></p>
                                </div>
                            </div>
                                <div className={'images'}>
                                    <div className="image-container">
                                        <a><img className={'back-img how-prizes-new'}
                                                src={lfberriesback}/></a>
                                        <img  className={'img-bonus-cuva'} src={prizetreavnew} alt="Image 4"/>
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
                                    <p className={'right-p-prizes-moment'}>Подписка <br></br>Fitmost</p>
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
                        <img className={'bottle-float-left-mobile-gps bon6'} src={gpsmobile}/>
                        <p className="absolute-text-mobile bon6">Калининград</p>
                        <img className={'bottle-float-left-mobile-gps bon7'} src={gpsmobile}/>
                        <p className="absolute-text-mobile bon7">Екатеринбург</p>
                        {/*<div className={'new-block'}>*/}
                        {/*</div>*/}


                    </div>

                </div>
                <img className={'bottle-float-left twotree'} src={twotree}/>
                <img className={'bottle-float-left nv'} src={gps}/>
                <p className="absolute-text nv">Нижний Новгород</p>

            </div>
        </div>
    );
}
export default HowPrizes;