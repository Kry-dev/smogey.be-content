var $ = require('jquery');
var slick = require('slick-carousel');

$(document).ready(function(){
    $('.new-slider').slick({
        dots: true,
        nextArrow: '<button class="right"><i class="fa fa-arrow-right"></i></button>',
        prevArrow: '<button class="left"><i class="fa fa-arrow-left"></i></button>'
    });
    $('.brands-slider').slick({
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        rows: 1,
        nextArrow: '<button class="right"><i class="fa fa-arrow-right"></i></button>',
        prevArrow: '<button class="left"><i class="fa fa-arrow-left"></i></button>',
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    rows:2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    rows:1
                }
            }
        ]
    });

    var hideTooltip = function () {$('#calendar .calendar-tooltip').removeClass('d-block');};
    $('.btn-tooltip-close').on('click', function () {
        $('.calendar-tooltip').removeClass('d-block');
    });

    $('.events-link').on('click', function() {
        hideTooltip();
        $(this).next('.calendar-tooltip').addClass('d-block');

    });

});