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
import biglinemobile from "../image/img_38.png";
import owntreep from "../image/img_36.png";

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

            <img className={'bottle-float-left-mobile bigline-mobile'} src={biglinemobile}/>
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
            <div className={'example-all-test'}>
                <a className={'winners-all-a faq'} href={'faq'}>Все вопросы</a>
            </div>
        </div>
    );
}