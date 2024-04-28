import lcexit from "../../image/img_30.png";
import {Checkbox} from "@mui/material";
import Modal from "react-modal";
import ReactDOM from "react-dom";
import React, {useState} from "react";
import PhoneInput from "../PhoneInput";
import PopupRegister from "./PopupRegister";
export default function PopupLogin(props) {

    const { showPopup, closeModal } = props;
    const [isPopupRegisterOpen, setIsPopupRegisterOpen] = useState(false);
    const [isPopupLoginOpen, setIsPopupLoginOpen] = useState(false);

    const openPopupRegister = () => {
        closeModal(); // Закрыть текущий попап
        setIsPopupRegisterOpen(true);
    };

    const closePopupRegister = () => {
        setIsPopupRegisterOpen(false);
    };

    const openPopupLogin = () => {
        closeModal(); // Закрыть текущий попап
        setIsPopupLoginOpen(true);
    };

    const closePopupLogin = () => {
        setIsPopupLoginOpen(false);
    };
    function openPopup2() {
        closePopup2()
        document.getElementById("popup-password-step-one").style.display = "block";
        document.body.classList.add("no-scroll");
    }
    function closePopup2() {
        document.getElementById("popup-login").style.display = "none";
        document.body.classList.remove("no-scroll");
    }


    async function postRegisterPassword(event) {
        console.log('Ответ есть')
        window.location.href = 'profile';
        const form = document.getElementById('form-register-password');
        event.preventDefault();
    }
    return (
        <div id="popup-login" className="popup">
            <div className={"blur-filter"}>
                <div className="popup-content-code" id={"popup-content"}>
            <form action={'https://nloto-promo.ru/backend/api/login'}
                  method={'POST'} onSubmit={postRegisterPassword}
                  id={'form-login'} className={'form-register'}>
                <div className={'container-register'}>
                    <div><span className={'register-main-text'}>Авторизация</span>
                        <img className={'bottle-float-left exit-register'} onClick={closePopup2} src={lcexit}/>
                    </div>
                    <p className={'register-inputs-text login-next'}>E-mail</p>
                    <input type="email" className={'register-inputs'} placeholder="E-mail"/>
                    <p className={'register-inputs-text login-next'}>Пароль</p>
                    <input
                        type="password" className={'register-inputs login'} placeholder="Пароль"/>
                    <p className={'register-inputs-text login-next'}><a className={"text-laimon"} onClick={openPopup2}>Забыли пароль?</a></p>
                    <div className="register-button-container">
                        <button type={'submit'} id={'submit'} className={'register-button'}>Войти</button>
                    </div>
                    <div className="popup-p-center down-login">
                        <p>
                            Нет аккаунта?{" "}
                            <a className="text-laimon" onClick={openPopupRegister}>
                                Зарегистрируйтесь
                            </a>
                            {isPopupRegisterOpen && (
                                <PopupRegister showPopup={true} closeModal={closePopupRegister}/>
                            )}
                        </p>
                    </div>
                </div>
            </form>
            {/*<button onClick={togglePopup}>Закрыть</button>*/}
                </div>
            </div>
        </div>
    )
}
