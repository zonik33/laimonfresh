import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import lfmint from "../../image/img_29.png";
import lfmintfull from "../../image/img_31.png";
import {debounce} from "lodash";

export default function SliderCards() {
    const [isFullImageOpen, setIsFullImageOpen] = useState(false);
    const [numToShow, setNumToShow] = useState(4); // Количество карточек для отображения
    const [selectedImage, setSelectedImage] = useState(null); // Состояние выбранного изображения

    const [profile, setProfile] = useState(null);
    let displayCodes;

    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem('profile'));
        setProfile(storedProfile);
    }, []);

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
    const settingsMobile = {
        className: 'center',
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

    const renderCard = (index) => {
        const countCodes = (profile && profile.countCodes) || 0;
        displayCodes = Math.min(countCodes, 10);

        const isBlurred = index >= displayCodes;
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
            <Slider {...sliderSettings}>
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
                <p className={'text-inputcode cards-prize'}>{displayCodes} из 10</p>
            </div>
        </div>
    );
}