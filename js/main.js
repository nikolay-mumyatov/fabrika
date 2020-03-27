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
        card_buttons = $('.catalog-card__buttons');
        
    card.on('click', function(){
        $(this).find(card_buttons).toggleClass('visible');
    });
});


// Появление кнопки в блоке "цены и выды".

$(function () {
    var priceCard = $('.price__item'),
        priceButton = $('.price__button');
    
    priceCard.on('click', function(){
        $(this).find(priceButton).toggleClass('price__button-active');
    });
});