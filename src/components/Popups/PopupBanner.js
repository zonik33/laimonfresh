import React, {useState} from 'react';
import lcexit from "../../image/img_30.png";

export default function PopupBanner ({number}) {
    function openPopupTicket2() {
        closePopup2()
        document.getElementById("popup-end").style.display = "block";
        document.body.classList.add("no-scroll");
    }
    function openPopupAuth() {
        closePopup2()
        document.getElementById("popup-auth").style.display = "block";
    }
    function openPopup() {
        closePopup2()
        document.getElementById("popup").style.display = "block";
    }


    function closePopup2() {
        document.getElementById("popup-ticket-2").style.display = "none";
        localStorage.removeItem('number');
        document.body.classList.remove("no-scroll");
        reloadPage1()
    }

// Функция обновления страницы
    function reloadPage1() {
        window.location.href = window.location.href;
    }
    const [value, setValue] = useState('');

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const sanitizedValue = inputValue.replace(/[^\d]/g, '');
        setValue(sanitizedValue);
    }
    window.addEventListener('beforeunload', function(event) {
        // Удаляем элемент 'number' из localStorage перед обновлением страницы
        localStorage.removeItem('number');
    });

    const [showTooltip, setShowTooltip] = useState(false);

    const openTooltip = () => {
        setShowTooltip(true);
    };
    function reloadPage() {
        window.location.reload();
    }

    const closeTooltip = () => {
        setShowTooltip(false);
    };
    const toggleTooltip = () => {
        setShowTooltip(!showTooltip);
    }
    const handleClick = () => {
        window.location.href = '/profile'
    };

    return (
        <div id="popup-soon5" className="popup-soon5">
            <div className={'blur-filter for-mc'}>
                <div className="popup-content-code" id={"popup-content-soon"}>
                    <span className="close" onClick={closePopup2}>&times;</span>
                    <div className={'container-register-modal'}>
                        <div><span className={'register-main-text'}>Laimonfresh</span>
                            {/*<img className={'bottle-float-left exit-register'} onClick={closeModal} src={lcexit}/>*/}
                        </div>
                        <p className={'register-inputs-text login'}>Акция завершена.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}