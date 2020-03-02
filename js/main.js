// Появление меню в десктопной версии.

$(function () {
    var menuBtn = $('.navbar__menu-button'),
        menu = $('.menu');

    menuBtn.on('click', function(){
        menu.toggleClass('menu_active');
    });
});