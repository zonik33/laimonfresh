import lcexit from "../../image/img_30.png";
import success from "../../image/img_60.png";
import {Checkbox} from "@mui/material";
import Modal from "react-modal";
import React, {useState} from "react";
import PhoneInput from "../PhoneInput";
import PopupRegister from "./PopupRegister";
export default function PopupSuccessRegister(props) {
    const { showPopup, closeModal } = props;

    async function postRegisterRegister(event) {
        console.log('Ответ есть')
        const form = document.getElementById('form-register-password');
        event.preventDefault();
    }
    function closePopup2() {
        document.getElementById("popup-register-success").style.display = "none";
        document.body.classList.remove("no-scroll");
    }
    return (
        <div id="popup-register-success" className="popup">
            <div className={"blur-filter"}>
                <div className="popup-content-code" id={"popup-content"}>
            <form action={'https://nloto-promo.ru/backend/api/login'}
                  method={'POST'}
                   className={'form-register'}>
                <img className={'bottle-float-left exit-register success-email'} onClick={closePopup2} src={lcexit}/>
                <img className={'bottle-float-left success-image'} onClick={closeModal} src={success}/>
                <div><span className={'register-main-text top-margin new-meow'}>Ваша регистрация <br></br>прошла успешно</span>
                    <p className={'register-inputs-text new-reg'}>На вашу почту отправлена ссылка <br></br>для
                        активации аккаунта.</p>


                </div>
            </form>
                    {/*<button onClick={togglePopup}>Закрыть</button>*/}
                </div>
            </div>
        </div>
    )
}
