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
import inputcode from "../../image/img_2.png";
import PopupRegister from "../Popups/PopupRegister";

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
                            <li className={'li-rules'}><a href={'#'}> Правила</a></li>
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
                            <li className={'li-lc'}><a href={'profile'}>Личный кабинет</a></li>
                            <li>
                                <img className={'bottle-float-left show'} src={inputcode}/>
                                <input
                                    type="text"
                                    className={'shadow-button-animation-text'}
                                    onClick={() => openPopup('Register')}
                                    maxLength="20"
                                    readOnly
                                    placeholder=""
                                />
                                {isPopupOpen === 'Register' && (
                                    <PopupRegister showPopup={true} closeModal={closePopup}/>
                                )}
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
                <img className={'bottle-float-left example-tree5'} src={tree5555}/>
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
                                    <b className={'heading-id'}>01</b> <p
                                    className={'heading-name'}>General settings</p>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel1' && <div className={classes.line}></div>}
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                    maximus est, id dignissim quam.
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                    maximus est, id dignissim quam.
                                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                                    maximus est, id dignissim quam.

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
                                <Typography className={classes.heading}><b className={'heading-id'}>02</b> <p
                                    className={'heading-name'}>Users</p></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel2' && <div className={classes.line}></div>}
                                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius
                                    pulvinar
                                    diam eros in elit. Pellentesque convallis laoreet laoreet.
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
                                <Typography className={classes.heading}><b className={'heading-id'}>03</b> <p
                                    className={'heading-name'}>Advanced
                        settings</p></Typography>
                                <Typography className={classes.secondaryHeading}>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel3' && <div className={classes.line}></div>}
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                    eros,
                                    vitae egestas augue. Duis vel est augue.
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
                                <Typography className={classes.heading}><b className={'heading-id'}>04</b> <p
                                    className={'heading-name'}>В чем заключается акция и как принять в ней
                        участие?</p></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel4' && <div className={classes.line}></div>}
                                    Далее получайте призы в рамках проводимой акции!
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
                                    expanded === 'panel5' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}><b className={'heading-id'}>06</b> <p
                                    className={'heading-name'}>Advanced
                        settings</p></Typography>
                                <Typography className={classes.secondaryHeading}>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel5' && <div className={classes.line}></div>}
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                    eros,
                                    vitae egestas augue. Duis vel est augue.
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
                                    expanded === 'panel5' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}><b className={'heading-id'}>07</b> <p
                                    className={'heading-name'}>Advanced
                        settings</p></Typography>
                                <Typography className={classes.secondaryHeading}>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel5' && <div className={classes.line}></div>}
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                    eros,
                                    vitae egestas augue. Duis vel est augue.
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
                                    expanded === 'panel5' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}><b className={'heading-id'}>08</b> <p
                                    className={'heading-name'}>Advanced
                        settings</p></Typography>
                                <Typography className={classes.secondaryHeading}>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel5' && <div className={classes.line}></div>}
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                    eros,
                                    vitae egestas augue. Duis vel est augue.
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
                                    expanded === 'panel5' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}><b className={'heading-id'}>09</b> <p
                                    className={'heading-name'}>Advanced
                        settings</p></Typography>
                                <Typography className={classes.secondaryHeading}>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel5' && <div className={classes.line}></div>}
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                    eros,
                                    vitae egestas augue. Duis vel est augue.
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
                                    expanded === 'panel5' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}><b className={'heading-id'}>10</b> <p
                                    className={'heading-name'}>Advanced
                        settings</p></Typography>
                                <Typography className={classes.secondaryHeading}>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel5' && <div className={classes.line}></div>}
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                    eros,
                                    vitae egestas augue. Duis vel est augue.
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
                                    expanded === 'panel5' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}><b className={'heading-id'}>11</b> <p
                                    className={'heading-name'}>Advanced
                        settings</p></Typography>
                                <Typography className={classes.secondaryHeading}>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel5' && <div className={classes.line}></div>}
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                    eros,
                                    vitae egestas augue. Duis vel est augue.
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
                                    expanded === 'panel5' ? <NorthEastIcon/> : <NorthEastIcon/>
                                }
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography className={classes.heading}><b className={'heading-id'}>12</b> <p
                                    className={'heading-name'}>Advanced
                        settings</p></Typography>
                                <Typography className={classes.secondaryHeading}>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {expanded === 'panel5' && <div className={classes.line}></div>}
                                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
                                    eros,
                                    vitae egestas augue. Duis vel est augue.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <div className={'faq-question'}>
                            <a>info@promo.laimonfresh.ch</a>
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
            <Footer/>
        </header>


    );
}