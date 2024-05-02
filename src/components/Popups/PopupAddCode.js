import lcexit from "../../image/img_30.png";
import {Checkbox} from "@mui/material";
import Modal from "react-modal";
import React, {useRef, useState} from "react";
import PhoneInput from "../PhoneInput";
import PopupRegister from "./PopupRegister";
import axios from "axios";
import setAuthToken from "../Api/Api";
export default function PopupAddCode(props) {
    const { showPopup, closeModal } = props;
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [registrationError, setRegistrationError] = useState('');
    const [registrationErrorEm, setRegistrationErrorEm] = useState('');
    const popupRef = useRef(null);

    function openPopup2() {
        closeModal()
        document.getElementById("popup-complete").style.display = "block";
        document.body.classList.add("no-scroll");
    }
    let isRequestPending = false;

    async function postAddCode(event) {
        const form = document.getElementById('form-add-code');
        event.preventDefault();
        const code = document.getElementById('addCode');

        if (isRequestPending) {
            return;
        }
        isRequestPending = true;
        const formData = new FormData(form);
        // if (promocodeValue) {
        //     formData.append('promocode', promocodeValue);
        // }
        formData.append('code', code.value);
debugger

        try {
            const response = await axios.post('https://promo.laimonfresh.ch/backend/api/registerCode', formData, {
                headers: {
                    'X-Auth-Token': localStorage.getItem('auth_key')
                }
            });
            if (response.data.result === false) {
                if (response.data.error.code) {
                    setRegistrationErrorEm(response.data.error.code[0]);
                } else {
                    setRegistrationErrorEm('');
                }
            } else {
                openPopup2()
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
        <Modal closeTimeoutMS={300}
               ref={popupRef}
               className={{
                   base: 'Modal-add',
                   afterOpen: showPopup ? 'ReactModal__Overlay--after-open' : '',
                   beforeClose: showPopup ? 'ReactModal__Overlay--before-close' : '',
               }}
               overlayClassName="Overlay"
               isOpen={showPopup}
               onRequestClose={closeModal}
               style={{
                   overlay: {
                       backgroundColor: 'rgba(0, 0, 0, 0.5)',
                       zIndex: 9999,
                   },
                   content: {
                       position: 'absolute',
                       top: '50%',
                       left: '50%',
                       transform: 'translate(-50%, -50%)',
                       backgroundColor: 'rgba(162, 212, 65, 1)',
                       padding: '1.60vw',
                       borderRadius: '2.08vw',
                       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                       width: 'auto', // Ширина модального окна
                       height: 'auto', // Высота модального окна

                   },
               }}
               contentLabel="Оставить заявку"
        >
            <form action={'https://promo.laimonfresh.ch/backend/api/registerCode'}
                  ref={popupRef}
                  method={'POST'} onSubmit={postAddCode}
                  id={'form-add-code'} className={'form-register'}>
                <div className={'container-register-modal'}>
                    <div><span className={'register-main-text'}>Загрузка кода</span>
                        <img className={'bottle-float-left exit-register'} onClick={closeModal} src={lcexit}/>
                    </div>
                    <p className={'register-inputs-text code-left'}>Введите промокод:</p>
                    <input type="text" id={'addCode'}
                           required
                           className={`register-inputs code-bottom ${registrationErrorEm ? 'error' : ''}`}
                           maxLength={11}
                           placeholder="Ваш код"/>
                    {registrationErrorEm && <div className={'error-block-phone test-code-add'}
                                                 style={{color: '#FFFFFF'}}>{registrationErrorEm}</div>}
                    <span id="phoneError" className="error"></span>
                    <div className="register-button-container">
                        <button type={'submit'} id={'submit'} className={'register-button code-down'}>Отправить</button>
                    </div>
                </div>
            </form>
            {/*<button onClick={togglePopup}>Закрыть</button>*/}
        </Modal>
    )
}
