// Появление меню.

$(function () {
    var menuBtn = $('.navbar__menu-button'),
        menu = $('.menu'),
        menuLink = $('.menu__link');

    menuBtn.on('click', function(){
        menu.toggleClass('menu_active');
    });
    menuLink.on('click', function(){
        menu.toggleClass('menu_active');
    });
});


// Плавная прокрутка по якорям.

$(function () {

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        
        if (_href == '#offer'){
            $("html, body").animate({ 
                scrollTop: $(_href).offset().top -220 + "px" 
            }, 900);
            return false;
        } else{
            $("html, body").animate({ 
                scrollTop: $(_href).offset().top -80 + "px" 
            }, 900);
            return false;
        }
    });
});


// Подключение выпадающего списка в первой форме.

 $(function () {
     $('.select').on('click', function(){
         $('.select__dropdown').toggleClass('select__dropdown-open');
     });
     $('.select__option').on('click', function(){
         var selectValue = $(this).attr('data-value');
         $('#select-type').val(selectValue);
         $('.select_cheked').text(selectValue);
     });
 });


// Подключение маски на input с телефоном.

$(function () {
    $('[type="tel"]').mask('+7 (999) 999-99-99');
});


// Появление кнопок в карточке каталога.

$(function () {
    var card = $('.catalog__card'),
        cardButtons = $('.catalog-card__buttons');
        
    card.on('click', function(){
        if ($(this).find(cardButtons).hasClass('visible')) { 
            $(this).find(cardButtons).toggleClass('visible'); // Если класс 'visible' уже есть то убрать его.

        } else {
            $(this).find(cardButtons).toggleClass('visible'); // Если нет, то поставить.
            card.not(this).find(cardButtons).removeClass('visible'); // Убираем класc со всех не активных элементов.
        }
    });
});


// Появление кнопки в блоке "цены и выды".

$(function () {
    var priceCard = $('.price__item'),
        priceButton = $('.price__button');
    
    priceCard.on('click', function(){
        if ($(this).find(priceButton).hasClass('price__button-active')) {
            $(this).find(priceButton).toggleClass('price__button-active'); // Если класс 'price__button-active' уже есть то убрать его.
        } else {
            $(this).find(priceButton).toggleClass('price__button-active'); // Если нет, то поставить.
            priceCard.not(this).find(priceButton).removeClass('price__button-active'); // Убираем класc со всех не активных элементов.
        }
    });
});


// Подключение слайдера блока befor_after с помощью библеотеки twentytwenty.

$(window).load(function() {
    $(".b_a-slider").twentytwenty({
        before_label: 'Без скинали', // Редактируем виджеты ДО и ПОСЛЕ на слайдере.
        after_label: 'Со скинали'
    });

    $('.before_after-slider').slick({
        draggable: false,
        dots: true,
        dotsClass: 'before_after-slider__dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
        touchMove: false
    });
});


// Загрузка карты только когда пользователь до нее докрутит страницу.

$(function () {
    var factoryBlock = $('.factory'),
        factoryBlockTop = factoryBlock.offset().top;

        $(window).bind('scroll', function(){
            var windowNow = $(window).scrollTop();

            if (windowNow > factoryBlockTop) {
                $('#map').html(
                    '<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A5d09cac6837b6f0173700ab8a884b5c9e3a77c8692d60118ca6471653bb0f7fe&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>'
                );
                $(window).unbind('scroll');
            }
        });
});