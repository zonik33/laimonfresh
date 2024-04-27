import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import lfmint from "../../image/img_29.png";

export default function SliderCards() {
    const [numToShow, setNumToShow] = useState(1); // Количество карточек для отображения
    const [openCardsCount, setOpenCardsCount] = useState(1); // Количество открытых карточек

    useEffect(() => {
        setOpenCardsCount(Math.min(numToShow, 10)); // Ограничиваем количество открытых карточек числом 10
    }, [numToShow]);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "6.57vw",
        slidesToShow: 4,
        speed: 500
    };

    const renderCard = (index) => {
        if (index < numToShow) {
            return (
                <div className={'slider-cards-winnersall-img'} key={index}>
                    <a><img className={'cards-img'} src={lfmint} alt={`Card ${index + 1}`} /></a>
                </div>
            );
        } else {
            return (
                <div className={'slider-cards-winnersall-img blurred'} key={index}>
                    <a><img className={'cards-img'} src={lfmint} alt={`Blurred Card ${index + 1}`} /></a>
                </div>
            );
        }
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {[...Array(10).keys()].map(index => renderCard(index))} {/* Генерация карточек */}
            </Slider>
            <div className={'text-block-inputcode'}>
            <span className={'text-inputcode'}>всего собрано карточек</span>
            <p className={'text-inputcode'}>{openCardsCount} из 10</p> {/* Отображение количества открытых карточек */}
            </div>
        </div>
    );
}