//= ../../../node_modules/jquery/dist/jquery.js
//= ../../../node_modules/bootstrap-sass/assets/javascripts/bootstrap
//= ../../../node_modules/bootstrap-sass/assets/javascripts/bootstrap-sprockets
//= ../../../node_modules/slick-carousel/slick/slick.js


const $ = require('jquery');
// const bootstrap = require('bootstrap-sass');
// const bootstrap-sprockets = require('bootstrap-sass/j');
// // const popper = require('popper.js');
// // const util = require('util');
const slick = require('slick-carousel');




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