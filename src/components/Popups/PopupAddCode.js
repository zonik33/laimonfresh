import lcexit from "../../image/img_30.png";
import {Checkbox} from "@mui/material";
import Modal from "react-modal";
import React, {useRef, useState} from "react";
import PhoneInput from "../PhoneInput";
import PopupRegister from "./PopupRegister";
export default function PopupAddCode(props) {
    const { showPopup, closeModal } = props;
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [registrationError, setRegistrationError] = useState('');
    const popupRef = useRef(null);

    function openPopup2() {
        closeModal()
        document.getElementById("popup-complete").style.display = "block";
        document.body.classList.add("no-scroll");
    }

    async function postAddCode(event) {

        openPopup2();
        const form = document.getElementById('form-register-password');
        event.preventDefault();
    }
    return (
        <Modal closeTimeoutMS={300}
               ref={popupRef}
               className={{
                   base: 'Modal',
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
            <form action={'https://nloto-promo.ru/backend/api/login'}
                  ref={popupRef}
                  method={'POST'} onSubmit={postAddCode}
                  id={'form-login'} className={'form-register'}>
                <div className={'container-register'}>
                    <div><span className={'register-main-text'}>Загрузка кода</span>
                        <img className={'bottle-float-left exit-register'} onClick={closeModal} src={lcexit}/>
                    </div>
                    <p className={'register-inputs-text code-left'}>Введите промокод:</p>
                    <input type="text" className={'register-inputs code-bottom'} maxLength={20} placeholder="Ваш код"/>
                    <div className="register-button-container">
                        <button type={'submit'} id={'submit'} className={'register-button code-down'}>Отправить</button>
                    </div>
                </div>
            </form>
            {/*<button onClick={togglePopup}>Закрыть</button>*/}
        </Modal>
    )
}
