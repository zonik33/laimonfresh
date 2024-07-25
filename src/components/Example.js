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
                expanded={expanded === 'panel15'}
                onChange={handleChange('panel15')}
                className={classes.hoverEffect} // Применяем эффект hover на весь аккордеон
            >
                <AccordionSummary
                    expandIcon={
                        expanded === 'panel15' ? <NorthEastIcon/> : <NorthEastIcon/>
                    }
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography className={classes.heading}><b className={'heading-id'}>01</b> <p
                        className={'heading-name'}>Как собрать карточки городов и участвовать в розыгрыше призов?</p></Typography>
                    <Typography className={classes.secondaryHeading}>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {expanded === 'panel15' && <div className={classes.line}></div>}
                        1. Приобретите продукцию Laimon Fresh, участвующую в акции.
                        <br></br>
                        2. Найдите промокод под крышкой или ключиком.
                        <br></br>
                        3. Перейдите на сайт промо-акции Laimon Fresh и введите промокод в соответствующее
                        поле.
                        <br></br><br></br>
                        1 промокод = 1 карточка.
                        <br></br>
                        <br></br>
                        4. Карточки городов дают возможность участвовать в розыгрыше еженедельных призов.
                        <br></br>
                        5. Соберите пять карточек городов, чтобы принять участие в розыгрыше мерча
                        от Laimon Fresh.
                        <br></br>
                        6. Соберите все десять карточек городов, чтобы стать претендентом на супер приз
                        — 1 миллион рублей на путешествие по России или денежный эквивалент на ваш счёт.

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
                        className={'heading-name'}>Что такое творческий конкурс от Laimon Fresh и как принять в нем участие?
                    </p></Typography>
                    <Typography className={classes.secondaryHeading}>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {expanded === 'panel2' && <div className={classes.line}></div>}
                        Laimon Fresh вместе с блогерами* из Москвы, Санкт-Петербурга, Калининграда, Нижнего
                        Новгорода,
                        Казани, Владивостока, Новосибирска и Екатеринбурга подготовили творческий конкурс.
                        Выполняй задания блогеров с 12 июля по 20 августа и получи возможность
                        выиграть специальный приз – сертификат Cuva на сумму 30.000 рублей на красивые
                        отели!
                        <br></br>
                        Итоги творческого конкурса подводятся в аккаунтах блогеров, ровно через 12 дней
                        после
                        выхода публикации с условиями конкурса. Точные даты творческих конкурсов ищи в
                        аккаунтах
                        блогеров.
                        <br></br>
                        <br></br>
                        Чтобы принять участие в творческом конкурсе, следуй простым правилам:
                        <br></br>
                        <br></br>
                        <b>1. Ищи у 10 блогеров пост с анонсом совместного конкурса с Laimon Fresh и призом
                            в
                            виде сертификата от Cuva на 30.000 рублей.</b><br></br>
                        Внимательно следите за публикациями блогеров в социальных сетях. с 12 июля по ни
                        будут анонсировать конкурс и делиться подробностями о том, как принять участие.
                        Найди эти посты, чтобы быть в курсе всех условий и сроков проведения конкурса.
                        <br></br>
                        <br></br>

                        <b>2. Читай правила.</b><br></br>
                        Обязательно ознакомься с правилами конкурса, которые будут указаны в постах
                        блогеров. Это поможет избежать ошибок и увеличить шансы на победу. Правила могут
                        включать в себя ограничения по времени, необходимость поставить хэштег
                        #летопутешествиеlaimonfresh, отметку места и другие важные детали.
                        <br></br>
                        <br></br>

                        <b>3. Сделай фото в том месте, о котором говорит блогер.</b><br></br>
                        Каждый блогер будет предлагать сделать фото в определенном месте с продукцией Laimon
                        Fresh. Следуйте их указаниям и создайте креативное и оригинальное фото, которое
                        соответствует теме конкурса.
                        <br></br>
                        <br></br>

                        <b>4. Не забудь поставить хэштег #летопутешествиеlaimonfresh.</b><br></br>
                        При публикации фото в социальных сетях обязательно используй хэштег
                        #летопутешествиеlaimonfresh. Это поможет организаторам и блогеру найти работу и
                        учесть ее при подведении итогов конкурса. Без этого хэштега ваше участие может быть
                        не засчитано.
                        <br></br>
                        <br></br>

                        <b>5. Жди объявления результатов.</b><br></br>
                        После завершения конкурса блогеры и организаторы Laimon Fresh объявят
                        результаты.
                        Следите за обновлениями на их страницах в социальных сетях, чтобы узнать, стали
                        ли
                        вы одним из победителей. Победители получат сертификаты от Cuva на сумму 30.000
                        рублей, которые можно использовать для покупки услуг.
                        <br></br>
                        <br></br>


                        <b>*Список блогеров, которые запускают творческий конкурс в социальных сетях:</b>
                        <br></br>
                        <br></br>
                        <div className={'margin-left-17'}>
                            - Регина Рахимова - @Redgisinger - Москва
                            <br></br>
                            - Софа Соло - @soffa_solo - Сочи
                            <br></br>
                            - Михаил Кирсанов - @kirsanov_trip - Санкт-Петербург <br></br>
                            - Дарья Александрова - @aleksandrovaa.aaa - Новосибирск <br></br>
                            - Павел Матвеев - @pavelmatveev - Калининград <br></br>
                            - Юлия Мочкаева - @mochkaaai - Нижний Новгород <br></br>
                            - Платон Горохов - @platonnn_ - Казань <br></br>
                            - Антон Зайцев - @anton_zaytzev6 - Екатеринбург <br></br>
                            - Полина Устименко - @spoliaal - Владивосток <br></br>
                            - Кукачик Фэмели - @kukachik_family - Челябинск <br></br>
                        </div>
                        <br></br>
                        Удачи в конкурсе! Пусть творчество и креативность помогут выиграть призы от
                        Laimon
                        Fresh!


                    </Typography>
                </AccordionDetails>
            </Accordion>
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
                        <b className={'heading-id'}>03</b> <p className={'heading-name'}>Кто является организатором Акции?</p>
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
                        <b className={'heading-id'}>04</b> <p className={'heading-name'}>Где я могу прочесть правила Акции?</p>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {expanded === 'panel3' && <div className={classes.line}></div>}
                        Всю информацию об Акции, а также правилах её проведения можно найти на Официальном сайте Акции  <a className={'black-b'} href={'https://promo.laimonfresh.ch/'}>promo.laimonfresh.ch.</a>

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <div className={'example-all-test'}>
                <a className={'winners-all-a faq'} href={'faq'}>Все вопросы</a>
            </div>
        </div>
    );
}