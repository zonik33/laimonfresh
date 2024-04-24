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

export default function Products(props) {
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
        <div className={'products'}>
            <div className={'content-container'}>
                <div className={'winners-text for-slider'}>Продукты, учавствующие в акции
                </div>
                <div className="slider-container">

                    <Slider {...settings}>
                        <div className="how-full44-img">
                            <a href="#" target="_blank"><img
                                src={howFull5}/></a>
                            <span> Тут название продукта </span>
                        </div>
                        <div className="how-full44-img">
                            <a href="#" target="_blank"><img
                                src={howFull5}/></a>
                            <span> Тут название продукта </span>
                        </div>
                        <div className="how-full44-img">
                            <a href="#" target="_blank"><img
                                src={howFull5}/></a>
                            <span> Тут название продукта </span>
                        </div>
                        <div className="how-full44-img">
                            <a href="#" target="_blank"><img
                                src={howFull5}/></a>
                            <span> Тут название продукта </span>
                        </div>
                        <div className="how-full44-img">
                            <a href="#" target="_blank"><img
                                src={howFull5}/></a>
                            <span> Тут название продукта </span>
                        </div>
                        <div className="how-full44-img">
                            <a href="#" target="_blank"><img
                                src={howFull5}/></a>
                            <span> Тут название продукта </span>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}