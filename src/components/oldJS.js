$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.tabs').tabs();

    $('.product-set__item').click(function () {
        $(this)
            .addClass('active')
            .parent()
            .children('span')
            .not(this)
            .removeClass('active')

    })

    function setHeight() {
        $('.product__img').height($('.product__img').width());
    }

    setHeight();
    $(window).resize(function () {
        setHeight();
    })
});
