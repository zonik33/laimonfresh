import lcexit from "../../image/img_30.png";
import success from "../../image/img_60.png";
import {Checkbox} from "@mui/material";
import Modal from "react-modal";
import React, {useState} from "react";
import PhoneInput from "../PhoneInput";
import PopupRegister from "./PopupRegister";
export default function PopupSuccessEmail(props) {
    const { showPopup, closeModal } = props;
    const [registrationError, setRegistrationError] = useState('');
    function closePopup2() {
        document.getElementById("popup-email-success").style.display = "none";
        document.body.classList.remove("no-scroll");
    }

    async function postRegisterPassword(event) {
        console.log('Ответ есть')
        const form = document.getElementById('form-register-password');
        event.preventDefault();
    }
    return (
        <div id="popup-email-success" className="popup">
            <div className={"blur-filter"}>
                <div className="popup-content-code" id={"popup-content"}>
            <form action={''}
                  method={'POST'} onSubmit={postRegisterPassword}
                   className={'form-register'}>
                <img className={'bottle-float-left exit-register success-email'} onClick={closePopup2} src={lcexit}/>
                <img className={'bottle-float-left success-image'}  src={success}/>
                <div><span className={'register-main-text top-margin'}>Спасибо</span>


                    <p className={'register-inputs-text code-left code-left-email'}>Информация о восстановлении пароля <br></br> выслана
                        на указанный E-mail</p>
                </div>
            </form>
            {/*<button onClick={togglePopup}>Закрыть</button>*/}
                </div>
            </div>
        </div>
    )
}
