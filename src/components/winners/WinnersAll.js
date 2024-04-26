import React, {useEffect, useRef, useState} from "react";
import lemondots from "../../image/lemon.png";
import dotslemon from "../../image/Dots.svg";
import logo2 from "../../image/logo2.png";
import ControlledAccordions from "../Example";
import Footer from "../Footer";
import tree5555 from "../../image/img_25.png";
import tree6666 from "../../image/img_26.png";
import Example from "../Example";
import {Link, useLocation} from "react-router-dom";
import winnersprize from "../../image/img_21.png";
import gps from "../../image/img_5.png";
import berry from "../../image/img_22.png";
import lastone from "../../image/img_24.png";
import axios from "axios";
import SliderSearch from "./SliderSearch";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

export default function WinnersAll(props) {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
        document.body.style.overflow = showPopup ? 'auto' : 'hidden';

    };
    const handleImageClick = () => {
        window.location.href = '/'
    };
    const [phoneInput, setPhoneInput] = useState('');
    const [registrationError, setRegistrationError] = useState('');
    const [winners, setWinners] = useState([]);
    const [totalPages, setTotalPages] = useState(null); // Используем useState для хранения значения totalPages
    let [currentPage, setCurrentPage] = useState(1); // Используем useState для хранения значения currentPage
    const [selectedPage, setSelectedPage] = useState(currentPage);
    const pageNumbersRef = useRef(null);
    const listRef = useRef(null);

    const handleSearch = () => {
        const apiUrl = `https://nloto-promo.ru/backend/api/winners?phone=${phoneInput}`;

        // Дополнительная логика для обработки поиска
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setCurrentPage(data.page);
                setTotalPages(data.pages);

                const winnersWithMatchingPhone = data.data.items;
                setWinners(winnersWithMatchingPhone);
                const totalPages = data.data.pages;
                setTotalPages(totalPages || 1); // Set totalPages to 1 if it is falsy
                setCurrentPage(1);
                console.log("Запустил победителей");
            })
            .catch((error) => {
                console.log(error);
            });
    };



    const [isActive, setIsActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');

    const selectToggle = () => {
        setIsActive(!isActive);
    };

    const selectChoose = (text) => {
        const apiUrl = `https://nloto-promo.ru/backend/api/winners?date=${text}`;

        // Сохраняем предыдущее значение выбора
        const previousSelectedItem = selectedItem;

        // Дополнительная логика для обработки поиска
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setSelectedItem(previousSelectedItem); // Используем сохраненное значение выбора
                setIsActive(false);
                setWinners(data.data.items);

                const totalPages = data.data.pages;
                setTotalPages(totalPages || 1); // Set totalPages to 1 if it is falsy
                setCurrentPage(1);
                console.log("Выбрали дату");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const fetchWinners = async (page = 1, text) => {
        try {
            const response = await axios.get(
                `https://nloto-promo.ru/backend/api/winners?page=${page}`
            );

            const totalPages = response.data.data.pages;
            setTotalPages(totalPages || 1); // Set totalPages to 1 if it is falsy
            const data = response.data.data.items;

            setWinners(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchWinners().catch((error) => {
            console.log(error);
        });
    }, []);




    function toggleDropdown() {
        const dropdown = document.getElementById("monthPicker");
        dropdown.classList.toggle("open");
    }

// Получаем список элементов выпадающего списка
    const dropdownItems = document.querySelectorAll('.select-custom-dropdown-item');

// Добавляем обработчик события для каждого элемента
    dropdownItems.forEach(item => {
        item.addEventListener('click', (event) => {
            // Получаем выбранный элемент
            const selectedItem = event.target.textContent;
            // Обновляем текст внутри span с классом selected-item
            const selectedSpan = document.querySelector('.selected-item');
            selectedSpan.textContent = selectedItem;
            // Закрываем выпадающий список
            const dropdown = document.getElementById('monthPicker');
            dropdown.classList.remove('open');
        });
    });


    useEffect(() => {
        const pageNumbers = pageNumbersRef.current;
        const listElement = listRef.current;

        const prevPage = document.getElementById('prevPage');
        const nextPage = document.getElementById('nextPage');
        const pageNumbersContainer = document.getElementById('pageNumbersContainer');

        if (prevPage) {
            prevPage.addEventListener('click', handlePreviousClick);

        }

        if (nextPage) {
            nextPage.addEventListener('click', handleNextClick);

        }
        if (pageNumbersContainer) {
            pageNumbersContainer.addEventListener('click', handlePageNumberClick);

        }


        function handlePageNumberClick(event) {
            const pageNumber = event.target.dataset.pageNumber;

            // Обработка клика по номеру страницы
            if (pageNumber) {
                const updatedPageNumber = parseInt(pageNumber);
                setCurrentPage(updatedPageNumber);
                renderPageNumbers();
                updateButtonStates();
                moveList(); // Двигаем элементы списка
                fetchWinners(updatedPageNumber, selectedItem); // Вызов функции fetchWinners с актуальными значениями currentPage и selectedItem

            }
        }

        function handlePreviousClick() {
            if (currentPage > 1) {
                currentPage--;
                renderPageNumbers();
                updateButtonStates();
                moveList(); // Двигаем элементы списка
                fetchWinners(currentPage);

            }
        }

        function handleNextClick() {
            if (currentPage < totalPages) {
                currentPage++;
                renderPageNumbers();
                updateButtonStates();
                moveList(); // Двигаем элементы списка
                fetchWinners(currentPage);


            }
        }


        function updateButtonStates() {
            const maxPageElement = document.getElementById('maxPage');
            if (maxPageElement) {
                maxPageElement.innerText = totalPages;
            }
            const prevPageButton = document.getElementById('prevPage');
            const nextPageButton = document.getElementById('nextPage');

            if (prevPageButton) {
                prevPageButton.disabled = currentPage === 1;
            }

            if (nextPageButton) {
                nextPageButton.disabled = currentPage === totalPages;
            }
        }

        function renderPageNumbers() {
            if (pageNumbersRef.current && totalPages > 0) {
                // Очистить контейнер номеров страниц
                pageNumbersRef.current.innerHTML = '';
            }
            const showFirstEllipsis = currentPage > 2;
            const showLastEllipsis = currentPage < totalPages - 2;
            let startPage;
            let endPage;

            if (showFirstEllipsis && showLastEllipsis) {
                startPage = currentPage - 1;
                endPage = currentPage + 1;
            } else if (showFirstEllipsis && !showLastEllipsis) {
                startPage = totalPages - 2;
                endPage = totalPages;
            } else if (!showFirstEllipsis && showLastEllipsis) {
                startPage = 1;
                endPage = Math.min(3, totalPages);
            } else {
                startPage = 1;
                endPage = totalPages;
            }

            if (showFirstEllipsis) {
                const ellipsisStart = document.createElement('span');
                ellipsisStart.innerText = '...';
                ellipsisStart.classList.add('page-number');
                pageNumbers.appendChild(ellipsisStart);
            }

            for (let i = startPage; i <= endPage; i++) {
                if (i === totalPages && currentPage !== totalPages) {
                    continue;
                }
                const span = document.createElement('span');
                span.innerText = i;
                span.id = `page-${i}`;
                span.classList.add('page-number');
                span.setAttribute('data-page-number', i);
                if (i === currentPage) {
                    span.classList.add('active');
                }
                span.addEventListener('click', function () {
                    currentPage = i;
                    updateButtonStates();
                    renderPageNumbers();
                    moveList(); // Двигаем элементы списка
                });
                span.addEventListener('mouseover', function () {
                    if (!span.classList.contains('active')) {
                        span.classList.add('hover');
                    }
                });
                span.addEventListener('mouseout', function () {
                    span.classList.remove('hover');
                });

                pageNumbers.appendChild(span);
            }

            if (showLastEllipsis) {
                const ellipsisEnd = document.createElement('span');
                ellipsisEnd.innerText = '...';
                ellipsisEnd.classList.add('page-number');
                pageNumbers.appendChild(ellipsisEnd);
            }
            const lastPageElement = document.createElement('span');
            lastPageElement.innerText = totalPages;
            lastPageElement.classList.add('page-number');
            lastPageElement.addEventListener('click', function () {
                setCurrentPage(totalPages);
                updateButtonStates(); // Обновить состояние кнопок
                renderPageNumbers();
                fetchWinners(totalPages, selectedItem);
                moveList();
            });

            if (currentPage !== totalPages) { // Only show the last page element when there are more than two pages or the total pages is two
                pageNumbers.appendChild(lastPageElement);
            }

        }


        function moveList() {
            const activeElement = listElement.querySelector(`#page-${currentPage}`);
            if (activeElement) {
                activeElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center',
                });
            } else if (currentPage > 3) {
                const firstPageElement = listElement.querySelector(`#page-1`);
                if (firstPageElement) {
                    const ellipsisElement = document.createElement('span');
                    ellipsisElement.textContent = '...';

                    listElement.insertBefore(ellipsisElement, firstPageElement);

                    ellipsisElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center',
                    });
                }
            }
        }
        renderPageNumbers();
    }, [totalPages, currentPage]); /* currentPage буду убирать*/






    let select = function () {
        let selectHeader = document.querySelectorAll('.select-header');
        let selectItem = document.querySelectorAll('.select-item');

        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle)
        });

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        })

        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
        }
        function selectChoose() {
            let text = this.innerText,
                select = this.closest('.select'),
                currentText = select.querySelector('.select-current');
            currentText.innerText = text;
            select.classList.remove('is-active');
        }
    };
    select();

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const activeSection = params.get("section"); // Получаем значение параметра "section" из URL

    const prizesRef = useRef(null);
    const winnersRef = useRef(null);

    useEffect(() => {
        if (activeSection === "prizes" && prizesRef.current) {
            setTimeout(() => {
                prizesRef.current.scrollIntoView({ behavior: "smooth" });
            }, 0);
        } else if (activeSection === "winners" && winnersRef.current) {
            setTimeout(() => {
                winnersRef.current.scrollIntoView({ behavior: "smooth" });
            }, 0);
        }
    }, [activeSection]);
    return (
        <header>
            <img src={lemondots} alt="Photo" className="left-photo"/>
            <img src={dotslemon} alt="SVG" className="svg-img"/>
            <div className="header" id="header">

                <div className="logo">
                    <Link to="">
                        <img src={logo2} alt="Logo" onMouseOver={() => { /* Обработчик наведения на картинку */
                        }} onClick={handleImageClick}
                        />
                    </Link>
                </div>
                <div className="menu">
                    <nav className="main-menu">
                        <ul>
                            <li className={'li-rules'}><a href={'#'}>Правила</a></li>
                            <li className={'li-ont'}><a href={'#'}>Призы</a></li>
                            <li className={'li-ont'}><a className={'active-block'} href={'#'}>Победители</a></li>
                            <li className={'li-ont ok'}><a href={'faq'}>Вопросы/ответы</a></li>
                            <li className={'li-lc'}><a href={'#'}>Личный кабинет</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="contact-info">
                    {/*<p>Адрес: Ваш адрес</p>*/}
                    {/*<p>Телефон: Ваш номер телефона</p>*/}
                    {/*<p>Время работы: Ваши рабочие часы</p>*/}
                </div>

            </div>
            <div className={'winners all'} id={'winnersAll'} ref={winnersRef}>
                <div className={'wrapper'}>
                    <div className={'winners-text winners-main center'}>Победители
                    </div>
                    <div className={'winners-text winners-main left'}>Победители недели
                    </div>
                    <SliderSearch/>
                    <div className={'winners-tabs-content'}>
                        <div className={'tab'}>
                            <div className={'tab-inner'}>
                                <div className={'table'}>
                                    <div className={'table-body'}>
                                        <div className={'table-body'}>
                                            <div className="scroll-container">
                                                <div className="scroll-content">
                                            <div className="custom-simple-bar2">
                                                <SimpleBar forceVisible="y" autoHide={false} style={{ maxHeight: 450,
                                                    width: '100%', position: 'absolute'}}>
                                                <div className={'table-body-winners'}>
                                                    <div className={'head-colm-prize1'}>1
                                                    </div>
                                                    <div className={'head-colm-name'}>Анастасия А.
                                                    </div>
                                                    <div className={'head-colm-phone1'}>25982628750
                                                    </div>
                                                    <div className={'head-colm-date1'}>
                                                        <img className={'winners-prize-img'} alt={'Приз'}
                                                             src={winnersprize}/>
                                                    </div>
                                                </div>
                                                <div className={'table-body-winners'}>
                                                    <div className={'head-colm-prize1'}>2
                                                    </div>
                                                    <div className={'head-colm-name'}>Антон Г.
                                                    </div>
                                                    <div className={'head-colm-phone1'}>25982628750
                                                    </div>
                                                    <div className={'head-colm-date1'}>
                                                        <img className={'winners-prize-img'} alt={'Приз'}
                                                             src={winnersprize}/>
                                                    </div>
                                                </div>
                                                <div className={'table-body-winners'}>
                                                    <div className={'head-colm-prize1'}>3
                                                    </div>
                                                    <div className={'head-colm-name'}>Светлана С.
                                                    </div>
                                                    <div className={'head-colm-phone1'}>25982628750
                                                    </div>
                                                    <div className={'head-colm-date1'}>
                                                        <img className={'winners-prize-img'} alt={'Приз'}
                                                             src={winnersprize}/>
                                                    </div>
                                                </div>
                                                <div className={'table-body-winners'}>
                                                    <div className={'head-colm-prize1'}>1
                                                    </div>
                                                    <div className={'head-colm-name'}>Анастасия А.
                                                    </div>
                                                    <div className={'head-colm-phone1'}>25982628750
                                                    </div>
                                                    <div className={'head-colm-date1'}>
                                                        <img className={'winners-prize-img'} alt={'Приз'}
                                                             src={winnersprize}/>
                                                    </div>
                                                </div>
                                                <div className={'table-body-winners'}>
                                                    <div className={'head-colm-prize1'}>1
                                                    </div>
                                                    <div className={'head-colm-name'}>Анастасия А.
                                                    </div>
                                                    <div className={'head-colm-phone1'}>25982628750
                                                    </div>
                                                    <div className={'head-colm-date1'}>
                                                        <img className={'winners-prize-img'} alt={'Приз'}
                                                             src={winnersprize}/>
                                                    </div>
                                                </div>
                                                <div className={'table-body-winners'}>
                                                    <div className={'head-colm-prize1'}>1
                                                    </div>
                                                    <div className={'head-colm-name'}>Анастасия А.
                                                    </div>
                                                    <div className={'head-colm-phone1'}>25982628750
                                                    </div>
                                                    <div className={'head-colm-date1'}>
                                                        <img className={'winners-prize-img'} alt={'Приз'}
                                                             src={winnersprize}/>
                                                    </div>
                                                </div>
                                                <div className={'table-body-winners'}>
                                                    <div className={'head-colm-prize1'}>1
                                                    </div>
                                                    <div className={'head-colm-name'}>Анастасия А.
                                                    </div>
                                                    <div className={'head-colm-phone1'}>25982628750
                                                    </div>
                                                    <div className={'head-colm-date1'}>
                                                        <img className={'winners-prize-img'} alt={'Приз'}
                                                             src={winnersprize}/>
                                                    </div>
                                                </div>
                                                <div className={'table-body-winners'}>
                                                    <div className={'head-colm-prize1'}>1
                                                    </div>
                                                    <div className={'head-colm-name'}>Анастасия А.
                                                    </div>
                                                    <div className={'head-colm-phone1'}>25982628750
                                                    </div>
                                                    <div className={'head-colm-date1'}>
                                                        <img className={'winners-prize-img'} alt={'Приз'}
                                                             src={winnersprize}/>
                                                    </div>
                                                </div>
                                                <div className={'table-body-winners'}>
                                                    <div className={'head-colm-prize1'}>1
                                                    </div>
                                                    <div className={'head-colm-name'}>Анастасия А.
                                                    </div>
                                                    <div className={'head-colm-phone1'}>25982628750
                                                    </div>
                                                    <div className={'head-colm-date1'}>
                                                        <img className={'winners-prize-img'} alt={'Приз'}
                                                             src={winnersprize}/>
                                                    </div>
                                                </div>
                                                <div className={'table-body-winners'}>
                                                    <div className={'head-colm-prize1'}>1
                                                    </div>
                                                    <div className={'head-colm-name'}>Анастасия А.
                                                    </div>
                                                    <div className={'head-colm-phone1'}>25982628750
                                                    </div>
                                                    <div className={'head-colm-date1'}>
                                                        <img className={'winners-prize-img'} alt={'Приз'}
                                                             src={winnersprize}/>
                                                    </div>
                                                </div>
                                                <div className={'table-body-winners'}>
                                                    <div className={'head-colm-prize1'}>1
                                                    </div>
                                                    <div className={'head-colm-name'}>Анастасия А.
                                                    </div>
                                                    <div className={'head-colm-phone1'}>25982628750
                                                    </div>
                                                    <div className={'head-colm-date1'}>
                                                        <img className={'winners-prize-img'} alt={'Приз'}
                                                             src={winnersprize}/>
                                                    </div>
                                                </div>
                                                <div className={'table-body-winners'}>
                                                    <div className={'head-colm-prize1'}>1
                                                    </div>
                                                    <div className={'head-colm-name'}>Анастасия А.
                                                    </div>
                                                    <div className={'head-colm-phone1'}>25982628750
                                                    </div>
                                                    <div className={'head-colm-date1'}>
                                                        <img className={'winners-prize-img'} alt={'Приз'}
                                                             src={winnersprize}/>
                                                    </div>
                                                </div>

                                            </SimpleBar>
                                            </div>
                                        </div>
                                    </div>
                                            {/*<div className={'winners-all'}>*/}
                                            {/*    <a className={'winners-all-a'} href={'#'}>Весь список</a>*/}
                                            {/*</div>*/}
                                            {/*<img className={'bottle-float-left gps-kalin'} src={gps}/>*/}
                                            {/*<img className={'bottle-float-left berry-prizes'} src={berry}/>*/}
                                            {/*<img className={'bottle-float-left down-line-winners'} src={lastone}/>*/}
                                            {/*<p className="absolute-text kalin">Калининград</p>*/}
                                            <div className={'winners-text winners-main second'}>Главный приз
                                            </div>
                                            {/*<p className="absolute-text eka">Екатеринбург</p>*/}
                                            {/*<p className="absolute-text novo">Новосибирск</p>*/}
                                            {/*<p className="absolute-text vlad">Владивосток</p>*/}
                                            {/*<img className={'bottle-float-left gps-eka'} src={gps}/>*/}
                                            {/*<img className={'bottle-float-left gps-novo'} src={gps}/>*/}
                                            {/*<img className={'bottle-float-left gps-vlad'} src={gps}/>*/}
                                            <div className={'table-body-winners mill'}>
                                                <div className={'head-colm-prize1'}>1
                                                </div>
                                                <div className={'head-colm-name'}>Галина Г.
                                                </div>
                                                <div className={'head-colm-phone1'}>25982628750
                                                </div>
                                                {/*<div className={'head-colm-date1'}>*/}
                                                {/*    <img alt="Приз"/>*/}
                                                {/*</div>*/}
                                            </div>

                                            <p id={'pageCount'}></p>
                                            <div id="paginator">

                                                {/*<img src={paginatorLeft} alt="Button" id="prevPage"*/}
                                                {/*     className={'paginatorLeft'}/>*/}
                                                <>


                                                    <div ref={listRef}>
                                                        {/* Список элементов страниц */}
                                                    </div>

                                                    <div ref={pageNumbersRef} id="pageNumbersContainer"
                                                         className="page-numbers-wrapper">
                                                        {/* Кнопки для навигации по страницам */}
                                                    </div>


                                                </>

                                                {/*<img src={paginatorRight} alt="Button" id="nextPage"*/}
                                                {/*     className={'paginatorRight'}/>*/}

                                            </div>

                                        </div>

                                    </div>
                                    <div className={'winners-videos'}>
                                        {/*<a href={'#'}>Показать всех</a>*/}
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <div id="wave-container-test-44">
                    <div id="wave-test-44">
                    </div>
            </div>
        </div>
    <Footer/>
</header>


)
    ;
}