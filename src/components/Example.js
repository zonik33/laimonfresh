import React from 'react';
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

export default function ControlledAccordions() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [panelNumber, setPanelNumber] = React.useState(1); // Хранит текущий номер панели

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handlePanelChange = (panel) => {
        setPanelNumber(panel);
    };

    return (
        <div className={`centered-container ${classes.root}`}>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
            >
                <AccordionSummary
                    expandIcon={expanded === 'panel1' ? <NorthEastIcon /> : <NorthEastIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography className={classes.heading}>01 General settings</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {expanded === 'panel1' && <div className={classes.line}></div>}
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
                    <Typography className={classes.heading}>02 Users</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {expanded === 'panel2' && <div className={classes.line}></div>}
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
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
                    <Typography className={classes.heading}>03 Advanced settings</Typography>
                    <Typography className={classes.secondaryHeading}>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {expanded === 'panel3' && <div className={classes.line}></div>}
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
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
                    <Typography className={classes.heading}>04 В чем заключается акция и как принять в ней
                        участие?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {expanded === 'panel4' && <div className={classes.line}></div>}
                        Для участия в акции Вам необходимо в период с «01» февраля 2024г. по «31» марта 2024г.
                        приобрести от 1 (одного) билета «Мечталлион», «Пять-о-Пять», «12 Добрых дел», «Лавина призов» на
                        сайте nloto.ru или в мобильном приложении «Национальная Лотерея», а также в отделениях Почты
                        России или в магазинах-партнерах. Далее зарегистрировать приобретенный билет в акции «Отмечайте
                        на здоровье», для этого есть несколько вариантов:
                        <br/><br/>

                        <b>Вариант 1:</b>
                        <br/><br/>
                        - перейти на промо-сайт акции nloto-promo.ru;
                        <br/>
                        - пройти регистрацию, то есть создать Личный кабинет на промо-сайте nloto-promo.ru, указав номер
                        мобильного телефона и приняв согласие на обработку персональных данных, установленных настоящими
                        Правилами;
                        <br/>
                        - зарегистрировать приобретенный билет в созданном Личном кабинете. При этом, если лотерейный
                        билет приобретен на сайте nloto.ru, в мобильном приложении «Национальная Лотерея» или в
                        магазинах-партнерах с указанием номера телефона, то регистрировать билет не нужно. После
                        регистрации или авторизации он автоматически появится в вашем Личном кабинете. Если лотерейный
                        билет приобретен в магазинах-партнерах без указания номера мобильного телефона, то после
                        регистрации на промо-сайте nloto-promo.ru в созданном Личном кабинете нажмите на кнопку
                        «Зарегистрировать билеты» введите номер билета.
                        <br/><br/>

                        <b>Вариант 2:</b>
                        <br/><br/>
                        - позвонить по телефону горячей линии 8-800-333-73-33, сообщив, что желаете принять участие в
                        акции «Отмечайте на здоровье»;
                        <br/>
                        - сообщить оператору номер мобильного телефона, на который будет создан Личный кабинет на
                        промо-сайте nloto-promo.ru. Далее Вам поступит смс-уведомление с логином и паролем от входа;
                        <br/>
                        - назвать номер приобретенного билета. При этом, если лотерейный билет приобретен на сайте
                        nloto.ru, в мобильном приложении «Национальная Лотерея» или в магазинах-партнерах с указанием
                        номера телефона, то после регистрации или авторизации он автоматически появится в вашем Личном
                        кабинете. Если лотерейный билет приобретен в магазинах-партнерах без указания номера мобильного,
                        то сообщите номер оператору, который зарегистрирует его в акции.
                        <br/><br/>

                        Далее получайте призы в рамках проводимой акции!
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
                    <Typography className={classes.heading}>05 Advanced settings</Typography>
                    <Typography className={classes.secondaryHeading}>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {expanded === 'panel5' && <div className={classes.line}></div>}
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                        vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}