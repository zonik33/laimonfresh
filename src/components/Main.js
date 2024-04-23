import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Example from "./Example";
import "react-accessible-accordion/dist/fancy-example.css";
import Footer from "./Footer";
import Winners from "./Winners";

export default function Main(props) {
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
        <main>
            <div className={'main'} id={'main'}>
                <div className={'main-items'}></div>
                <div className={'content-container'}>
                    <div className={'accordion-example'}>
                        <Example />
                    </div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <h3>1</h3>
                            </div>
                            <div>
                                <h3>2</h3>
                            </div>
                            <div>
                                <h3>3</h3>
                            </div>
                            <div>
                                <h3>4</h3>
                            </div>
                            <div>
                                <h3>5</h3>
                            </div>
                            <div>
                                <h3>6</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            {/*<How/>*/}
            {/*<Prizes/>*/}
            <Winners/>
            {/*<Questions/>*/}
            {/*<Footer/>*/}
            <Footer />
        </main>
    );
}