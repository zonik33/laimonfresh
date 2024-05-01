import lcexit from "../../image/img_30.png";
import {Checkbox} from "@mui/material";
import Modal from "react-modal";
import React, {useState} from "react";
import PhoneInput from "../PhoneInput";
import PopupRegister from "./PopupRegister";
import axios from "axios";
import setAuthToken from "../Api/Api";
export default function PopupPasswordNewStepOne(props) {
    const { showPopup, closeModal } = props;
    const [registrationError, setRegistrationError] = useState('');
    function openPopup3() {
        closePopup2()
        document.getElementById("popup-password-step-two").style.display = "block";
        document.body.classList.add("no-scroll");
    }
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleBlur = () => {
        const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
        setIsValidEmail(isValid);
    };
    let isRequestPending = false;

    async function postResendPassword(event) {

        const form = document.getElementById('form-resend-password');
        event.preventDefault();
        const email = document.getElementById('emailResend');


        if (isRequestPending) {
            return;
        }
        isRequestPending = true;
        const formData = new FormData(form);
        formData.append('email', email.value);


        try {
            const response = await axios.post('https://promo.laimonfresh.ch/backend/api/resendPassword', formData);
            if (response.data.result === false) {
                console.log(response.data.result);
                if (response.data.error.email) {
                    setRegistrationError(response.data.error.email[0]);
                } else {
                    setRegistrationError('');
                }
            } else {
                openPopup3();
            }
        } catch (error) {

            if (axios.isCancel(error)) {
            } else {

            }
        } finally {
            isRequestPending = false;
        }



    }
    function closePopup2() {
        document.getElementById("popup-password-step-one").style.display = "none";
        document.body.classList.remove("no-scroll");
    }
    return (
        <div id="popup-password-step-one" className="popup">
        <div className={"blur-filter"}>
        <div className="popup-content-code" id={"popup-content"}>
            <form action={'https://promo.laimonfresh.ch/backend/api/resendPassword'}
                  method={'POST'} onSubmit={postResendPassword}
                  id={'form-resend-password'} className={'form-register'}>
                <div className={'container-register'}>
                    <div><span className={'register-main-text'}>Восстановление пароля</span>
                        <img className={'bottle-float-left exit-register'} onClick={closePopup2} src={lcexit}/>
                    </div>
                    <p className={'register-inputs-text new-password'}>Введите Е-mail, указанный при регистрации. <br></br>Мы
                        вышлем туда ссылку для смены пароля.</p>
                    <p className={'register-inputs-text'}>E-mail</p>
                    <input
                        type="email"
                        id={'emailResend'}
                        className={`register-inputs ${isValidEmail ? "" : "invalid"}`}
                        placeholder="E-mail"
                        value={email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {!isValidEmail && <p className="error-message password-one">Пожалуйста, введите корректный email адрес.</p>}
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
