import React from "react";
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
import wintohealth from '../image/prizes-right.png'

export default function Main(props) {
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
                    </div>
                    <div className={'bottle-left'}>
                        <img className={'bottle-float-left'} src={wintohealth}/>
                    </div>
                    <div className={'main-text-text'}>
                        {/*<div className={'main-text'}> Купите билет и получите гарантированный приз от 585 ЗОЛОТОЙ! Выиграйте медицинскую страховку!</div>*/}
                        <div className={'main-text'}>
                            <div className={'buy-block'}>
                                <a className={'buy-block-a'}>КУПИТЕ</a>
                                <p className={'buy-block-p'}>БИЛЕТ<br></br> с 1.02.2024 <br></br>по 31.03.2024</p>
                            </div>
                            <div className={'take-block'}>
                                <a className={'take-block-a'}>ПОЛУЧИТЕ</a>
                                <p className={'take-block-p'}>Гарантированный подарок от 585 золотой*</p>
                            </div>
                            <div className={'win-block'}>
                                <a className={'win-block-a'}>ВЫИГРАЙТЕ</a>
                                <p className={'win-block-p'}>Медицинскую <br></br>страховку <br></br>каждый день</p>
                            </div>
                        </div>
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
            {/*<Prizes/>*/}
            <Winners/>
            <div id="wave-container-test-3">
                <div id="wave-test-3">
                </div>
            </div>
            <div className={'accordion-example'}>
                <div className={'winners-text for-faq'}>Часто задаваемые вопросы
                </div>
                <Example/>
                <div id="wave-container-test-4">
                    <div id="wave-test-4">
                    </div>
                </div>
            </div>
            {/*<Questions/>*/}
            {/*<Footer/>*/}
            <Footer/>
        </main>
    );
}