import lcexit from "../../image/img_30.png";
import success from "../../image/img_32.png";
import {Checkbox} from "@mui/material";
import Modal from "react-modal";
import React, {useState} from "react";
import PhoneInput from "../PhoneInput";
import PopupRegister from "./PopupRegister";
export default function PopupSuccessCode(props) {
    const { showPopup, closeModal } = props;
    const [registrationError, setRegistrationError] = useState('');

    async function postRegisterPassword(event) {
        console.log('Ответ есть')
        const form = document.getElementById('form-register-password');
        event.preventDefault();
    }
    function closePopup2() {
        document.getElementById("popup-complete").style.display = "none";
        document.body.classList.remove("no-scroll");
        reloadPage1()
    }
    function reloadPage1() {
        window.location.href = window.location.href;
    }
    return (
        <div id="popup-complete" className="popup">
            <div className={"blur-filter"}>
                <div className="popup-content-code" id={"popup-content"}>
        <form action={'https://nloto-promo.ru/backend/api/login'}
              method={'POST'} onSubmit={postRegisterPassword}
              id={'form-login'} className={'form-register'}>
            <img className={'bottle-float-left exit-register success-email'} onClick={closePopup2} src={lcexit}/>
            <img className={'bottle-float-left success-image'} onClick={closeModal} src={success}/>
            <div><span className={'register-main-text top-margin'}>Спасибо</span>


                <p className={'register-inputs-text code-left'}>Ваш код успешно загружен и отправлен <br></br>на
                    модерацию</p>
            </div>
        </form>
                </div>
            </div>
        </div>
    )
}
