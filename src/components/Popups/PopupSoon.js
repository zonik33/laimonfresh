import lcexit from "../../image/img_30.png";
import fail from "../../image/img_61.png";
import {Checkbox} from "@mui/material";
import Modal from "react-modal";
import React, {useState} from "react";
import PhoneInput from "../PhoneInput";
import PopupRegister from "./PopupRegister";
export default function PopupSoon(props) {
    return (
        <div id="popup-soons" className="popup-soons">
            <div className={"blur-filter-test"}>
                <div className="popup-content-code" id={"popup-content-soon"}>
                    {/*<div className={'container-register'}>*/}
                    {/*    <div>*/}
                    {/*        <span className={'register-main-text soon'}>Осталось совсем чуть-чуть и акция Laimon Fresh начнется!</span>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <span className={'register-main-text soon-white'}>СТАРТ 15 МАЯ</span>*/}
                    {/*    </div>*/}
                    {/*    <div className="register-button-container">*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<button onClick={togglePopup}>Закрыть</button>*/}
                </div>
            </div>
        </div>
    )
}
