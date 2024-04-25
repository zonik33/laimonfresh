import React, {useState} from "react";
import how1 from '../image/img_14.png'
import how2 from '../image/img_15.png'
import how3 from '../image/img_16.png'
import lefttree from "../image/img_4.png";
import toptreeprod from "../image/img_10.png";
import leftlinehow from "../image/img_8.png";
import berry from "../image/img_22.png";
import gps from "../image/img_5.png";
export default function How (props) {

        return (
            <div className={'how'} id={'how'}>
                <p className="absolute-text how">Казань</p>
                <div className={'wrapper-how'}>
                    <div className={'prizes-text'}>Как принять участие в акции?
                    </div>
                    <img className={'bottle-float-left lefttree-how'} src={lefttree}/>
                    <img className={'bottle-float-left top-tree-how'} src={toptreeprod}/>
                    <img className={'bottle-float-left left-line-how'} src={leftlinehow}/>
                    <img className={'bottle-float-left gps-sochi'} src={gps}/>
                    <img className={'bottle-float-left berry'} src={berry}/>
                    <img className={'bottle-float-left gps-chel'} src={gps}/>
                    <div className={'center-container'}>
                        <div className="container-sub">
                            <div className="main-div">
                                <div className="sub-div">
                                    <img src={how1} alt="Image 1"/>
                                    <p className={'sub-div-text'}>Приобрети напиток, участвующий в акции</p>
                                </div>
                                <div className="vertical-line"></div>
                                <div className="sub-div">
                                    <img src={how2} alt="Image 1"/>
                                    <p className={'sub-div-text'}>Найди код <br></br>под крышкой / ключиком</p>
                                </div>
                                <div className="vertical-line"></div>
                                <div className="sub-div">
                                    <img src={how3} alt="Image 1"/>
                                    <p className={'sub-div-text'}>Жди результатов<br></br> и получай призы</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="absolute-text sochi">Сочи</p>
                <p className="absolute-text chel">Челябинск</p>
            </div>
        )
}