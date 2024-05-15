import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import lfmint from "../../image/img_93.png";
import lfmint2 from "../../image/img_95.png";
import lfmint3 from "../../image/img_97.png";
import lfmint4 from "../../image/img_99.png";
import lfmint5 from "../../image/img_102.png";
import lfmint6 from "../../image/img_104.png";
import lfmint7 from "../../image/img_106.png";
import lfmint8 from "../../image/img_108.png";
import lfmint9 from "../../image/img_110.png";
import lfmint10 from "../../image/img_112.png";
import nlfmint from "../../image/img_94.png";
import nlfmint2 from "../../image/img_96.png";
import nlfmint3 from "../../image/img_98.png";
import nlfmint4 from "../../image/img_100.png";
import nlfmint5 from "../../image/img_103.png";
import nlfmint6 from "../../image/img_105.png";
import nlfmint7 from "../../image/img_107.png";
import nlfmint8 from "../../image/img_109.png";
import nlfmint9 from "../../image/img_111.png";
import nlfmint10 from "../../image/img_113.png";
import lfmintup from "../../image/img_101.png";
import lfmintfull from "../../image/img_79.png";
// import lfmintfull2 from "../../image/img_80.png";
// import lfmintfull3 from "../../image/img_81.png";
// import lfmintfull4 from "../../image/img_82.png";
import {debounce} from "lodash";

export default function SliderCards() {

    const [isFullImageOpen, setIsFullImageOpen] = useState(false);
    const [numToShow, setNumToShow] = useState(4); // Количество карточек для отображения
    const [selectedImage, setSelectedImage] = useState(null); // Состояние выбранного изображения
    const formatContent = (content) => {
        return content.split("\n").map((line, index) => (
            <p key={index} style={{}}>
                <span dangerouslySetInnerHTML={{ __html: line.trim() }} />
            </p>
        ));
    };

    const moscowText = 'Лето в Москве — время жить свою лучшую жизнь. Можно пешком обойти Бульварное кольцо, прокатиться на роликах в парке Горького и устроить себе прогулку на речном трамвайчике. Но вы и сами это знаете! \n' +
        '\n' +
        'В карточке представлен список "мест силы" в Москве. Места, где особенно остро ощущается “ЛетоПутешествие”:\n' +
        '\n' +
        '1. Смотровая площадка РАН\n' +
        'Да, в Москве до сих пор существует бесплатная смотровая площадка, откуда открывается захватывающий дух вид на Воробьёвы горы, реку, Храм Христа Спасителя, Кремль, “Сити” и другие столичные красоты. Это место постепенно становится всё более популярным, поторопитесь застать его без толпы туристов. \n' +
        '\n' +
        '2. Саввинское подворье \n' +
        'Шедевр архитектуры, который откроется вам, как только вы зайдете в арку дома №6 по Тверской. Приходите сюда, если вам очень хочется ощутить себя в Петербурге, находясь в Москве. \n' +
        '\n' +
        '3. “Сухой” фонтан в Музеоне. \n' +
        'Он называется “сухим”, потому что это просто бьющие из-под земли струи воды и нет привычной чаши. Приходите сюда с друзьями или детьми, чтобы пробежаться босиком, забрызгать друг друга водой и освежиться во время традиционного московского зноя. '


    const formattedMoscowText = formatContent(moscowText);
    const peterText = 'Все привыкли, что это “Северная столица”. Это так. Конечно, здесь идут дожди, бывает маловато солнца, а еще — булки вместо хлеба, белые ночи, самые красивые рассветы и завтраки у разводных мостов. Ловите Топ-3 мест Петербурга, в которых лучше всего ощущается лето:\n' +
        '\n' +
        '1. Подарите себе утреннюю прогулку выходного дня по Петроградской стороне, когда она не заполнена машинами тех, кто там работает. Зайдите в любое кафе, возьмите кофе и сядьте на улице. Послушайте город, посмотрите на людей. Почувствуйте счастье. Вы в Петербурге.\n' +
        '\n' +
        '2. Отправьтесь гулять на Васильевский остров и не успейте на развод моста! Да, всё верно. Искренне желаем вам хотя бы раз в жизни подчиниться воле графика разводных мостов и отдаться судьбе Летопутешествия. С острова открывается роскошный вид на Английскую Набережную, а многие заведения летом работают круглосуточно.\n' +
        '\n' +
        '3. Фестиваль «Алые паруса»\n' +
        'Очевидно, но это и правда самое завораживающее шоу на открытой воде. Каждый год этот праздник становится поводом заново поверить в чудеса. Советуем заранее занимать места и сразу определиться: вы хотите быть в центре событий рядом со всеми людьми или же вам ближе найти уединенную локацию с необычным видом на Неву.  \n'


    const formattedPeterText = formatContent(peterText);
    const KazaText = 'Насладиться летом в Казани можно совершенно по-новому. Вместо традиционных прогулок по паркам, город предлагает необычные места, которые заставят вас надолго запомнить этот летний отдых.\n' +
        '\n' +
        '1. Голубое озеро. Название не обманывает – вода здесь действительно ярко-голубого цвета, и, что удивительно, она сохраняет низкую температуру круглый год. Даже в самый знойный летний день можно освежиться в этом оазисе. Озеро расположено вдали от городской суеты, что дает возможность насладиться природой в полной мере.\n' +
        '\n' +
        '2. Улица Профсоюзная. \n' +
        'Профсоюзная улица стала настоящим центром летних вечеринок. Здесь собираются молодежь и те, кто ищет яркие впечатления. Первым к посещению советуем бар «Соль» — его атмосфера, музыка и разнообразная барная карта создают неповторимое настроение.\n' +
        '\n' +
        '3. Набережная озера Кабан. \n' +
        'Это еще одно уникальное место для летнего отдыха. Здесь можно не только насладиться красивыми видами на озеро, но и активно провести время. Прогулки на велосипедах, роликах или просто уютные пикники на берегу делают эту набережную привлекательной для всех возрастов.\n'


    const formattedKazaText = formatContent(KazaText);

    const SochiText = 'Главный курортный город России славится не только теплым морем и крутым сервисом. Здесь можно найти летние приключения на любой вкус — в нашем топе только захватывающие места и события.\n' +
        '\n' +
        '1.  Зимний театр \n' +
        'Не обращайте внимание на морозное название, на самом деле здесь проводятся теплые и душевные мероприятия. Концерты классической музыки, гастроли российских театров, выступления известных артистов и локальных звезд — выбирайте на свой вкус.\n' +
        '\n' +
        '2. Аул Тхагапш \n' +
        'Идеальное место для тех, кто устал от городской суеты и хочет испытать новые ощущения. Таинственные древние сооружения, живописные склоны гор, реки с кристально чистой водой, плантации фундука и чая — только часть того, что вы здесь встретите.\n' +
        '\n' +
        '3. Парк «Дендрарий»\n' +
        'Где же еще ловить летнее настроение, если не в море цветов? В парке собраны более 1800 видов растений со всего мира, а компанию им составляют прекрасные террасы, скульптуры, живописный пруд с лебедями. Здесь лето — круглый год.\n\n'


    const formattedSochiText = formatContent(SochiText);
    const ChelText = 'Челябинск — не первый город, который приходит на ум, когда строишь планы на лето. Однако, даже здесь можно ощутить вайбы каникул, если знать, в какие уголки города лучше заглянуть: \n' +
        '\n' +
        '\n' +
        '1. Городской Бор\n' +
        'Городской Бор — популярное место для отдыха с множеством пешеходных тропинок, велосипедных маршрутов и уютных мест для пикников. Летом здесь много разных ивентов и фестивалей, выберите тот, который вам по душе и позовите друзей.  \n' +
        '\n' +
        '2. Озеро Смолино\n' +
        'Озеро Смолино — одно из крупнейших озер в Челябинске, отличное место для купания, загорания и водных видов спорта. Чистая вода, живописные виды, кафе и рестораны на берегу делают это место одним из лучших в летний сезон.\n' +
        '\n' +
        '3. Парк Гагарина\n' +
        'Парк имени Ю.А. Гагарина — центр летних развлечений с аттракционами, веревочным парком, зоопарком и мини-гольфом. Здесь часто проводятся концерты и культурные мероприятия, что делает его идеальным для семейного отдыха.\n'


    const formattedChelText = formatContent(ChelText);

    const NijText = 'Нижний — популярное направление для туристов, уставших от пляжей и лежачего отдыха. Здесь хочется гулять и разглядывать. Но что делать, когда уже обошел весь кремль и поднялся на Чкаловскую лестницу? Выбрать место из нашего списка.\n' +
        '\n' +
        '1. Пакгаузы \n' +
        'Эффектные здания на Стрелке, в которых проводятся модные концерты и выставки, появились в новом обличии совсем недавно, и сразу стали точкой притяжения местных жителей и туристов. Идеальное место для вечерних летних прогулок.\n' +
        '\n' +
        '2. Стрит-арт \n' +
        'Нижний Новгород неофициально считается столицей граффити, и вы можете найти в интернете полноценные маршруты по самым интересным работам. Это не типичная безвкусица на заборе, а полноценное искусство с множественными смыслами. Поверьте, оно того стоит.\n' +
        '\n' +
        '3. Набережная Федоровского\n' +
        'Лучшая смотровая площадка Нижнего Новгорода, с которой открывается потрясающий вид на закат. Отличное место, где можно передохнуть после длинной прогулки по городу.\n'


    const formattedNijText = formatContent(NijText);

    const KalText = 'Лето в Калининграде может стать поистине незабываемым благодаря местам, которые открывают город с новой стороны.\n' +
        '\n' +
        '1. Куршская коса. \n' +
        '«Куршская коса» — выдающийся памятник природы. В 2000 году заповедник был внесён в список Всемирного наследия ЮНЕСКО. Здесь растут вековые деревья, здесь перемещаются песчаные дюны, здесь сохранился самобытным животный мир. В Куршском национальном парке водятся редкие животные и пролегает путь миграции птиц. Есть даже своя орнитологическая станция, которой более 100 лет.\n' +
        '\n' +
        '\n' +
        '2. Верхний пруд со смотровой площадкой. Это еще одно место для нетипичного летнего отдыха. Здесь можно арендовать лодку и сделать несколько фотографий башни Врангель — олицетворения старины и истории Калининграда.\n' +
        '\n' +
        '3. Танцующий лес. Настоящее чудо природы! Изогнутые в «бараний рог» деревья и отличная возможность насладиться тишиной, отвлечься от городской суеты. \n'

    const formattedKalText = formatContent(KalText);
    const EkaText = 'Город талантливых рок-музыкантов и смелых, креативных решений — Екатеринбург может показаться суровым, но на самом деле удивляет своим колоритом и разнообразием. Поверьте, впечатления гарантированы!\n' +
        '\n' +
        '1. Ботанический сад Уральского отделения РАН\n' +
        'Это оазис зелени и умиротворения, где вы насладитесь красотой и разнообразием растительного мира. Основанный в 1936 году, этот сад занимает около 50 гектаров, где интересно ученым и туристам. Вы здесь найдете более 5000 видов растений со всего мира, включая редкие и экзотические экземпляры. В саду есть несколько теплиц, где можно увидеть тропические орхидеи и кактусы, а на открытых площадках — флору Урала и Сибири. В саду проходят экскурсии, мастер-классы и фестивали. \n' +
        '\n' +
        '2. Каменные палатки. Скалы-останцы, окутанные мистикой и легендами, притягивают своей загадочной энергетикой. Это место идеально для пеших прогулок и наслаждения природной красотой.\n' +
        '\n' +
        '3. Большой Конный полуостров. Самый экзотический район города, где расположены деревянные бараки, не знавшие ремонта с 1920-х годов. Это место перенесет вас в прошлое! Кстати, недалеко находится пляжный клуб «Куба» с открытым бассейном, который прекрасно дополняет атмосферу района, сочетая историческую аутентичность с современным комфортом.\n'


    const formattedEkaText = formatContent(EkaText);
    const NovoText = 'Провести лето в третьем по величине городе России можно увлекательно и разнообразно. Вот топ-3 места, которые стоит посетить:\n' +
        '\n' +
        '\n' +
        '1. Новосибирский зоопарк\n' +
        'Новосибирский зоопарк — один из крупнейших в России. Летом здесь особенно красиво: цветущие клумбы, зелёные аллеи и множество экзотических животных. Интересные экскурсии и показательные кормления животных добавляют впечатлений.\n' +
        '\n' +
        '\n' +
        '2. Обское море (Новосибирское водохранилище)\n' +
        'Обское море — идеальное место для летнего отдыха. Чистые пляжи, купание, виндсерфинг и кайтбординг ждут активных туристов. Кафе и рестораны на берегу позволяют насладиться прекрасными видами на воду.\n' +
        '\n' +
        '\n' +
        '3. Центральный парк\n' +
        'Центральный парк — сердце летних развлечений в Новосибирске. Аттракционы, прокат велосипедов, концерты и фестивали создают атмосферу веселья. Живописные пруды и аллеи идеально подходят для прогулок. Эти места сделают ваше лето в Новосибирске ярким и незабываемым.\n'


    const formattedNovoText = formatContent(NovoText);
    const VladText = 'Для многих Владивосток ассоциируется с известной песней и с холодными морскими ветрами. Но и здесь можно найти кусочек лета и тепла, главное — знать, где искать!\n' +
        '\n' +
        '1. Орлиное гнездо\n' +
        'Самая высокая смотровая площадка города, с которой открывается прекрасный вид на Золотой мост. Добраться сюда можно всего за несколько минут на ретро-фуникулере. Местные любят провожать здесь закаты, но и рассветы здесь, поверьте, впечатляют. \n' +
        '\n' +
        '2. Миллионка \n' +
        'Первый в России Чайна-таун с уникальным колоритом и вкусной едой. Долгое время квартал разрушался, но не так давно его начали облагораживать: здесь открываются рестораны, проводятся экскурсии, а на стенах домов появляются впечатляющие граффити. \n' +
        '\n' +
        '3. Радиопрозрачный купол\n' +
        'Одно из самых таинственных мест города на месте бывшей военной части. Сегодня это — современный арт-объект на высоте 182 метров над уровнем моря. Атмосферные кадры вам обеспечены!\n'


    const formattedVladText = formatContent(VladText);

    const [profile, setProfile] = useState(null);
    const imageFiles = [lfmint, lfmint2, lfmint3, lfmint4, lfmint5, lfmint6, lfmint7, lfmint8, lfmint9, lfmint10];
    const imageNumber = [nlfmint, nlfmint2, nlfmint3, nlfmint4, nlfmint5, nlfmint6, nlfmint7, nlfmint8, nlfmint9, nlfmint10];
    const imageName = ['Москва', 'Санкт-Петербург', 'Казань', 'Сочи', 'Челябинск', 'Нижний новгород', 'Калининград', 'Екатеринбург', 'Новосибирск', 'Владивосток'];
    const imageNameSecond = ['Нетипичное лето в столице', 'Северная столица лета', 'Лето в сердце Татарстана', 'Приключения не только на пляже', 'Здесь начинается Сибирь и лето', 'Неожиданные впечатления от столицы Приволжья', 'Лето в городе философов', 'Летний диалог культур', 'Лето на Оби', 'Раскрываем восточные секреты'];
    const fullSizedImages = [lfmint, lfmint2, lfmint3, lfmint4, lfmint5, lfmint6, lfmint7, lfmint8, lfmint9, lfmint10];
    const imageNumberFullS = [nlfmint, nlfmint2, nlfmint3, nlfmint4, nlfmint5, nlfmint6, nlfmint7, nlfmint8, nlfmint9, nlfmint10];
    const imageTextOpen = [formattedMoscowText, formattedPeterText, formattedKazaText, formattedSochiText, formattedChelText, formattedNijText, formattedKalText, formattedEkaText, formattedNovoText, formattedVladText];
    let displayCodes;


    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem('profile'));
        setProfile(storedProfile);
    }, []);

    const handleImageClick = (index) => {
        if (!isFullImageOpen) {
            setIsFullImageOpen(true);
            setSelectedImage(index);
            document.body.classList.add("no-scroll");
        }
    };

    const handleFullImageClose = () => {
        setIsFullImageOpen(false);
        setSelectedImage(null);
        document.body.classList.remove("no-scroll");
    };

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "6.57vw",
        slidesToShow: 4,
        speed: 500
    };
    const settingsMobile = {
        className: 'center',
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5555,
        pauseOnHover: true
    };
    const [sliderSettings, setSliderSettings] = useState(settings);
    const handleResize = debounce(() => {
        if (window.innerWidth <= 767) {
            setSliderSettings(settingsMobile);
        } else {
            setSliderSettings(settings);
        }
    }, 200); // Debounce time in milliseconds

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [settingsMobile, settings, handleResize]);

    const renderCard = (index) => {
        const countCodes = (profile && profile.countCodes) || 0;
        displayCodes = Math.min(countCodes, 10);

        const isBlurred = index >= displayCodes;
        const isEnlarged = selectedImage === index;

        const imageIndex = index % imageFiles.length;

        return (
            <div className={`slider-cards-winnersall-img ${isBlurred ? 'blurred' : ''}`} key={index}>
                <a onClick={!isBlurred ? () => handleImageClick(index) : null}>
                    <div className={`green-background ${isEnlarged ? 'enlarge' : ''}  'cursor-pointer' : ''}`}>
                        <img
                            className={`cards-img number ${isEnlarged ? 'enlarge' : ''} ${!isBlurred ? 'cursor-pointer' : ''}`}
                            src={imageNumber[imageIndex]}
                            alt={`Card ${index + 1}`}
                        />
                        <img
                            className={`cards-img ${isEnlarged ? 'enlarge' : ''} ${!isBlurred ? 'cursor-pointer' : ''}`}
                            src={imageFiles[imageIndex]}
                            alt={`Card ${index + 1}`}
                        />
                        <div className={'text-img-name'}>{imageName[imageIndex]}</div>
                        <div className={'text-img-name down'}>{imageNameSecond[imageIndex]}</div>
                        <img
                            className={`cards-img up ${isEnlarged ? 'enlarge' : ''} ${!isBlurred ? 'cursor-pointer' : ''}`}
                            src={lfmintup}
                            alt={`Card ${index + 1}`}
                        />
                    </div>
                </a>
            </div>
        );
    };

    return (
        <div className="slider-container">
            <Slider {...sliderSettings}>
                {[...Array(10).keys()].map(index => renderCard(index))}
            </Slider>
            {isFullImageOpen && (
                <div className="full-image-container">
                    <div className={`full-image-background ${isFullImageOpen ? 'active' : ''}`}
                         onClick={handleFullImageClose}></div>
                    <div className={`green-background-full-image`}>
                        <div className='container-flex-img'>
                        <img
                            className={`cards-img number-open`}
                            src={imageNumberFullS[selectedImage]}
                        />
                        <div className={'text-img-name number-open'}>{imageName[selectedImage]}</div>
                        <div className={'text-img-name down-open'}>{imageNameSecond[selectedImage]}</div>
                        <div className={'text-img-name down-open-down'}>{imageTextOpen[selectedImage]}</div>
                        <div className={'block-block'}><img
                            className="full-image"
                            src={fullSizedImages[selectedImage]}
                            alt="Full Sized Image"
                        /></div>
                    </div>
                    </div>
                </div>
            )}
            <div className={'text-block-inputcode'}>
                <span className={'text-inputcode profile-mobile'}>всего собрано карточек</span>
                <p className={'text-inputcode cards-prize'}>{displayCodes} из 10</p>
            </div>
        </div>
    );
}