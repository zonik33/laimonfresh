import React, {useState} from "react";
import lemondots from "../../image/lemon.png";
import dotslemon from "../../image/Dots.svg";
import logo2 from "../../image/logo2.png";
import ControlledAccordions from "../Example";
import Footer from "../Footer";
import tree5555 from "../../image/img_25.png";
import tree6666 from "../../image/img_26.png";
import Example from "../Example";
import {Link, useNavigate} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddIcon from '@material-ui/icons/Add';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import owntreep from "../../image/img_36.png";
import limeright1 from "../../image/img_35.png";
import ScrollPrizes from "../../Scroll/ScrollPrizes";
import ScrollWinners from "../../Scroll/ScrollWinners";
import ScrollFaq from "../../Scroll/ScrollFaq";
import inputcode from "../../image/img_118.png";
import PopupRegister from "../Popups/PopupRegister";
import PopupSuccessCode from "../Popups/PopupSuccessCode";
import PopupSuccessPassword from "../Popups/PopupSuccessPassword";
import PopupSuccessEmail from "../Popups/PopupSuccessEmail";
import PopupPasswordNewStepOne from "../Popups/PopupPasswordNewStepOne";
import PopupPasswordNewStepTwo from "../Popups/PopupPasswordNewStepTwo";
import PopupLogin from "../Popups/PopupLogin";
import PopupSuccessRegister from "../Popups/PopupSuccessRegister";
import PopupAddCode from "../Popups/PopupAddCode";

const useStyles = makeStyles((theme) => ({
    circleIcon: {
        borderRadius: 0, // Начальное значение border-radius для эффекта перехода
        transition: 'border-radius 0.3s', // Добавляем плавный эффект перехода для border-radius
        '&:hover': {
            borderRadius: '50%', // Изменяем border-radius при наведении для создания эффекта круглой формы
        },
    },
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    line: {
        borderTop: '2px solid #ccc',
        margin: '0px 0px 25px 5px', // Увеличиваем вертикальный отступ
        width: '100%',
        backgroundColor: '#fff', // Устанавливаем белый цвет для линии
    },
}));
export default function Faq(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [panelNumber, setPanelNumber] = React.useState(1); // Хранит текущий номер панели

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handlePanelChange = (panel) => {
        setPanelNumber(panel);
    };

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
        document.body.style.overflow = showPopup ? 'auto' : 'hidden';

    };
    const handleImageClick = () => {
        window.location.href = '/'
    };
    const navigate = useNavigate();

    const handleGoToPrizes = (event) => {
        event.preventDefault();
        navigate("/?section=how-prizes"); // Передаем параметр "section" в URL
    };

    const handleGoToWinners = (event) => {
        event.preventDefault();
        navigate("/?section=winners"); // Передаем параметр "section" в URL
    };
    const handleGoToFaq = (event) => {
        event.preventDefault();
        navigate("/?section=faq"); // Передаем параметр "section" в URL
    };

    const [isPopupOpen, setIsPopupOpen] = useState(null);
    const openPopup = (popupName) => {
        if (!isPopupOpen) {
            setIsPopupOpen(popupName);
            document.body.classList.add("no-scroll");
        }
    };

    const closePopup = () => {
        setIsPopupOpen(null);  // Add this line to reset isPopupOpen
        document.body.classList.remove("no-scroll");
    };
    function toggleMenu() {
        const navLists = document.querySelector('.header-burger');
        navLists.classList.toggle('active');
        const navList = document.querySelector('header .menu');
        navList.classList.toggle('show');
        document.documentElement.classList.toggle('menu-open');
        document.body.classList.toggle('menu-open');
    }
    function closeMenu() {
        const navLists = document.querySelector('.header-burger');
        navLists.classList.remove('active');
        const navList = document.querySelector('header .menu');
        navList.classList.remove('show');
        document.documentElement.classList.remove('menu-open'); // Удаление класса 'menu-open' у элемента <html>
        document.body.classList.remove('menu-open');
    }
    const auth_key = localStorage.getItem('auth_key');
    const isAuthenticated = !!auth_key;
    const openPopupLogin = () => {
        document.getElementById("popup-login").style.display = "block";
        document.body.classList.add("no-scroll");
    };
    const currentDomain = window.location.origin;
    return (
        <header>
            <img src={lemondots} alt="Photo" className="left-photo"/>
            <img src={dotslemon} alt="SVG" className="svg-img faq"/>
            <div className="header" id="header">

                <div className="logo">
                    <Link to="">
                    <img src={logo2} alt="Logo" onMouseOver={() => { /* Обработчик наведения на картинку */
                    }} onClick={handleImageClick}
                    />
                    </Link>
                </div>
                <div className={'header-burger'} onClick={toggleMenu}>
                    <span className={'span-burger'}></span>
                </div>
                <div className="menu">
                    <nav className="main-menu">
                        <ul>
                            <li className={'li-rules'}><a href={`${currentDomain}/rules.pdf`}
                                                          target="_blank"> Правила</a></li>
                            <li className={'li-ont'}><a className="smooth" href={'#how-prizes'} onClick={(event) => {
                                closeMenu();
                                handleGoToPrizes(event)
                            }}>Призы</a></li>
                            <li className={'li-ont'}><a className="smooth" href={'#winners'} onClick={(event) => {
                                closeMenu();
                                handleGoToWinners(event)
                            }}>Победители</a></li>
                            <li className={'li-ont'}><a className="smooth active-block" href={'#faq'} onClick={(event) => {
                                closeMenu();
                                handleGoToFaq(event)
                            }}>Вопросы/ответы</a></li>
                            {isAuthenticated ? (
                                <li className={'li-lc'}><a href={'profile'}>Личный кабинет</a></li>
                            ): (
                                <li className={'li-lc'}><a onClick={openPopupLogin}>Войти</a></li>
                            )}
                            <li className={'shadow-dont'}>
                                <img className={'bottle-float-left show'} src={inputcode}/>
                                <div className="main-promo-text-input-new">ввести промокод*</div>
                                <input
                                    type="text"
                                    className={'shadow-button-animation-text'}
                                    onClick={() => openPopup(isAuthenticated ? 'AddCode' : openPopupLogin)}
                                    maxLength="20"
                                    readOnly
                                    placeholder=""
                                />
                                {isPopupOpen === 'AddCode' && isAuthenticated &&
                                    <PopupAddCode showPopup={true} closeModal={closePopup}/>}
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="contact-info">
                    {/*<p>Адрес: Ваш адрес</p>*/}
                    {/*<p>Телефон: Ваш номер телефона</p>*/}
                    {/*<p>Время работы: Ваши рабочие часы</p>*/}
                </div>
                {/*<button onClick={togglePopup} className="btn-leave-request">Оставить заявку</button>*/}
                {/*<Modal closeTimeoutMS={300}*/}
                {/*    className={{*/}
                {/*        base: 'Modal',*/}
                {/*        afterOpen: showPopup ? 'ReactModal__Overlay--after-open' : '',*/}
                {/*        beforeClose: showPopup ? 'ReactModal__Overlay--before-close' : '',*/}
                {/*    }}*/}
                {/*    overlayClassName="Overlay"*/}
                {/*    isOpen={showPopup}*/}
                {/*    onRequestClose={togglePopup}*/}
                {/*    style={{*/}
                {/*        overlay: {*/}
                {/*            backgroundColor: 'rgba(0, 0, 0, 0.5)',*/}
                {/*            zIndex: 9999,*/}
                {/*        },*/}
                {/*        content: {*/}
                {/*            position: 'absolute',*/}
                {/*            top: '50%',*/}
                {/*            left: '50%',*/}
                {/*            transform: 'translate(-50%, -50%)',*/}
                {/*            backgroundColor: '#fff',*/}
                {/*            padding: '20px',*/}
                {/*            borderRadius: '5px',*/}
                {/*            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',*/}
                {/*        },*/}
                {/*    }}*/}
                {/*    contentLabel="Оставить заявку"*/}
                {/*>*/}
                {/*    <input type="text" placeholder="Имя" />*/}
                {/*    <input type="email" placeholder="Email" />*/}
                {/*    <textarea className={'textarea-sms'} placeholder="Сообщение"/>*/}
                {/*    <button>Отправить</button>*/}
                {/*    <button onClick={togglePopup}>Закрыть</button>*/}
                {/*</Modal>*/}
            </div>
            <div className={'accordion-example faq'}>
                <div className={'winners-text for-faq faq'}>Часто задаваемые вопросы
                </div>
                <img className={'bottle-float-left example-tree5-5'} src={tree5555}/>
                <img className={'bottle-float-left example-tree6'} src={tree6666}/>
                <div className={'mega-test'}>
                    <div className={`centered-container ${classes.root}`}>
                        <Accordion
                            expanded={expanded === 'panel1'}
                            onChange={handleChange('panel1')}
                        >
                            <AccordionSummary
                                expandIcon={expanded === 'panel1' ? <NorthEastIcon/> : <NorthEastIcon/>}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography className={classes.heading}>
                                    <b className={'heading-id'}>01</b> <p className={'heading-name'}>Кто является организатором Акции?</p>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel1' && <div className={classes.line}></div>}
                                    <b className={'black-b'}>Заказчиком Акции</b> является юридическое лицо, созданное в соответствии с
                                    законодательством Российской Федерации ООО "ТД "МЕГАПАК" ОГРН 1035000900593, ИНН
                                    5003028050, адрес местонахождения: 142704 Московская область, Ленинский г. о., г.
                                    Видное, территория промзона, ВЗ ГИАП, корпус 453 (далее – Заказчик).
                                    <br></br>
                                    <br></br>
                                    <b className={'black-b'}>Организатор Акции</b> является юридическое лицо, созданное в соответствии с
                                    законодательством Российской Федерации, а именно, Общество с ограниченной
                                    ответственностью «Резонанс Фэмили» ОГРН: 1047855156854, ИНН: 7840309005, адрес
                                    местонахождения: 101000 г. Москва, ул. Мясницкая, д. 38, стр. 1, этаж 4,
                                    помещение 1/4 (далее - Организатор).
                                    <br></br>
                                    <br></br>
                                    <b className={'black-b'}>Оператором Акции</b> является юридическое лицо, созданное в соответствии с
                                    законодательством Российской Федерации, а именно Общество с ограниченной
                                    ответственностью «Аутдор Медиа Интернэшнл», ОГРН 1027700335717, ИНН 7731177750,
                                    адрес местонахождения: 119435, г. Москва, Большой Саввинский пер.9, стр.3 (далее
                                    - Оператор).

                                </Typography>
                            </AccordionDetails>

                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel2'}
                            onChange={handleChange('panel2')}
                            className={classes.hoverEffect} // Применяем эффект hover на весь аккордеон
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded === 'panel2' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}>
                                    <b className={'heading-id'}>02</b> <p className={'heading-name'}>Где я могу прочесть правила Акции?</p>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel2' && <div className={classes.line}></div>}
                                    Всю информацию об Акции, а также правилах её проведения можно найти на Официальном сайте Акции  <a className={'black-b'} href={'https://promo.laimonfresh.ch/'}>promo.laimonfresh.ch.</a>

                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel3'}
                            onChange={handleChange('panel3')}
                            className={classes.hoverEffect} // Применяем эффект hover на весь аккордеон
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded === 'panel3' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}>
                                    <b className={'heading-id'}>03</b> <p className={'heading-name'}>Какая продукция участвует в Акции?</p>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel3' && <div className={classes.line}></div>}

                                    Акция проводится в целях прямого стимулирования сбыта продукции - безалкогольные
                                    газированные напитки, реализуемой Заказчиком Акции, а именно (далее - «Продукты»):
                                    <br></br>
                                    <br></br>
                                    • Laimon Fresh в банке объемом 0.33л, в бутылках объемом 0.5 л, 1 л и 1.5 л
                                    <br></br>
                                    <br></br>

                                    • Laimon Fresh Манго в банке объемом 0.33л, в бутылках объемом 0.5 л, 1 л и 1.5 л
                                    <br></br>
                                    <br></br>

                                    • Laimon Fresh Ягоды в банке объемом 0.33л, в бутылках объемом 0.5 л, 1 л и 1.5 л
                                    <br></br>
                                    <br></br>

                                    • Laimon Fresh Груша в банке объемом 0.33л, в бутылках объемом 0.5 л, 1 л и 1.5 л


                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel4'}
                            onChange={handleChange('panel4')}
                            className={classes.hoverEffect} // Применяем эффект hover на весь аккордеон
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded === 'panel4' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}>
                                    <b className={'heading-id'}>04</b> <p className={'heading-name'}>Сроки проведения Акции?</p>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel4' && <div className={classes.line}></div>}
                                    Общий срок проведения Акции, включая срок выдачи призов: с «15» мая 2024 г. по «30»
                                    сентября 2024 г. (включительно).
                                    <br></br>
                                    Срок совершения необходимой для участия в Акции покупки Продуктов на территории РФ:
                                    с «15» мая 2024 г. по «31» августа 2024 г. (включительно).
                                    <br></br>
                                    Период регистрации Кодов: с «15» мая 2024 г. по «31» августа 2024 г. (включительно).
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel5'}
                            onChange={handleChange('panel5')}
                            className={classes.hoverEffect} // Применяем эффект hover на весь аккордеон
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded === 'panel5' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}>
                                    <b className={'heading-id'}>05</b> <p className={'heading-name'}>Как принять участие в Акции?</p>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel5' && <div className={classes.line}></div>}
                                    Для того чтобы стать Участником Акции, необходимо:
                                    <br></br><br></br>
                                    - совершить покупку согласно п.3.1 Правил и найти под крышкой или ключиком Продукта
                                    уникальный буквенно-цифровой код (далее – Код) ;
                                    <br></br><br></br>
                                    - пройти процедуру регистрации на сайте <a className={'black-b'} href={'https://promo.laimonfresh.ch/'}>promo.laimonfresh.ch.</a> (далее – Сайт Акции),
                                    заполнив все необходимые поля (Имя, адрес электронной почты, город, номер телефона,
                                    создать свой уникальный пароль);
                                    <br></br><br></br>
                                    - дать свое согласие с Правилами Акции (условия обязательное для выполнения);
                                    <br></br><br></br>
                                    - дать свое согласие на обработку и хранение персональных данных (условия
                                    обязательное
                                    для выполнения);
                                    <br></br><br></br>
                                    - пройти процедуру подтверждения электронной почты;
                                    <br></br><br></br>
                                    - авторизоваться на Сайте Акции
                                    <br></br><br></br>
                                    - зарегистрировать Код на Сайте Акции;


                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel6'}
                            onChange={handleChange('panel6')}
                            className={classes.hoverEffect} // Применяем эффект hover на весь аккордеон
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded === 'panel6' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}>
                                    <b className={'heading-id'}>06</b> <p className={'heading-name'}>Что делать, если не получается зарегистрировать код?</p>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel6' && <div className={classes.line}></div>}
                                    Убедитесь, что: <br></br>
                                    - загружаемый код соответствует периоду и условиям Акции;
                                    <br></br>
                                    В случае, если проблема сохранится, напишите нам на адрес электронной почты
                                    info@promo.laimonfresh.ch и опишите проблему.

                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel7'}
                            onChange={handleChange('panel7')}
                            className={classes.hoverEffect} // Применяем эффект hover на весь аккордеон
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded === 'panel7' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}>
                                    <b className={'heading-id'}>07</b> <p className={'heading-name'}>Какие Призы будут разыгрываться в Акции?</p>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel7' && <div className={classes.line}></div>}
                                    1. Гарантированный приз — Подписка Fitmost, 300 000 шт
                                    <br></br>
                                    2. Гарантированный приз — Подписка Wink+more.tv, 1 000 000 шт
                                    <br></br>
                                    3. Гарантированный приз — Подписка Литрес, 2 000 000 шт<br></br>
                                    4. Еженедельный приз — Подписка ВК музыка, 480 шт<br></br>
                                    5. Еженедельный приз — Подписка Яндекс Плюс, 480 шт<br></br>
                                    6. Еженедельный приз — Сертификат ОЗОН, 64 шт<br></br>
                                    7. Еженедельный приз — Сертификат Кассир, 48 шт<br></br>
                                    8. Еженедельный приз — Сертификат Спортмастер, 48 шт<br></br>
                                    9. Еженедельный приз — Сертификат Золотое яблоко, 64 шт<br></br>
                                    10. Еженедельный приз — Сертификат М Видео, 48 шт<br></br>
                                    11. Еженедельный приз — Сертификат МосИгра, 48 шт<br></br>
                                    12. Еженедельный приз — Вк капсула НЕО, 64 шт<br></br>
                                    13. Приз за карточки городов — Панамка 25 шт / Плед 25 шт /<br></br>
                                    14. Приз творческого конкурса — Сертификат Сuva 10<br></br>
                                    15. Главный приз — По выбору Призера денежные средства на счет либо сертификат ОЗОН
                                    Тревел на сумму 1 000 000 рублей, 1 шт


                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel8'}
                            onChange={handleChange('panel8')}
                            className={classes.hoverEffect} // Применяем эффект hover на весь аккордеон
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded === 'panel8' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}><b className={'heading-id'}>08</b> <p
                                    className={'heading-name'}>Как определяются Призеры Акции?</p></Typography>
                                <Typography className={classes.secondaryHeading}>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel8' && <div className={classes.line}></div>}
                                    Призеры  определяются специальной программой в соответствии с порядком установленным в Правил Акции, размещённых на <a className={'black-b'} href={'https://promo.laimonfresh.ch/'}>promo.laimonfresh.ch.</a>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel9'}
                            onChange={handleChange('panel9')}
                            className={classes.hoverEffect} // Применяем эффект hover на весь аккордеон
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded === 'panel9' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}><b className={'heading-id'}>09</b> <p
                                    className={'heading-name'}>Как я могу узнать, выиграл я или нет?</p></Typography>
                                <Typography className={classes.secondaryHeading}>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel9' && <div className={classes.line}></div>}
                                    Оператор  уведомляет Участников Акции, ставших Призерами Акции, посредством отправки сообщения на электронную почту, оставленную Участником во время регистрации на Сайте Акции.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel10'}
                            onChange={handleChange('panel10')}
                            className={classes.hoverEffect} // Применяем эффект hover на весь аккордеон
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded === 'panel10' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}><b className={'heading-id'}>10</b> <p
                                    className={'heading-name'}>Кто оплачивает налог за призы?</p></Typography>
                                <Typography className={classes.secondaryHeading}>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel10' && <div className={classes.line}></div>}
                                    Налог за Приз оплачивает Оператор Акции
                                    <br></br>
                                    Призеры Акции, получившие право на Главный приз, Ежемесячный приз или призы
                                    стоимостью более 4000 (четырех тысяч рублей) для получения Приза обязаны, в течение
                                    5 (пяти) календарных дней с момента получения сообщения на адрес электронной почты
                                    оставленную Участником во время регистрации на Сайте Акции предоставить Оператору
                                    следующую информацию и документы:
                                    <br></br><br></br>
                                    - Копию российского паспорта (Копия должна быть хорошо читаемой), а именно: основную
                                    страницу и страницу с регистрацией по месту жительства (на обозрение исключительно с
                                    целью идентификации личности Призера и проверки на соответствие требованиям
                                    настоящих Правил, а также в целях, указанных в разделе 6 Правил);
                                    <br></br><br></br>
                                    - адрес фактического проживания Призера, с почтовым индексом;
                                    <br></br><br></br>
                                    - номер контактного телефона Призера с кодом города;
                                    <br></br><br></br>
                                    - идентификационный номер налогоплательщика (ИНН);
                                    <br></br><br></br>
                                    - иную информацию и документы, необходимые для получения Приза (сообщаются
                                    Организатором дополнительно).
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel11'}
                            onChange={handleChange('panel11')}
                            className={classes.hoverEffect} // Применяем эффект hover на весь аккордеон
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded === 'panel11' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}><b className={'heading-id'}>11</b> <p
                                    className={'heading-name'}>Могу ли я поменять вещественный приз на денежный?</p></Typography>
                                <Typography className={classes.secondaryHeading}>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel11' && <div className={classes.line}></div>}
                                    Денежный эквивалент стоимости Призов ( кроме Главного Приза) не выплачивается, Призы замене не подлежат.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel12'}
                            onChange={handleChange('panel12')}
                            className={classes.hoverEffect} // Применяем эффект hover на весь аккордеон
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded === 'panel12' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}><b className={'heading-id'}>12</b> <p
                                    className={'heading-name'}>Нет ответа на обращение?</p></Typography>
                                <Typography className={classes.secondaryHeading}>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel12' && <div className={classes.line}></div>}
                                    Организатор вправе не отвечать на вопросы Участников, не касающиеся регистрации кода и получения приза. Организатор отвечает на вопросы, касающиеся участия в Акции в течение 72 часов
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel13'}
                            onChange={handleChange('panel13')}
                            className={classes.hoverEffect} // Применяем эффект hover на весь аккордеон
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded === 'panel13' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}><b className={'heading-id'}>13</b> <p
                                    className={'heading-name'}>Как мне связаться с Организатором?</p></Typography>
                                <Typography className={classes.secondaryHeading}>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel13' && <div className={classes.line}></div>}
                                    Необходимо отправить письмо с запросом на адрес: info@promo.laimonfresh.ch
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            expanded={expanded === 'panel14'}
                            onChange={handleChange('panel14')}
                            className={classes.hoverEffect} // Применяем эффект hover на весь аккордеон
                        >
                            <AccordionSummary
                                expandIcon={
                                    expanded === 'panel14' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}><b className={'heading-id'}>14</b> <p
                                    className={'heading-name'}>Что делать, если возникли вопросы, на которые нет ответов в разделе «Часто задаваемые вопросы»?</p></Typography>
                                <Typography className={classes.secondaryHeading}>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel14' && <div className={classes.line}></div>}
                                    Внимательно прочитайте Правила Акции и данные из раздела «Часто задаваемые вопросы». В случае, если Вы не нашли ответ на свой вопрос, обратитесь в службу технической поддержки по электронной почте на адрес: info@promo.laimonfresh.ch
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <div className={'faq-question'}>
                            <p className={'faq-question-p'}>если у вас остались вопросы, напишите нам</p>
                            <a className={'faq-question-p-a'}>info@promo.laimonfresh.ch</a>
                        </div>
                        <img className={'bottle-float-left example-tree5 faq-down'} src={owntreep}/>
                        <img className={'bottle-float-left lime-faq'} src={limeright1}/>
                    </div>
                </div>

                <div id="wave-container-test-4">
                    <div id="wave-test-4">
                    </div>
                </div>
            </div>
            <PopupSuccessCode/>
            <PopupSuccessPassword/>
            <PopupSuccessEmail/>
            <PopupPasswordNewStepOne/>
            <PopupPasswordNewStepTwo/>
            <PopupLogin/>
            <PopupSuccessRegister/>
            <Footer/>
        </header>


    );
}