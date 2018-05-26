$(document).ready(function () {
   /*
    $('.tabs').tabs();*/

    $('.sidenav').sidenav();

  /*  $('.product-set__item').click(function () {
        $(this)
            .addClass('active')
            .parent()
            .children('span')
            .not(this)
            .removeClass('active')

    })*/

    function setHeight() {
        /*!//
        let products = document.querySelectorAll('.product__img')
        console.log('document.querySelector(\'.product__img\')', document.querySelector('.product__img'));
        // const productWidth = document.querySelector('.product__img').style.width
        products.map((product) =>  product.style.height = productWidth)*/
        //
        // $('.product__img').height($('.product__img').width());
    }

    setHeight();
    $(window).resize(function () {
        setHeight();
    })
});
