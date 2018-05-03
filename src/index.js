import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import './scss/main.scss';


$(document).ready(function(){
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
