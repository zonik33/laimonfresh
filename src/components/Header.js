import React, {useState} from 'react';
import logo2 from '../image/logo2.png';
import lemondots from '../image/lemon.png';
import dotslemon from '../image/Dots.svg';
import ScrollPrizes from "../Scroll/ScrollPrizes";
import ScrollWinners from "../Scroll/ScrollWinners";
import ScrollFaq from "../Scroll/ScrollFaq";
import PopupSuccessCode from "./Popups/PopupSuccessCode";
import PopupPasswordNewStepOne from "./Popups/PopupPasswordNewStepOne";
import PopupPasswordNewStepTwo from "./Popups/PopupPasswordNewStepTwo";
import PopupRegister from "./Popups/PopupRegister";
import PopupLogin from "./Popups/PopupLogin";
import PopupSuccessPassword from "./Popups/PopupSuccessPassword";
import PopupSuccessEmail from "./Popups/PopupSuccessEmail";
import PopupSuccessRegister from "./Popups/PopupSuccessRegister";

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
                    <img src={logo2} alt="Logo"/>
                </div>
                <div className="menu">
                    <nav className="main-menu">
                        <ul>
                            <li className={'li-rules'}><a href={'#'}> Правила</a></li>
                            <li className={'li-ont'}><a className="smooth" href={'#how-prizes'} onClick={(event) => {
                                ScrollPrizes(event);
                            }}>Призы</a></li>
                            <li className={'li-ont'}><a className="smooth" href={'#winners'} onClick={(event) => {
                                ScrollWinners(event);
                            }}>Победители</a></li>
                            <li className={'li-ont'}><a className="smooth" href={'#faq'} onClick={(event) => {
                                ScrollFaq(event);
                            }}>Вопросы/ответы</a></li>
                            <li className={'li-lc'}><a href={'profile'}>Личный кабинет</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="contact-info">
                    {/*<p>Адрес: Ваш адрес</p>*/}
                    {/*<p>Телефон: Ваш номер телефона</p>*/}
                    {/*<p>Время работы: Ваши рабочие часы</p>*/}
                </div>
                {/*<button onClick={togglePopup} className="btn-leave-request">Оставить заявку</button>*/}
            </div>
            <PopupSuccessCode/>
            <PopupSuccessPassword/>
            <PopupSuccessEmail/>
            <PopupPasswordNewStepOne/>
            <PopupPasswordNewStepTwo/>
            <PopupLogin/>
            <PopupSuccessRegister/>
        </header>
    );
}