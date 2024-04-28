import lcexit from "../../image/img_30.png";
import {Checkbox} from "@mui/material";
import Modal from "react-modal";
import React, {useState} from "react";
import PhoneInput from "../PhoneInput";
import PopupRegister from "./PopupRegister";
export default function PopupPasswordNewStepOne(props) {
    const { showPopup, closeModal } = props;
    const [registrationError, setRegistrationError] = useState('');
    function openPopup3() {
        closePopup2()
        document.getElementById("popup-password-step-two").style.display = "block";
        document.body.classList.add("no-scroll");
    }

    async function postRegisterPassword(event) {
        debugger;
        console.log('Ответ есть')
        openPopup3();
        const form = document.getElementById('form-register-password');
        event.preventDefault();
    }
    function closePopup2() {
        document.getElementById("popup-password-step-one").style.display = "none";
        document.body.classList.remove("no-scroll");
    }
    return (
        <div id="popup-password-step-one" className="popup">
        <div className={"blur-filter"}>
        <div className="popup-content-code" id={"popup-content"}>
            <form action={''}
                  method={'POST'} onSubmit={postRegisterPassword}
                  id={'form-login'} className={'form-register'}>
                <div className={'container-register'}>
                    <div><span className={'register-main-text'}>Восстановление пароля</span>
                        <img className={'bottle-float-left exit-register'} onClick={closePopup2} src={lcexit}/>
                    </div>
                    <p className={'register-inputs-text new-password'}>Введите Е-mail, указанный при регистрации. <br></br>Мы
                        вышлем туда ссылку для смены пароля.</p>
                    <p className={'register-inputs-text'}>E-mail</p>
                    <input type="text" className={'register-inputs code-bottom'} maxLength={20} placeholder="E-mail"/>
                    <div className="register-button-container">
                        <button type={'submit'} id={'submit'} className={'register-button code-down'}>Отправить</button>
                    </div>
                </div>
            </form>
            {/*<button onClick={togglePopup}>Закрыть</button>*/}
        </div>
        </div>
        </div>
    )
}
