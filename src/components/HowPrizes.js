import React, {useState} from "react";
import million from '../image/img_17.png'
import prizevk from '../image/img_18.png'
import prizeyandex from '../image/img_19.png'
import prizesert from '../image/img_20.png'
import lefttree from "../image/img_4.png";
import toptreeprod from "../image/img_10.png";
import leftlinehow from "../image/img_8.png";
import gps from "../image/img_5.png";
import twotree from "../image/img_23.png";
export default function HowPrizes(props) {
    return (
        <div className={'how-prizes'} id={'how-prizes'}>
            <div className={'wrapper-how-prizes'}>
                <div className={'prizes-text-next'}>Какие призы возможно выиграть?</div>
                <div className={'prizes-content'}>
                    <div className={'left'}>
                        <img className={'million'} src={million} alt="Million"/>
                        <p className={'right-p-name left-down'}>Главный приз</p>
                        <p className={'left-p-name-low'}>собери карточки 10 городов и участвуй в розыгрыше главного
                            приза</p>
                    </div>
                    <div className={'right'}>
                        <p className={'right-p-name'}>еженедельные призы:</p>
                        <div className={'images'}>
                            <div className="image-container">
                                <img src={prizevk} alt="Image"/>
                                <p className={'right-p-prizes'}>Подписка <br></br>VK Music</p>
                            </div>
                            <div className="image-container">
                                <img src={prizeyandex} alt="Image 2"/>
                                <p className={'right-p-prizes'}>Подписка <br></br>Яндекс Плюс</p>
                            </div>
                            <div className="image-container">
                                <img src={prizesert} alt="Image 3"/>
                                <p className={'right-p-prizes'}>Сертификат <br></br>на 1000р</p>
                            </div>
                        </div>
                        <p className={'right-p-name down'}>МОМЕНТАЛЬНЫЕ ПРИЗЫ</p>
                        <div className={'new-block'}>
                        </div>
                    </div>

                </div>
                <img className={'bottle-float-left twotree'} src={twotree}/>
                <img className={'bottle-float-left nv'} src={gps}/>
                <p className="absolute-text nv">Нижний новгород</p>

            </div>
        </div>
    );
}