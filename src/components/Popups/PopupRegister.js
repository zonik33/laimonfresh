import lcexit from "../../image/img_30.png";
import {Checkbox} from "@mui/material";
import Modal from "react-modal";
import React, {useEffect, useState} from "react";
import PhoneInput from "../PhoneInput";
import PopupLogin from "./PopupLogin";
import axios from "axios";
export default function PopupRegister(props) {
    const {showPopup, closeModal } = props;
    const [registrationError1, setRegistrationError1] = useState('');
    const [registrationError2, setRegistrationError2] = useState('');
    const [registrationError, setRegistrationError] = useState('');
    const [registrationError4, setRegistrationError4] = useState('');
    const [registrationError5, setRegistrationError5] = useState('');
    const [registrationError6, setRegistrationError6] = useState('');
    const [registrationError7, setRegistrationError7] = useState('');
    const [registrationError8, setRegistrationError8] = useState('');
    const [agree4Error, setAgree4Error] = useState(false);
    const [agree5Error, setAgree5Error] = useState(false);
    const [agree4Checked, setAgree4Checked] = useState(false);
    const [agree5Checked, setAgree5Checked] = useState(false);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [text1Error, setText1Error] = useState('');
    const [isPopupLoginOpen, setIsPopupLoginOpen] = useState(false);
    const [allCheckboxesChecked, setAllCheckboxesChecked] = useState(false);
    const emailInputRef = React.useRef();
    const nameInputRef = React.useRef();
    const formRef = React.useRef();

    const handleNameInputChange = () => {
        setRegistrationError2('');
    };

    // const handleEmailInputChange = () => {
    //     setRegistrationError1('');
    // };

    const handleCityInputChange = () => {
        setRegistrationError('');
    };

    const handlePass2InputChange = () => {
        setRegistrationError4('');
    };

    const handlePass3InputChange = () => {
        setRegistrationError5('');
    };




    const scrollToError = () => {
        if (registrationError1 || registrationError2) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToEmailError = () => {
        if (registrationError1) {
            emailInputRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToNameError = () => {
        if (registrationError2) {
            nameInputRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        scrollToEmailError();
        scrollToNameError();
    }, [registrationError1, registrationError2]);

    const handleAgree4Change = () => {
        setAgree4Checked(agree4Checked => {
            checkAllCheckboxes(!agree4Checked, agree5Checked);
            setAgree4Error(!agree4Checked);
            return !agree4Checked;
        });
    }

    const handleAgree5Change = () => {
        setAgree5Checked(agree5Checked => {
            checkAllCheckboxes(agree4Checked, !agree5Checked);
            setAgree5Error(!agree5Checked);
            return !agree5Checked;
        });
    }

    const checkAllCheckboxes = (agree4, agree5) => {
        if (agree4 && agree5) {
            setAllCheckboxesChecked(true);
        } else {
            setAllCheckboxesChecked(false);
        }
    };

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
        setRegistrationError1('');
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
        const rules1Checkbox1 = document.getElementById('rules1');
        const rules1 = rules1Checkbox1.checked;
        const rules2Checkbox2 = document.getElementById('rules2');
        const rules2 = rules2Checkbox2.checked;

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
        setIsLoading(true);
        try {

            const response = await axios.post('https://promo.laimonfresh.ch/backend/api/registerByEmail', formData);
            if (response.data.result === false) {
                console.log(response.data.result);
                if (response.data.error.login) {
                    setRegistrationError1(response.data.error.login[0]);
                } else {
                    setRegistrationError1('');
                }
                if (response.data.error.name) {
                    setRegistrationError2(response.data.error.name[0]);
                } else {
                    setRegistrationError2('');
                }
                if (response.data.error.phone) {
                    setRegistrationError(response.data.error.phone[0]);
                } else {
                    setRegistrationError('');
                }
                if (response.data.error.pass) {
                    setRegistrationError4(response.data.error.pass[0]);
                } else {
                    setRegistrationError4('');
                }
                if (response.data.error.passR) {
                    setRegistrationError5(response.data.error.passR[0]);
                } else {
                    setRegistrationError5('');
                }
                if (response.data.error.rules1) {
                    setAgree4Error(response.data.error.rules1[0]);
                } else {
                    setAgree4Error('');
                }
                if (response.data.error.rules2) {
                    setAgree5Error(response.data.error.rules2[0]);
                } else {
                    setAgree5Error('');
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
            setIsLoading(false);
        }

    }

    const [inputValue, setInputValue] = useState('');
    const [allCities, setAllCities] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]);

    useEffect(() => {
        const url = 'https://api.hh.ru/areas/113';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const hhCities = data.areas.map(area => area.name); // Предположим, что данные содержат имена городов
                setAllCities(hhCities);
                setFilteredCities(hhCities); // Инициализируем фильтрованные города
            })
            .catch(error => {
                console.error('Ошибка при запросе данных у API HeadHunter', error);
            });
    }, []); // Пустой массив зависимостей означает, что это будет выполнено только один раз после монтирования

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);

        // Фильтрация городов по введенному тексту
        const filteredCities = allCities.filter(city =>
            city.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredCities(filteredCities);
    };
    const currentDomain = window.location.origin;



    return (
        <div id="popup-complete" className="popup">
        <Modal closeTimeoutMS={300}
               className={{
                   base: 'styledsd',
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
                       backgroundColor: 'rgba(0, 98, 65, 1)',
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
                  id={'form-register-password'} className={'form-register'}
                  ref={formRef}>
                <div className={'container-register-modal'}>
                    <div><span className={'register-main-text'}>Промоакция</span>
                        <img className={'bottle-float-left exit-register'} onClick={closeModal} src={lcexit}/>
                    </div>
                    <p className={'register-inputs-text login'}>Срок вручения призов продлен до 31 октября!
                    </p>
                    {/*    <input type="text"  className={`register-inputs ${registrationError2 ? 'error' : ''}`} id={'name'}*/}
                {/*           required*/}
                {/*           placeholder="ФИО"*/}
                {/*           ref={nameInputRef}*/}
                {/*           onChange={handleNameInputChange}*/}

                {/*    />*/}
                {/*    {registrationError2 &&  <div className={'error-block-phone test-register'} style={{color: '#FFFFFF'}}>{registrationError2}</div>}*/}
                {/*    <span id="phoneError" className="error"></span>*/}
                    <p className={'register-inputs-text login'}>Подробности в правилах акции.</p>
                {/*    <input*/}
                {/*        ref={emailInputRef}*/}
                {/*        type="email"*/}
                {/*        id={'login'}*/}
                {/*        className={`register-inputs ${registrationError1 ? 'error' : ''}`}*/}
                {/*        placeholder="E-mail"*/}
                {/*        value={email}*/}
                {/*        onChange={handleChange}*/}
                {/*        onBlur={handleBlur}*/}
                {/*        required*/}
                {/*    />*/}

                {/*    {registrationError1 &&  <div className={'error-block-phone test-register'} style={{color: '#FFFFFF'}}>{registrationError1}</div>}*/}

                {/*    <span id="phoneError" className="error"></span>*/}
                {/*    <p className={'register-inputs-text login'}>Телефон</p>*/}
                {/*    <PhoneInput id='phone' name='login' className={'register-inputs'}*/}
                {/*                registrationError={registrationError} />*/}
                {/*    {registrationError && <div className={'error-block-phone test-register'}*/}
                {/*                               style={{color: '#FFFFFF'}}>{registrationError}</div>}*/}
                {/*    <span id="phoneError" className="error"></span>*/}
                {/*    <p className={'register-inputs-text login'}>Город</p>*/}
                {/*    <input*/}
                {/*        list="cities"*/}
                {/*        id={'city'}*/}
                {/*        className={'register-inputs'}*/}
                {/*        placeholder="Город"*/}
                {/*        value={inputValue}*/}
                {/*        onChange={handleInputChange}*/}
                {/*        required*/}
                {/*    />*/}
                {/*    <datalist id="cities">*/}
                {/*        {filteredCities.map((city, index) => (*/}
                {/*            <option key={index} value={city}/>*/}
                {/*        ))}*/}
                {/*    </datalist>*/}
                {/*    <p className={'register-inputs-text login'}>Пароль</p>*/}
                {/*    <input*/}
                {/*        type="password" className={`register-inputs ${registrationError4 ? 'error' : ''}`}*/}
                {/*        id={'pass'}*/}
                {/*        placeholder="Пароль"*/}
                {/*        required*/}
                {/*        onChange={handlePass2InputChange}*/}
                {/*        />*/}
                {/*    {registrationError4 &&  <div className={'error-block-phone test-register'} style={{color: '#FFFFFF'}}>{registrationError4}</div>}*/}
                {/*    <span id="phoneError" className="error"></span>*/}
                {/*    <p className={'register-inputs-text login'}>Подтвердить пароль</p>*/}
                {/*    <input type="password"*/}
                {/*           required*/}
                {/*           id={'passR'}*/}
                {/*           onChange={handlePass3InputChange}*/}
                {/*           className={`register-inputs ${registrationError5 ? 'error' : ''}`} placeholder="Подтвердить пароль"*/}
                {/*           />*/}
                {/*    {registrationError5 &&  <div className={'error-block-phone test-register'} style={{color: '#FFFFFF'}}>{registrationError5}</div>}*/}
                {/*    <span id="phoneError" className="error"></span>*/}
                {/*    <div>*/}
                {/*        <label className={'popup-p-center p-span-1'}>*/}
                {/*            <input*/}
                {/*                type="checkbox"*/}
                {/*                id="rules1"*/}
                {/*                className={`input-checkbox ${!agree4Checked ? 'error' : ''}`}*/}
                {/*                onChange={handleAgree4Change}*/}
                {/*                required*/}

                {/*            />*/}
                {/*            <span className={`custom-checkbox ${!agree4Checked ? 'error' : ''}`}></span>*/}
                {/*            <p>Я согласен с <a href={`${currentDomain}/rules.pdf`} className={"text-laimon"} target="_blank">Правилами акции</a>*/}
                {/*            </p>*/}
                {/*            {!agree4Checked && <span className={`error-message check-box-error ${!agree4Checked ? 'error' : ''}`}>Обязательно для регистрации</span>}*/}
                {/*            <span id="phoneError" className="error"></span>*/}
                {/*        </label>*/}

                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <label className={'popup-p-center p-span'}>*/}
                {/*            <input*/}
                {/*                type="checkbox"*/}
                {/*                id="rules2"*/}
                {/*                className={`input-checkbox ${!agree5Checked ? 'error' : ''}`}*/}
                {/*                onChange={handleAgree5Change}*/}
                {/*                required*/}

                {/*            />*/}
                {/*            <span className={`custom-checkbox ${!agree5Checked ? 'error' : ''}`}></span>*/}
                {/*            <p>Я согласен на обработку <br></br>моих <a href={`${currentDomain}/politika_pd_omi.pdf`} className={"text-laimon"} target="_blank">Персональных данных</a></p>*/}
                {/*            {!agree5Checked && <span className={`error-message check-box-error-second ${!agree5Checked ? 'error' : ''}`}>Обязательно для регистрации</span>}*/}
                {/*            <span id="phoneError" className="error"></span>*/}
                {/*        </label>*/}
                {/*    </div>*/}
                {/*    <div className="register-button-container">*/}
                {/*        <button*/}
                {/*            type="submit"*/}
                {/*            id="submit-r"*/}
                {/*            className={`register-button ${isLoading ? 'disabled' : ''}`}*/}
                {/*            disabled={isLoading}*/}
                {/*        >*/}
                {/*            {isLoading ? 'Зарегистрироваться' : 'Зарегистрироваться'}*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*    <div className="popup-p-center down">*/}
                {/*        <p>Уже есть аккаунт? <a onClick={openPopupLogin} className="text-laimon">Войти</a></p>*/}
                {/*    </div>*/}

                </div>
            </form>

            {/*<button onClick={togglePopup}>Закрыть</button>*/}
        </Modal>
        </div>
    )
}

