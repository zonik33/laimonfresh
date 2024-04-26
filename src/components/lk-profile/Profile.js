import React, {useState} from "react";
import lemondots from "../../image/lemon.png";
import dotslemon from "../../image/Dots.svg";
import logo2 from "../../image/logo2.png";
import ControlledAccordions from "../Example";
import Footer from "../Footer";
import tree5555 from "../../image/img_25.png";
import tree6666 from "../../image/img_26.png";
import Example from "../Example";
import {Link} from "react-router-dom";

export default function Profile(props) {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
        document.body.style.overflow = showPopup ? 'auto' : 'hidden';

    };
    const handleImageClick = () => {
        window.location.href = '/'
    };
    return (
        <header>
            <img src={lemondots} alt="Photo" className="left-photo"/>
            <img src={dotslemon} alt="SVG" className="svg-img"/>
            <div className="header" id="header">

                <div className="logo">
                    <Link to="">
                        <img src={logo2} alt="Logo" onMouseOver={() => { /* Обработчик наведения на картинку */
                        }} onClick={handleImageClick}
                        />
                    </Link>
                </div>
                <div className="menu">
                    <nav className="main-menu">
                        <ul>
                            <li className={'li-rules'}><a href={'#'}>Правила</a></li>
                            <li className={'li-ont'}><a href={'#'}>Призы</a></li>
                            <li className={'li-ont'}><a href={'#'}>Победители</a></li>
                            <li className={'li-ont ok'}><a  href={'faq'}>Вопросы/ответы</a></li>
                            <li className={'li-lc'}><a className={'active-block'}href={'#'}>Личный кабинет</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="contact-info">
                    {/*<p>Адрес: Ваш адрес</p>*/}
                    {/*<p>Телефон: Ваш номер телефона</p>*/}
                    {/*<p>Время работы: Ваши рабочие часы</p>*/}
                </div>
                {/*<button onClick={togglePopup} className="btn-leave-request">Оставить заявку</button>*/}
                {/*<Modal closeTimeoutMS={300}*/}
                {/*    className={{*/}
                {/*        base: 'Modal',*/}
                {/*        afterOpen: showPopup ? 'ReactModal__Overlay--after-open' : '',*/}
                {/*        beforeClose: showPopup ? 'ReactModal__Overlay--before-close' : '',*/}
                {/*    }}*/}
                {/*    overlayClassName="Overlay"*/}
                {/*    isOpen={showPopup}*/}
                {/*    onRequestClose={togglePopup}*/}
                {/*    style={{*/}
                {/*        overlay: {*/}
                {/*            backgroundColor: 'rgba(0, 0, 0, 0.5)',*/}
                {/*            zIndex: 9999,*/}
                {/*        },*/}
                {/*        content: {*/}
                {/*            position: 'absolute',*/}
                {/*            top: '50%',*/}
                {/*            left: '50%',*/}
                {/*            transform: 'translate(-50%, -50%)',*/}
                {/*            backgroundColor: '#fff',*/}
                {/*            padding: '20px',*/}
                {/*            borderRadius: '5px',*/}
                {/*            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',*/}
                {/*        },*/}
                {/*    }}*/}
                {/*    contentLabel="Оставить заявку"*/}
                {/*>*/}
                {/*    <input type="text" placeholder="Имя" />*/}
                {/*    <input type="email" placeholder="Email" />*/}
                {/*    <textarea className={'textarea-sms'} placeholder="Сообщение"/>*/}
                {/*    <button>Отправить</button>*/}
                {/*    <button onClick={togglePopup}>Закрыть</button>*/}
                {/*</Modal>*/}
            </div>
            <div className={'accordion-example faq'}>
                <div className={'winners-text for-faq lc'}>Личный кабинет
                </div>
                <div id="wave-container-test-4">
                    <div id="wave-test-4">
                    </div>
                </div>
            </div>
            <Footer/>
        </header>


    );
}