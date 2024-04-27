import React from "react";
import Slider from "react-slick";

export default function SliderCodes() {
    let settings = {
        className: 'winnersSearchCodes',
        dots: false,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <p className={'slider-codes-winnersall'}>521321521</p>
            </div>
            <div>
                <p className={'slider-codes-winnersall'}>85234144</p>
            </div>
            <div>
                <p className={'slider-codes-winnersall'}>27575</p>
            </div>
            <div>
                <p className={'slider-codes-winnersall'}>731215</p>
            </div>
        </Slider>
    );
}