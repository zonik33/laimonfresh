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
                    expandIcon={expanded === 'panel1' ? <NorthEastIcon/> : <NorthEastIcon/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography className={classes.heading}>
                        <b className={'heading-id'}>01</b> <p className={'heading-name'}>General settings</p>
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
                    <Typography className={classes.heading}><b className={'heading-id'}>03</b> <p
                        className={'heading-name'}>Advanced
                        settings</p></Typography>
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
                    <Typography className={classes.heading}><b className={'heading-id'}>05</b> <p
                        className={'heading-name'}>Advanced
                        settings</p></Typography>
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
            <div className={'example-all-test'}>
            <a className={'winners-all-a faq'} href={'faq'}>Все вопросы</a>
            </div>
        </div>
    );
}