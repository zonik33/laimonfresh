import lcexit from "../../image/img_30.png";
import {Checkbox} from "@mui/material";
import Modal from "react-modal";
import React, {useState} from "react";
import PhoneInput from "../PhoneInput";
import PopupRegister from "./PopupRegister";
export default function PopupPasswordNewStepTwo(props) {
    const { showPopup, closeModal } = props;
    const [registrationError, setRegistrationError] = useState('');
    function openPopup3() {
        closePopup2()
        document.getElementById("popup-password-success").style.display = "block";
        document.body.classList.add("no-scroll");
    }

    async function postRegisterPassword(event) {
        console.log('Ответ есть')
        openPopup3();
        const form = document.getElementById('form-resend-password2');
        event.preventDefault();
    }
    function closePopup2() {
        document.getElementById("popup-password-step-two").style.display = "none";
        document.body.classList.remove("no-scroll");
    }
    return (
        <div id="popup-password-step-two" className="popup">
            <div className={"blur-filter"}>
                <div className="popup-content-code" id={"popup-content"}>
            <form action={'https://nloto-promo.ru/backend/api/login'}
                  method={'POST'} onSubmit={postRegisterPassword}
                  id={'form-resend-password2'} className={'form-register'}>
                <div className={'container-register'}>
                    <div><span className={'register-main-text'}>Смена пароля</span>
                        <img className={'bottle-float-left exit-register'} onClick={closePopup2} src={lcexit}/>
                    </div>
                    <p className={'register-inputs-text'}>Пароль</p>
                    <input
                        type="password" className={'register-inputs'} placeholder="Пароль"/>
                    <p className={'register-inputs-text'}>Подтвердить пароль</p>
                    <input
                        type="password" className={'register-inputs'} placeholder="Пароль"/>
                    <div className="register-button-container">
                        <button type={'submit'} id={'submit'} className={'register-button code-down'}>Изменить пароль</button>
                    </div>
                </div>
            </form>
            {/*<button onClick={togglePopup}>Закрыть</button>*/}
        </div>
            </div>
        </div>
    )
}
