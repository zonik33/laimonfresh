import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Example from "./Example";
import "react-accessible-accordion/dist/fancy-example.css";
import Footer from "./Footer";
import Winners from "./Winners";
import lfmint from '../image/lf-mint.png';
import lfmango from '../image/lf-mango.png';
import lfberries from '../image/lf-berries.png';
import lfpear from '../image/lf-pear.png';
import How from "./How";
import uptree from "../image/img_3.png";
import wintohealth from "../image/img.png";
import wintohealth2 from "../image/img_1.png";
import gps from "../image/img_5.png";
import toptreeprod from "../image/img_10.png";
import downtreeprod from "../image/img_11.png";
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
        pauseOnHover: true
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
                <div className={'winners-text for-slider'}>Продукты, учавствующие в акции
                </div>
                <div className="slider-container">

                    <Slider {...sliderSettings}>
                        <div className="how-full44-img">
                            <a><img
                                src={lfmint}/></a>
                            <span className={'lf-text'}> Laimon Fresh Mint </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img
                                src={lfmango}/></a>
                            <span className={'lf-text'}> Laimon Fresh Mango </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img
                                src={lfberries}/></a>
                            <span className={'lf-text'}> Laimon Fresh Berries </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img
                                src={lfpear}/></a>
                            <span className={'lf-text'}> Laimon Fresh Pear </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img
                                src={lfmint}/></a>
                            <span className={'lf-text'}> Laimon Fresh Mint </span>
                        </div>
                        <div className="how-full44-img">
                            <a><img
                                src={lfmango}/></a>
                            <span className={'lf-text'}> Laimon Fresh Mango </span>
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