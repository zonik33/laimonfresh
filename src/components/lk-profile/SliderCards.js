import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import lfmint from "../../image/img_29.png";
import lfmintfull from "../../image/img_31.png";

export default function SliderCards() {
    const [isFullImageOpen, setIsFullImageOpen] = useState(false);
    const [numToShow, setNumToShow] = useState(4); // Количество карточек для отображения
    const [openCardsCount, setOpenCardsCount] = useState(1); // Количество открытых карточек
    const [selectedImage, setSelectedImage] = useState(null); // Состояние выбранного изображения

    useEffect(() => {
        setOpenCardsCount(Math.min(numToShow, 10)); // Ограничиваем количество открытых карточек числом 10
    }, [numToShow]);

    const handleImageClick = (index) => {
        if (!isFullImageOpen) {
            setIsFullImageOpen(true);
            setSelectedImage(index);
            document.body.classList.add("no-scroll");
        }
    };

    const handleFullImageClose = () => {
        setIsFullImageOpen(false);
        setSelectedImage(null);
        document.body.classList.remove("no-scroll");
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
            {isFullImageOpen && (
                <div className="full-image-container">
                    <div className={`full-image-background ${isFullImageOpen ? 'active' : ''}`}
                         onClick={handleFullImageClose}></div>
                    <img
                        className="full-image"
                        src={lfmintfull}
                        alt="Full Sized Image"
                    />
                </div>
            )}
            <div className={'text-block-inputcode'}>
                <span className={'text-inputcode'}>всего собрано карточек</span>
                <p className={'text-inputcode cards-prize'}>{openCardsCount} из 10</p>
            </div>
        </div>
    );
}