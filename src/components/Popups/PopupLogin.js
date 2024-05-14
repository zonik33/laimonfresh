import lcexit from "../../image/img_30.png";
import {Checkbox} from "@mui/material";
import Modal from "react-modal";
import ReactDOM from "react-dom";
import React, {useState} from "react";
import PhoneInput from "../PhoneInput";
import PopupRegister from "./PopupRegister";
import axios from "axios";
import Api from "../Api/Api";
import setAuthToken from "../Api/Api";
export default function PopupLogin(props) {
    const [isPopupOpen, setIsPopupOpen] = useState(null);
    const [registrationErrorEm, setRegistrationErrorEm] = useState('');
    const [registrationErrorPas, setRegistrationErrorPas] = useState('');
    const openPopup = (popupName) => {
        if (!isPopupOpen) {
            closePopup2()
            setIsPopupOpen(popupName);
            document.body.classList.add("no-scroll");
        }
    };

    const closePopup = () => {
        setIsPopupOpen(null);  // Add this line to reset isPopupOpen
        document.body.classList.remove("no-scroll");
    };

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
        document.getElementById('logins').value = '';
        document.getElementById('password').value = '';
        setRegistrationErrorEm('');
        setRegistrationErrorPas('');
        document.getElementById('logins').classList.remove('error');
        document.getElementById('password').classList.remove('error');
    }
    let isRequestPending = false;

    async function postAuth(event) {
        const form = document.getElementById('form-login');
        event.preventDefault();
        const login = document.getElementById('logins');
        const password = document.getElementById('password')

        if (isRequestPending) {
            return;
        }
        isRequestPending = true;
        const formData = new FormData(form);
        // if (promocodeValue) {
        //     formData.append('promocode', promocodeValue);
        // }
        formData.append('login', login.value);
        formData.append('password', password.value);

        try {
            const response = await axios.post('https://promo.laimonfresh.ch/backend/api/authenticateByEmail', formData);
            if (response.data.result === false) {
                console.log(response.data.result);
                if (response.data.error.login) {
                    setRegistrationErrorEm(response.data.error.login[0]);
                } else {
                    setRegistrationErrorEm('');
                }
                if (response.data.error.password) {
                    setRegistrationErrorPas(response.data.error.password[0]);
                } else {
                    setRegistrationErrorPas('');
                }
            } else {
                // handleSuccess()
                console.log(response.data.result);
                const login = response.data.data.login;
                localStorage.setItem('login', login);
                const auth_key = response.data.data.auth_key;
                localStorage.setItem('auth_key', auth_key);
                setAuthToken(auth_key);
                setTimeout(() => {
                    window.location.href = '/profile';
                }, 500);
            }
        } catch (error) {

            if (axios.isCancel(error)) {
            } else {

            }
        } finally {
            isRequestPending = false;
        }
    }
    return (
        <div id="popup-login" className="popup">
            <div className={"blur-filter"}>
                <div className="popup-content-code" id={"popup-content"}>
            <form action={'https://promo.laimonfresh.ch/backend/api/authenticateByEmail'}
                  method={'POST'} onSubmit={postAuth}
                  id={'form-login'} className={'form-register'}>
                <div className={'container-register'}>
                    <div><span className={'register-main-text'}>Авторизация</span>
                        <img className={'bottle-float-left exit-register'} onClick={closePopup2} src={lcexit}/>
                    </div>
                    <p className={'register-inputs-text login-next'}>E-mail</p>
                    <input type="email" className={`register-inputs ${registrationErrorEm ? 'error' : ''}`}
                           id={'logins'}
                           placeholder="E-mail"/>
                    {registrationErrorEm && <div className={'error-block-phone only-for-phone'}
                                                 style={{color: '#FFFFFF'}}>{registrationErrorEm}</div>}
                    <span id="phoneError" className="error"></span>
                    <p className={'register-inputs-text login-next'}>Пароль</p>
                    <input
                        type="password"
                        id={'password'} className={`register-inputs login ${registrationErrorPas ? 'error' : ''}`}
                        placeholder="Пароль"/>
                    {registrationErrorPas && <div className={'error-block-phone only-for-phone'}
                                                  style={{color: '#FFFFFF'}}>{registrationErrorPas}</div>}
                    <span id="phoneError" className="error"></span>
                    <p className={'register-inputs-text login-next'}><a className={"text-laimon"} onClick={openPopup2}>Забыли
                        пароль?</a></p>
                    <div className="register-button-container">
                        <button type={'submit'} id={'submit'} className={'register-button'}>Войти</button>
                    </div>
                    <div className="popup-p-center down-login">
                        <p>
                            Нет аккаунта?{" "}
                            <a className="text-laimon" onClick={() => openPopup('Register')}>
                                Зарегистрируйтесь
                            </a>
                            {isPopupOpen === 'Register' && (
                                <PopupRegister showPopup={true} closeModal={closePopup}/>
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
