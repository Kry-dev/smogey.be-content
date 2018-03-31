const $ = require('jquery');
const slick = require('slick-carousel');
//const popper = require('popper');
const bootstrap = require('bootstrap');

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