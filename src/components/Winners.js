import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import axios from "axios";
import {useLocation} from "react-router-dom";
import winnersprize from "../image/img_21.png";
import gps from "../image/img_5.png";
import berry from "../image/img_22.png";
import leftlinehow from "../image/img_8.png";
import lastone from "../image/img_24.png";
import prizeImage1 from "../image/img_82.png";
import prizeImage2 from "../image/img_83.png";
import prizeImage3 from "../image/img_84.png";
import prizeImage4 from "../image/img_87.png";
import prizeImage5 from "../image/img_88.png";
import prizeImage6 from "../image/img_89.png";
import prizeImage7 from "../image/img_90.png";
import prizeImage8 from "../image/img_91.png";
import prizeImage9 from "../image/img_92.png";
import prizeImage10 from "../image/img_85.png";
import prizeImage11 from "../image/img_86.png";
import gpsmobile from "../image/gps-mobile.png";


export default function Winners(props) {
    const [phoneInput, setPhoneInput] = useState('');
    const [registrationError, setRegistrationError] = useState('');
    const [totalPages, setTotalPages] = useState(null); // Используем useState для хранения значения totalPages
    let [currentPage, setCurrentPage] = useState(1); // Используем useState для хранения значения currentPage
    const [selectedPage, setSelectedPage] = useState(currentPage);
    const [winnersMain, setWinnersMain] = useState([]);
    const [winners, setWinners] = useState([]);

    useEffect(() => {
        const fetchWinners = async () => {
            try {
                const response = await axios.get('https://promo.laimonfresh.ch/backend/api/getWinners?type=main');
                const winnersData = response.data.data.rows || [];
                setWinners(winnersData);
            } catch (error) {
                console.error('Error fetching winners data:', error);
            }
        };

        fetchWinners();
    }, []);

    useEffect(() => {
        const fetchWinners = async () => {
            try {
                const response = await axios.get('https://promo.laimonfresh.ch/backend/api/getWinners?type=main');
                const winnersData = response.data.data.rows || [];
                setWinnersMain(winnersData);
            } catch (error) {
                console.error('Error fetching winners data:', error);
            }
        };

        fetchWinners();
    }, []);

    const listRef = useRef(null);

    // const handleSearch = () => {
    //     const apiUrl = `https://nloto-promo.ru/backend/api/winners?phone=${phoneInput}`;
    //
    //     // Дополнительная логика для обработки поиска
    //     fetch(apiUrl)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setCurrentPage(data.page);
    //             setTotalPages(data.pages);
    //
    //             const winnersWithMatchingPhone = data.data.items;
    //             setWinners(winnersWithMatchingPhone);
    //             const totalPages = data.data.pages;
    //             setTotalPages(totalPages || 1); // Set totalPages to 1 if it is falsy
    //             setCurrentPage(1);
    //             console.log("Запустил победителей");
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };



    const [isActive, setIsActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [currentWeekWinners, setCurrentWeekWinners] = useState([]);
    const [weekWinners, setWeekWinners] = useState([]);
    useEffect(() => {
        const fetchWeekWinners = async () => {
            try {
                const response = await axios.get('https://promo.laimonfresh.ch/backend/api/getWinners?type=week');
                const data = response.data.data.rows || [];
                setWeekWinners(data);

                // Устанавливаем данные weekWinners в currentWeekWinners
                if (data.length > 0) {
                    setCurrentWeekWinners(data);
                }
            } catch (error) {
                console.error('Error fetching week winners:', error);
            }
        };

        fetchWeekWinners();

    }, []);

    const selectToggle = () => {
        setIsActive(!isActive);
    };

    // const selectChoose = (text) => {
    //     const apiUrl = `https://nloto-promo.ru/backend/api/winners?date=${text}`;
    //
    //     // Сохраняем предыдущее значение выбора
    //     const previousSelectedItem = selectedItem;
    //
    //     // Дополнительная логика для обработки поиска
    //     fetch(apiUrl)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setSelectedItem(previousSelectedItem); // Используем сохраненное значение выбора
    //             setIsActive(false);
    //             setWinners(data.data.items);
    //
    //             const totalPages = data.data.pages;
    //             setTotalPages(totalPages || 1); // Set totalPages to 1 if it is falsy
    //             setCurrentPage(1);
    //             console.log("Выбрали дату");
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    const getWinners = async () => {
        try {
            const response = await axios.get(
                `https://promo.laimonfresh.ch/backend/api/getWinners`
            );
            const data = response.data.data.items;
            setWinners(data);

        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getWinners().catch((error) => {
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
                // fetchWinners(updatedPageNumber, selectedItem); // Вызов функции fetchWinners с актуальными значениями currentPage и selectedItem

            }
        }

        function handlePreviousClick() {
            if (currentPage > 1) {
                currentPage--;
                renderPageNumbers();
                updateButtonStates();
                moveList(); // Двигаем элементы списка
                // fetchWinners(currentPage);

            }
        }

        function handleNextClick() {
            if (currentPage < totalPages) {
                currentPage++;
                renderPageNumbers();
                updateButtonStates();
                moveList(); // Двигаем элементы списка
                // fetchWinners(currentPage);


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


            }

            if (showLastEllipsis) {
                const ellipsisEnd = document.createElement('span');
                ellipsisEnd.innerText = '...';
                ellipsisEnd.classList.add('page-number');

            }
            const lastPageElement = document.createElement('span');
            lastPageElement.innerText = totalPages;
            lastPageElement.classList.add('page-number');
            lastPageElement.addEventListener('click', function () {
                setCurrentPage(totalPages);
                updateButtonStates(); // Обновить состояние кнопок
                renderPageNumbers();
                // fetchWinners(totalPages, selectedItem);
                moveList();
            });



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
    const prizeImages = {
        1: prizeImage1,
        2: prizeImage2,
        3: prizeImage3,
        4: prizeImage4,
        5: prizeImage5,
        6: prizeImage6,
        7: prizeImage7,
        8: prizeImage8,
        9: prizeImage9,
        10: prizeImage10,
        11: prizeImage11,
    };
    const isMobileView = window.innerWidth <= 768;
    return (
        <div className={'winners'} id={'winners'} ref={winnersRef}>
            <div className={'wrapper'}>
                <div className={'winners-text winners-main'}>Победители недели
                </div>
                    <div className={'winners-tabs-content'}>
                        <div className={'tab'}>
                            <div className={'tab-inner'}>
                                <div className={'table'}>
                                    <div className={'table-body'}>
                                        <div className={'table-body'}>
                                            <div
                                                className={`winners-tabs-content ${isMobileView ? 'mobile-view' : ''}`}>
                                                {currentWeekWinners.slice(0, isMobileView ? 4 : 3).map((winner, index) => (
                                                    <div key={index} className={'table-body-winners'}>
                                                        <div className={'head-colm-prize1'}>{index + 1}</div>
                                                        <div className={'head-colm-name'}>{winner.name}</div>
                                                        <div className={'head-colm-phone1'}>{winner.code}</div>
                                                        <div className={'head-colm-date1'}>
                                                            <div className={'winners-block-img'}>
                                                                <img className={'winners-prize-img'} alt={'Приз'}
                                                                     src={prizeImages[winner.prize_id]}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}


                                            </div>
                                            <div className={'example-all-test winners-test'}>
                                                <a className={'winners-all-a winners-test-a'} href={'winners'}>Весь
                                                    список</a>
                                            </div>
                                            <img className={'bottle-float-left gps-kalin'} src={gps}/>
                                            <img className={'bottle-float-left berry-prizes'} src={berry}/>
                                            <img className={'bottle-float-left down-line-winners'} src={lastone}/>
                                            <p className="absolute-text kalin">Калининград</p>
                                            <div className={'winners-text winners-main second'}>Главный призер
                                            </div>
                                            <img className={'bottle-float-left-mobile-gps bon8'} src={gpsmobile}/>
                                            <p className="absolute-text-mobile bon8">Новосибирск</p>
                                            <p className="absolute-text eka">Екатеринбург</p>
                                            <p className="absolute-text novo">Новосибирск</p>
                                            <p className="absolute-text vlad">Владивосток</p>
                                            <img className={'bottle-float-left gps-eka'} src={gps}/>
                                            <img className={'bottle-float-left gps-novo'} src={gps}/>
                                            <img className={'bottle-float-left gps-vlad'} src={gps}/>

                                            {winnersMain && winnersMain.map((winner, index) => (
                                                <div key={index} className={'table-body-winners down'}>
                                                    <div className={'head-colm-prize1'}>{index + 1}</div>
                                                    <div className={'head-colm-name'}>{winner.name}</div>
                                                    <div className={'head-colm-phone1'}>{winner.code}</div>
                                                    <div className={'head-colm-date1'}>
                                                        {/*<img className={'winners-prize-img'} alt={'Приз'}*/}
                                                        {/*     src={prizeImages[winner.prize_id]}/>*/}
                                                    </div>
                                                </div>
                                            ))}


                                            {/*<div className={'table-body-winners down'}>*/}
                                            {/*    <div className={'head-colm-prize1'}></div>*/}
                                            {/*    <div className={'head-colm-name'}></div>*/}
                                            {/*    <div className={'head-colm-phone1'}></div>*/}
                                            {/*    <div className={'head-colm-date1'}>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}

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
        </div>

    )

}