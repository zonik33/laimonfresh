import lcexit from "../../image/img_30.png";
import success from "../../image/img_32.png";
import {Checkbox} from "@mui/material";
import Modal from "react-modal";
import React, {useState} from "react";
import PhoneInput from "../PhoneInput";
import PopupRegister from "./PopupRegister";
export default function PopupSuccessEmail(props) {
    const { showPopup, closeModal } = props;
    const [registrationError, setRegistrationError] = useState('');

    async function postRegisterPassword(event) {
        console.log('Ответ есть')
        const form = document.getElementById('form-register-password');
        event.preventDefault();
    }
    return (
        <Modal closeTimeoutMS={300}
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
                       width: '38vw', // Ширина модального окна
                       height: '24.72vw', // Высота модального окна

                   },
               }}
               contentLabel="Оставить заявку"
        >
            <form action={'https://nloto-promo.ru/backend/api/login'}
                  method={'POST'} onSubmit={postRegisterPassword}
                  id={'form-login'} className={'form-register'}>
                <img className={'bottle-float-left exit-register success-email'} onClick={closeModal} src={lcexit}/>
                <img className={'bottle-float-left success-image'} onClick={closeModal} src={success}/>
                <div><span className={'register-main-text top-margin'}>Спасибо</span>


                    <p className={'register-inputs-text code-left'}>Ссылка для восстановления пароля <br></br>отправлена
                        на указанный Е-mail</p>
                </div>
            </form>
            {/*<button onClick={togglePopup}>Закрыть</button>*/}
        </Modal>
    )
}
