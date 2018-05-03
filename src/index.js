import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import './scss/main.scss';


$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tabs').tabs();



    function setHeight() {
        $('.product__img').height($('.product__img').width());
    }
    setHeight();
    $(window).resize(function () {
        setHeight();
    })
});
