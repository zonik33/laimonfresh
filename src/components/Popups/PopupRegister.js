import lcexit from "../../image/img_30.png";
import {Checkbox} from "@mui/material";
import Modal from "react-modal";
import React, {useState} from "react";
import PhoneInput from "../PhoneInput";
import PopupLogin from "./PopupLogin";
import axios from "axios";
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

    async function postRegister(event) {
        const form = document.getElementById('form-register-password');
        event.preventDefault();
        const login = document.getElementById('login');
        const name = document.getElementById('name');
        const phone = document.getElementById('phone');
        const city = document.getElementById('city');
        const pass = document.getElementById('pass');
        const passR = document.getElementById('passR');
        const rules1 = document.getElementById('rules1');
        const rules2 = document.getElementById('rules2');

        if (isRequestPending) {
            return;
        }
        isRequestPending = true;
        const formData = new FormData(form);
        // if (promocodeValue) {
        //     formData.append('promocode', promocodeValue);
        // }
        formData.append('login', login.value);
        formData.append('name', name.value);
        formData.append('phone', phone.value);
        formData.append('city', city.value);
        formData.append('pass', pass.value);
        formData.append('passR', passR.value);
        formData.append('rules1', rules1 ? '1' : '0');
        formData.append('rules2', rules2 ? '1' : '0');
        try {
            const response = await axios.post('https://promo.laimonfresh.ch/backend/api/registerByEmail', formData);
            if (response.data.result === false) {
                console.log(response.data.result);
                if (response.data.error.login) {
                    setRegistrationError(response.data.error.login[0]);
                } else {
                    setRegistrationError('');
                }
                if (response.data.error.name) {
                    setRegistrationError(response.data.error.name[0]);
                } else {
                    setRegistrationError('');
                }
                if (response.data.error.phone) {
                    setRegistrationError(response.data.error.phone[0]);
                } else {
                    setRegistrationError('');
                }
                if (response.data.error.pass) {
                    setRegistrationError(response.data.error.pass[0]);
                } else {
                    setRegistrationError('');
                }
                if (response.data.error.passR) {
                    setRegistrationError(response.data.error.passR[0]);
                } else {
                    setRegistrationError('');
                }
                if (response.data.error.rules1) {
                    setRegistrationError(response.data.error.rules1[0]);
                } else {
                    setRegistrationError('');
                }
                if (response.data.error.rules2) {
                    setRegistrationError(response.data.error.rules2[0]);
                } else {
                    setRegistrationError('');
                }
            } else {
                // handleSuccess()
                console.log(response.data.result);
                const hash = response.data.data.hash;
                localStorage.setItem('hash', hash);
                openPopup3();
                // openPopup2();
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
            <form action={'https://promo.laimonfresh.ch/backend/api/registerByEmail'}
                  method={'POST'} onSubmit={postRegister}
                  id={'form-register-password'} className={'form-register'}>
                <div className={'container-register'}>
                    <div><span className={'register-main-text'}>Регистрация</span>
                        <img className={'bottle-float-left exit-register'} onClick={closeModal} src={lcexit}/>
                    </div>
                    <p className={'register-inputs-text login'}>Фио</p>
                    <input type="text" className={'register-inputs'} id={'name'} placeholder="ФИО"
                           required
                    />
                    <p className={'register-inputs-text login'}>E-mail</p>
                    <input
                        type="email"
                        id={'login'}
                        className={`register-inputs ${isValidEmail ? "" : "invalid"}`}
                        placeholder="E-mail"
                        value={email}
                        required
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {!isValidEmail && <p className="error-message">Пожалуйста, введите корректный email адрес.</p>}
                    <p className={'register-inputs-text login'}>Телефон</p>
                    <PhoneInput id='phone' name='login' className={'register-inputs'}
                                registrationError={registrationError} required/>
                    {registrationError && <div className={'error-block-phone only-for-phone'}
                                               style={{color: '#FFFFFF'}}>{registrationError}</div>}
                    <span id="phoneError" className="error"></span>
                    <p className={'register-inputs-text login'}>Город</p>
                    <input list="cities" id={'city'} className={'register-inputs'} placeholder="Город"
                           required
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
                        type="password" className={'register-inputs'}
                        id={'pass'}
                        placeholder="Пароль"
                        required/>

                    <p className={'register-inputs-text login'}>Подтвердить пароль</p>
                    <input type="password"
                           id={'passR'}
                           className={'register-inputs'} placeholder="Подтвердить пароль"
                           required/>
                    <div>
                        <label className={'popup-p-center'}>
                            <input
                                type="checkbox"
                                id="rules1"
                                className={`input-checkbox`}
                                required
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
                                id="rules2"
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
