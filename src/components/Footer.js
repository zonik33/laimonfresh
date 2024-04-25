import logo2 from "../image/logo2.png";
import treepape from "../image/img_27.png";
import React from "react";

export default function Footer (props) {


    return (
        <footer>
            <div className={'content-container-footer'}>
                <div className={'footer'} id={'footer'}>
                    <div className="logo logo-footer">
                        <img src={logo2} alt="Logo"/>
                        <img className={'bottle-float-left treepape-footer'} src={treepape} alt="Logo"/>
                    </div>
                    <div className="menu">
                        <nav className="main-menu">
                            <ul>
                                <li className={'li-rules'}><a href={'#'}>Правила</a></li>
                                <li className={'li-ont'}><a href={'#'}>Призы</a></li>
                                <li className={'li-ont'}><a href={'#'}>Победители</a></li>
                                <li className={'li-ont'}><a href={'#'}>Вопросы/ответы</a></li>
                                <li className={'li-lc'}><a href={'#'}>Личный кабинет</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="left-footer">
                    <p>А также некоторые особенности внутренней политики формируют глобальную экономическую сеть и при этом — указаны как претенденты на роль ключевых.</p>
                    <p className={'footer-padding-text'}>info@promo.laimonfresh.ch</p>
                </div>
                <div className="right-footer">
                    <p>Документы об акции</p>
                    <div className="buttons">
                        <button className={'footer-left-button'}>Политика персональных данных</button>
                        <button className={'footer-right-button'}>Правила акции</button>
                    </div>
                </div>
            </div>
        </footer>

    )
}