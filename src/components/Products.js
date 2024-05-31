import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Example from "./Example";
import "react-accessible-accordion/dist/fancy-example.css";
import Footer from "./Footer";
import Winners from "./Winners";
import lfmint from '../image/lf-mint.png';
import lfmango from '../image/img_58.png';
import lfberries from '../image/lf-berries.png';
import lfberries10 from '../image/LF_Berry_10.png';
import lfberries15 from '../image/LF_Berry_15.png';
import lfmango10 from '../image/LF_Mango_10.png';
import lfmango15 from '../image/LF_Mango_15.png';
import lfpear10 from '../image/LF_Pear_10.png';
import lfpear15 from '../image/LF_Pear_15.png';
import lfmint10 from '../image/LF_Mint_10.png';
import lfmint15 from '../image/LF_Mint_15.png';
import lfmint33 from '../image/LP-mint-33.png';
import lfberr05 from '../image/LF_Berry_05.png';
import lfpear05 from '../image/LF_Pear_05.png';
import lfpear33 from '../image/LP-pear-33.png';
import lfmango33 from '../image/LP-mango-33.png';
import lfberr33 from '../image/LP-berr-33..png';
import lfberriesback from '../image/img_114.png';
import lfpear from '../image/lf-pear.png';
import How from "./How";
import uptree from "../image/img_3.png";
import wintohealth from "../image/img.png";
import wintohealth2 from "../image/img_1.png";
import gps from "../image/img_5.png";
import toptreeprod from "../image/img_10.png";
import downtreeprod from "../image/img_11.png";
import leftarrow from "../image/img_62.png";
import rightarrow from "../image/img_63.png";
import lefttree from "../image/img_4.png";
import nature from "../image/img_6.png";
import bigline from "../image/img_7.png";
import limeright from "../image/img_12.png";
import { debounce } from 'lodash';

export default function Products(props) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5555,
        pauseOnHover: true,
    };
    const settingsMobile = {
        className: 'mobileProducts',
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5555,
        pauseOnHover: true
    };
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
        <div className={'products'}>
            <div className={'content-container'}>
                <div className={'main-promo-block-test'}>Соберите все 10 карточек городов,
                    <br/>чтобы принять участие
                    <br/>в розыгрыше главного приза!
                    <br/>1 код = 1 карточка
                </div>
                <div className={'winners-text for-slider'}>Продукты, участвующие в акции
                </div>
                <div className="slider-container">

                    <Slider {...sliderSettings}>
                        <div className="how-full44-img">
                            <a><img className={'back-img'}
                                    src={lfberriesback}/></a>
                            <a><img className={'test-img img33'}
                                    src={lfmint33}/></a>
                            <span className={'lf-text'}> Laimon Fresh 0.33 л </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img className={'back-img'}
                                    src={lfberriesback}/></a>
                            <a><img className={'test-img img33'}
                                    src={lfmango33}/></a>
                            <span className={'lf-text'}> Laimon Fresh Манго 0.33 л </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img className={'back-img'}
                                    src={lfberriesback}/></a>
                            <a><img className={'test-img img33'}
                                    src={lfberr33}/></a>
                            <span className={'lf-text'}> Laimon Fresh Ягоды 0.33 л </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img className={'back-img'}
                                    src={lfberriesback}/></a>
                            <a><img className={'test-img img33'}
                                    src={lfpear33}/></a>
                            <span className={'lf-text'}> Laimon Fresh Груша 0.33 л </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img
                                src={lfmint}/></a>
                            <span className={'lf-text'}> Laimon Fresh 0.5 л </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img
                                src={lfmango}/></a>
                            <span className={'lf-text'}> Laimon Fresh Манго 0.5 л </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img className={'back-img'}
                                    src={lfberriesback}/></a>
                            <a><img className={'test-img for-05'}
                                    src={lfberr05}/></a>
                            <span className={'lf-text'}> Laimon Fresh Ягоды 0.5 л </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img className={'back-img'}
                                    src={lfberriesback}/></a>
                            <a><img className={'test-img for-05'}
                                    src={lfpear05}/></a>
                            <span className={'lf-text'}> Laimon Fresh Груша 0.5 л </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img className={'back-img'}
                                    src={lfberriesback}/></a>
                            <a><img className={'test-img'}
                                    src={lfmint10}/></a>
                            <span className={'lf-text'}> Laimon Fresh <br></br>1 л </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img className={'back-img'}
                                    src={lfberriesback}/></a>
                            <a><img className={'test-img'}
                                    src={lfmango10}/></a>
                            <span className={'lf-text'}> Laimon Fresh Манго 1 л </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img className={'back-img'}
                                    src={lfberriesback}/></a>
                            <a><img className={'test-img'}
                                    src={lfberries10}/></a>
                            <span className={'lf-text'}> Laimon Fresh Ягоды 1 л </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img className={'back-img'}
                                    src={lfberriesback}/></a>
                            <a><img className={'test-img'}
                                    src={lfpear10}/></a>
                            <span className={'lf-text'}> Laimon Fresh Груша 1 л </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img className={'back-img'}
                                    src={lfberriesback}/></a>
                            <a><img className={'test-img'}
                                    src={lfmint15}/></a>
                            <span className={'lf-text'}> Laimon Fresh 1.5 л </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img className={'back-img'}
                                    src={lfberriesback}/></a>
                            <a><img className={'test-img'}
                                    src={lfmango15}/></a>
                            <span className={'lf-text'}> Laimon Fresh Манго 1.5 л </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img className={'back-img'}
                                    src={lfberriesback}/></a>
                            <a><img className={'test-img'}
                                    src={lfberries15}/></a>
                            <span className={'lf-text'}> Laimon Fresh Ягоды 1.5 л </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img className={'back-img'}
                                    src={lfberriesback}/></a>
                            <a><img className={'test-img'}
                                    src={lfpear15}/></a>
                            <span className={'lf-text'}> Laimon Fresh Груша 1.5 л </span>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className={'bottle-left'}>
                <img className={'bottle-float-left uptree-prod'} src={uptree}/>
                <img className={'bottle-float-left gps-down-product'} src={gps}/>
                <img className={'bottle-float-left gps-top-product'} src={gps}/>
                <img className={'bottle-float-left down-tree-prod'} src={downtreeprod}/>
                <img className={'bottle-float-left top-tree-prod'} src={toptreeprod}/>
                <img className={'bottle-float-left lime'} src={limeright}/>
            </div>
            <p className="absolute-text prod">Санкт-Петербург</p>
        </div>
    )
}