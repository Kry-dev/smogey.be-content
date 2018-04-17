var $ = require('jquery');
// const bootstrap = ('../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js');
var slick = require('slick-carousel');

$( document ).ready(function(){
    $('.new-slider').slick({
        dots: true,
        nextArrow: '<button class="right"><i class="fa fa-arrow-right"></i></button>',
        prevArrow: '<button class="left"><i class="fa fa-arrow-left"></i></button>'
    });
    $('.brands-slider').slick({
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: '<button class="right"><i class="fa fa-arrow-right"></i></button>',
        prevArrow: '<button class="left"><i class="fa fa-arrow-left"></i></button>'
    });

});