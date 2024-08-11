import lcexit from "../../image/img_30.png";
import lfu from "../../image/img_123.png";
import lfur from "../../image/img_122.png";
import lfur125 from "../../image/img_125.png";
import lfur124 from "../../image/img_124.png";
import lfur126 from "../../image/img_126.png";
import {Checkbox} from "@mui/material";
import Modal from "react-modal";
import React, {useRef, useState} from "react";
import PhoneInput from "../PhoneInput";
import PopupRegister from "./PopupRegister";
import axios from "axios";
import setAuthToken from "../Api/Api";
export default function PopupU(props) {
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
    return (
        <Modal closeTimeoutMS={300}
               ref={popupRef}
               className={{
                   base: 'Modal-add-u',
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
                       width: '50vw', // Ширина модального окна
                       height: 'auto', // Высота модального окна

                   },
               }}
               contentLabel="Оставить заявку"
        >
            <form id={'form-u'} className={'form-register'}>
                <div className={'container-register-modal'}>
                    <div><span className={'register-main-text u'}>Чем больше призов, тем ярче лето!</span>
                        <img className={'bottle-float-left exit-register-u'} onClick={closeModal} src={lcexit}/>
                    </div>
                    <p className={'register-inputs-text u'}>Зарегистрируйте 2 кода <br></br>12 по 18 августа на сайте
                        акции и участвуйте в дополнительном розыгрыше 50 сертификатов
                        OZON на 1000 и 2000 рублей. <br></br>
                        <br></br>Удачи!<br></br></p>
                    <p className={'register-inputs-mobile'}>Зарегистрируйте 2 кода с 12 по 18 августа на сайте акции
                        и участвуйте в дополнительном розыгрыше призов.
                        50 сертификатов OZON на 1000 или 2000 рублей! </p>
                    <p className={'register-inputs-text u2'}>Ознакомиться с правилами <br></br>С уважением,
                        команда Laimon Fresh!</p>
                    <a className={'link-here'} href="#">здесь</a>
                    <a className={'link-here-mobile'} href="#">к правилам</a>
                    <img className={'bottle-float-left u'} onClick={closeModal} src={lfu}/>
                    <div className="register-button-container">
                    </div>
                </div>
                <img src={lfur126} alt="Right Image" className={'lfur-r-tct'}/>
                <img src={lfur124} alt="Right Image" className={'lfur-r-linef'}/>
                <div className="content-right-u">
                    <img src={lfur} alt="Right Image" className={'lfur-r'}/>
                    <img src={lfur125} alt="Right Image" className={'lfur-r-btl'}/>

                </div>
            </form>
            {/*<button onClick={togglePopup}>Закрыть</button>*/}
        </Modal>
    )
}
