import React from "react";
import Slider from "react-slick";

export default function SliderCodes() {
    let settings = {
        className: 'winnersSearchCodes',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <p className={'slider-codes-winnersall'}>521321521</p>
            </div>
            <div>
                <p className={'slider-codes-winnersall'}>521321521</p>
            </div>
            <div>
                <p className={'slider-codes-winnersall'}>521321521</p>
            </div>
            <div>
                <p className={'slider-codes-winnersall'}>521321521</p>
            </div>
        </Slider>
    );
}