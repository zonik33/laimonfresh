import lcexit from "../../image/img_30.png";
import {Checkbox} from "@mui/material";
import Modal from "react-modal";
import React, {useState} from "react";
import PhoneInput from "../PhoneInput";
import PopupLogin from "./PopupLogin";
export default function PopupRegister(props) {
    const {showPopup, closeModal } = props;
    const [registrationError, setRegistrationError] = useState('');
    const [isPopupLoginOpen, setIsPopupLoginOpen] = useState(false);

    const openPopupLogin = () => {
        closeModal();
        document.getElementById("popup-login").style.display = "block";
        document.body.classList.add("no-scroll");
    };

    const closePopupLogin = () => {
        setIsPopupLoginOpen(false);
        document.body.classList.remove('no-scroll');
    };
    function openPopup3() {
        closePopup2()
        document.getElementById("popup-register-success").style.display = "block";
        document.body.classList.add("no-scroll");
    }
    function closePopup2() {
        closeModal();
        document.body.classList.remove("no-scroll");
    }

    async function postRegisterPassword(event) {
        console.log('Ответ есть');
        openPopup3();
        const form = document.getElementById('form-register-password');
        event.preventDefault();
    }
    return (
        <div id="popup-complete" className="popup">
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
                       width: 'auto', // Ширина модального окна
                       height: 'auto', // Высота модального окна

                   },
               }}
               contentLabel="Оставить заявку"
        >
            <form action={'https://nloto-promo.ru/backend/api/signup'}
                  method={'POST'} onSubmit={postRegisterPassword}
                  id={'form-register-password'} className={'form-register'}>
                <div className={'container-register'}>
                    <div><span className={'register-main-text'}>Регистрация</span>
                        <img className={'bottle-float-left exit-register'} onClick={closeModal} src={lcexit}/>
                    </div>
                    <p className={'register-inputs-text login'}>Фио</p>
                    <input type="text" className={'register-inputs'} placeholder="ФИО"/>
                    <p className={'register-inputs-text login'}>E-mail</p>
                    <input type="email" className={'register-inputs'} placeholder="E-mail"/>
                    <p className={'register-inputs-text login'}>Телефон</p>
                    <PhoneInput id='login' name='login' className={'register-inputs'}
                                registrationError={registrationError}/>
                    {registrationError && <div className={'error-block-phone only-for-phone'}
                                               style={{color: '#FFFFFF'}}>{registrationError}</div>}
                    <span id="phoneError" className="error"></span>
                    <p className={'register-inputs-text login'}>Город</p>
                    <input list="cities" className={'register-inputs'} placeholder="Город"
                           onKeyDown={e => e.preventDefault()}
                           onKeyPress={e => e.preventDefault()}
                    />
                    <datalist id="cities">
                        <option value="City 1"/>
                        <option value="City 2"/>
                        <option value="City 3"/>
                        <option value="City 1"/>
                        <option value="City 2"/>
                    </datalist>
                    <p className={'register-inputs-text login'}>Пароль</p>
                    <input
                        type="password" className={'register-inputs'} placeholder="Пароль"/>
                    <p className={'register-inputs-text login'}>Подтвердить пароль</p>
                    <input type="password" className={'register-inputs'} placeholder="Подтвердить пароль"/>
                    <div>
                        <label className={'popup-p-center'}>
                            <input
                                type="checkbox"
                                id="agree_1"
                                className={`input-checkbox`}
                            />
                            <span className={`custom-checkbox`}></span>
                            <p>Я согласен с <a href={'#'} className={"text-laimon"} target="_blank">Правилами акции</a>
                            </p>
                            <span id="phoneError" className="error"></span>
                        </label>

                    </div>
                    <div>
                        <label className={'popup-p-center'}>
                            <input
                                type="checkbox"
                                id="agree_1"
                                className={`input-checkbox`}
                            />
                            <span className={`custom-checkbox`}></span>
                            <p>Я согласен на обработку <br></br>моих персональных данных</p>
                            <span id="phoneError" className="error"></span>
                        </label>
                    </div>
                    <div className="register-button-container">
                        <button type={'submit'} id={'submit'} className={'register-button'}>Зарегистрироваться</button>
                    </div>
                    <div className="popup-p-center down">
                        <p>Уже есть аккаунт? <a onClick={openPopupLogin} className="text-laimon">Войти</a></p>
                    </div>
                </div>
            </form>
            {/*<button onClick={togglePopup}>Закрыть</button>*/}
        </Modal>
        </div>
    )
}
