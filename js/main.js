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