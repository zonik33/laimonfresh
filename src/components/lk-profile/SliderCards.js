import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import lfmint from "../../image/img_29.png";

export default function SliderCards() {
    const [numToShow, setNumToShow] = useState(4); // Количество карточек для отображения
    const [openCardsCount, setOpenCardsCount] = useState(1); // Количество открытых карточек
    const [selectedImage, setSelectedImage] = useState(null); // Состояние выбранного изображения

    useEffect(() => {
        setOpenCardsCount(Math.min(numToShow, 10)); // Ограничиваем количество открытых карточек числом 10
    }, [numToShow]);

    const handleImageClick = (index) => {
        setSelectedImage(index);
        setTimeout(() => {
            setSelectedImage(null); // Сброс выбранного изображения после задержки
        }, 1500);
    };

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "6.57vw",
        slidesToShow: 4,
        speed: 500
    };

    const renderCard = (index) => {
        const isBlurred = index >= numToShow;
        const isEnlarged = selectedImage === index;

        return (
            <div className={`slider-cards-winnersall-img ${isBlurred ? 'blurred' : ''}`} key={index}>
                <a onClick={!isBlurred ? () => handleImageClick(index) : null}>
                    <img
                        className={`cards-img ${isEnlarged ? 'enlarge' : ''} ${!isBlurred ? 'cursor-pointer' : ''}`}
                        src={lfmint}
                        alt={`Card ${index + 1}`}
                    />
                </a>
            </div>
        );
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {[...Array(10).keys()].map(index => renderCard(index))}
            </Slider>
            <div className={'text-block-inputcode'}>
                <span className={'text-inputcode'}>всего собрано карточек</span>
                <p className={'text-inputcode cards-prize'}>{openCardsCount} из 10</p>
            </div>
        </div>
    );
}