import lemondots from "../../image/lemon.png";
import dotslemon from "../../image/Dots.svg";
import {Link} from "react-router-dom";
import logo2 from "../../image/logo2.png";
import inputcode from "../../image/img_2.png";
import PopupAddCode from "../Popups/PopupAddCode";
import tree5555 from "../../image/img_80.png";
import tree6666 from "../../image/img_81.png";
import React from "react";
export default function Error(props) {

return(
<header>
    <img src={lemondots} alt="Photo" className="left-photo"/>
    <img src={dotslemon} alt="SVG" className="svg-img"/>
    <div className={'error'} id={'error'}>
        <div className={'wrapper'}>
            <div className={'error-text first'}>Ошибка
            </div>
            <div className={'error-text second'}>404
            </div>
            {/*<img className={'bottle-float-left example-tree5 winners'} src={tree5555}/>*/}
            {/*<img className={'bottle-float-left example-tree6 winners'} src={tree6666}/>*/}
            <div className={'error-text third'}>Кажется что-то пошло не так! <br></br>Страница, которую вы запрашивате,
                не существует. Возможно
                она устарела,<br></br>была удалена, или был введен неверный адрес в адресной строке
            </div>
            <button type={'submit'} id={'submit'} className={'register-button code-down'}><a className={'error-clear'} href={'/'}> Перейти на главную </a>  </button>
        </div>
    </div>
</header>
)
}
