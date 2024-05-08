import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import lfmint from "../../image/img_69.png";
import lfmint2 from "../../image/img_70.png";
import lfmint3 from "../../image/img_71.png";
import lfmint4 from "../../image/img_72.png";
import lfmint5 from "../../image/img_73.png";
import lfmint6 from "../../image/img_74.png";
import lfmint7 from "../../image/img_75.png";
import lfmint8 from "../../image/img_76.png";
import lfmint9 from "../../image/img_77.png";
import lfmint10 from "../../image/img_78.png";
import lfmintfull from "../../image/img_79.png";
// import lfmintfull2 from "../../image/img_80.png";
// import lfmintfull3 from "../../image/img_81.png";
// import lfmintfull4 from "../../image/img_82.png";
import {debounce} from "lodash";

export default function SliderCards() {
    const [isFullImageOpen, setIsFullImageOpen] = useState(false);
    const [numToShow, setNumToShow] = useState(4); // Количество карточек для отображения
    const [selectedImage, setSelectedImage] = useState(null); // Состояние выбранного изображения

    const [profile, setProfile] = useState(null);
    const imageFiles = [lfmint, lfmint2, lfmint3, lfmint4, lfmint5, lfmint6, lfmint7, lfmint8, lfmint9, lfmint10];
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

        const imageIndex = index % imageFiles.length;

        return (
            <div className={`slider-cards-winnersall-img ${isBlurred ? 'blurred' : ''}`} key={index}>
                <a onClick={!isBlurred ? () => handleImageClick(index) : null}>
                    <img
                        className={`cards-img ${isEnlarged ? 'enlarge' : ''} ${!isBlurred ? 'cursor-pointer' : ''}`}
                        src={imageFiles[imageIndex]}
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