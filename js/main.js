// Появление меню.

$(function () {
    var menuBtn = $('.navbar__menu-button'),
        menu = $('.menu');

    menuBtn.on('click', function(){
        menu.toggleClass('menu_active');
    });
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