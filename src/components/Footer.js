import logo2 from "../image/logo2.png";
import treepape from "../image/img_27.png";
import React, {useRef, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function Footer (props) {
    const navigate = useNavigate();

    const handleGoToPrizes = (event) => {
        event.preventDefault();
        navigate("/?section=how-prizes"); // Передаем параметр "section" в URL
    };

    const handleGoToWinners = (event) => {
        event.preventDefault();
        navigate("/?section=winners"); // Передаем параметр "section" в URL
    };
    const handleGoToFaq = (event) => {
        event.preventDefault();
        navigate("/?section=faq"); // Передаем параметр "section" в URL
    };
    const [activeSection, setActiveSection] = useState(null);
    const prizesRef = useRef(null);
    const winnersRef = useRef(null);
    const faqRef = useRef(null);
    const supportRef = useRef(null);
    const handleImageClick = () => {
        window.location.href = '/'
    };
    const currentDomain = window.location.origin;
    const handleRulesClick = () => {
        window.open(`${currentDomain}/rules.pdf`, '_blank');
    };
    const handlePolicyClick = () => {
        window.open(`${currentDomain}/politika_pd_omi.pdf`, '_blank');
    };

    return (
        <footer>
            <div className={'content-container-footer'}>
                <div className={'footer'} id={'footer'}>
                    <div className="logo logo-footer">
                        <Link to="">
                            <img src={logo2} alt="Logo" onMouseOver={() => { /* Обработчик наведения на картинку */
                            }} onClick={handleImageClick}
                            />
                        </Link>
                        <img className={'bottle-float-left treepape-footer'} src={treepape} alt="Logo"/>
                    </div>
                    <div className="menu">
                        <nav className="main-menu">
                            <ul>
                                <li className={'li-rules'}><a href={`${currentDomain}/rules.pdf`}
                                                              target="_blank"> Правила</a></li>
                                <li className={'li-ont'}><a className="smooth" href={'#how-prizes'}
                                                            onClick={(event) => {
                                                                handleGoToPrizes(event)
                                                            }}>Призы</a></li>
                                <li className={'li-ont'}><a className="smooth" href={'#winners'} onClick={(event) => {
                                    handleGoToWinners(event)
                                }}>Победители</a></li>
                                <li className={'li-ont'}><a className="smooth" href={'#faq'} onClick={(event) => {
                                    handleGoToFaq(event)
                                }}>Вопросы/ответы</a></li>
                                <li className={'li-lc'}><a href={'profile'}>Личный
                                    кабинет</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="left-footer">
                    {/*<p>А также некоторые особенности внутренней политики формируют глобальную экономическую сеть и при*/}
                    {/*    этом — указаны как претенденты на роль ключевых.</p>*/}
                    {/*<p className={'footer-padding-text'}>info@promo.laimonfresh.ch</p>*/}
                </div>
                <div className="right-footer">
                    <p>Документы об акции</p>
                    <div className="buttons">
                        <button className={'footer-left-button'} onClick={handlePolicyClick}>Политика персональных данных</button>
                        <button className={'footer-right-button'} onClick={handleRulesClick}>Правила акции</button>
                    </div>
                </div>
            </div>
        </footer>

    )
}