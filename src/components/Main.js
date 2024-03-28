import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../image/slide1.jpg'
import slide2 from '../image/slide2.jpg'
import slide3 from '../image/slide3.jpg'
import slide4 from '../image/slide4.jpg'
import slide5 from '../image/slide5.jpg'
export default function Main (props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Включаем автоматическое переключение слайдов
        autoplaySpeed: 3000 // Устанавливаем интервал смены слайдов в миллисекундах (3 секунды)
    };

    return (
        <main>
            <div className={'main'} id={'main'}>
                <div className={'slider'} id={'slider'}>
                    <Slider {...settings}>
                        <div>
                            <img src= {slide1} alt="Slide 1"/>
                        </div>
                        <div>
                            <img src= {slide2} alt="Slide 2"/>
                        </div>
                        <div>
                            <img src= {slide3} alt="Slide 3"/>
                        </div>
                        <div>
                            <img src= {slide4} alt="Slide 4"/>
                        </div>
                        <div>
                            <img src= {slide5} alt="Slide 5"/>
                        </div>
                        {/* Добавьте другие слайды по аналогии */}
                    </Slider>
                </div>




            </div>
        </main>

    )
}