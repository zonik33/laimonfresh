import React from "react";
import Slider from "react-slick";

export default function SliderSearch() {
    let settings = {
        className: 'winnersSearch',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <p className={'slider-search-winnersall'}>с 01.01 по 01.01</p>
            </div>
            <div>
                <p className={'slider-search-winnersall'}>с 01.01 по 01.01</p>
            </div>
            <div>
                <p className={'slider-search-winnersall'}>с 01.01 по 01.01</p>
            </div>
            <div>
                <p className={'slider-search-winnersall'}>с 01.01 по 01.01</p>
            </div>
            <div>
                <p className={'slider-search-winnersall'}>с 01.01 по 01.01</p>
            </div>
            <div>
                <p className={'slider-search-winnersall'}>с 01.01 по 01.01</p>
            </div>
        </Slider>
    );
}