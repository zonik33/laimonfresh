import React from "react";
import Slider from "react-slick";

export default function SliderSearch() {
    let settings = {
        className: 'winnersSearch',
        dots: false,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <p className={'slider-search-winnersall'}>с 01.01 по 01.01</p>
            </div>
            <div>
                <p className={'slider-search-winnersall'}>с 02.01 по 02.01</p>
            </div>
            <div>
                <p className={'slider-search-winnersall'}>с 03.01 по 03.01</p>
            </div>
            <div>
                <p className={'slider-search-winnersall'}>с 04.01 по 04.01</p>
            </div>
            <div>
                <p className={'slider-search-winnersall'}>с 05.01 по 05.01</p>
            </div>
            <div>
                <p className={'slider-search-winnersall'}>с 06.01 по 06.01</p>
            </div>
        </Slider>
    );
}