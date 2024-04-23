import React, { useState } from 'react';
import Modal from 'react-modal';
import logo1 from '../image/logo1.png';
import lemondots from '../image/lemon.png';
import dotslemon from '../image/Dots.svg';

export default function Header(props) {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
        document.body.style.overflow = showPopup ? 'auto' : 'hidden';

    };

    return (
        <header>
            <img src={lemondots} alt="Photo" className="left-photo"/>
            <img src={dotslemon} alt="SVG" className="svg-img"/>
            <div className="header" id="header">

                <div className="logo">
                    <img src={logo1} alt="Logo"/>
                </div>
                <div className="menu">
                    <nav className="main-menu">
                        <ul>
                            <li>Правила</li>
                            <li>Призы</li>
                            <li>Победители</li>
                            <li>Вопросы</li>
                            <li>Личный кабинет</li>
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
        </header>
    );
}