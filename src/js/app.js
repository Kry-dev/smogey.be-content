const $ = require('jquery');
const slick = require('slick-carousel');
//const popper = require('popper');
const bootstrap = require('bootstrap');

//import {scrollFunction, topFunction} from "common/scrollTop";

//= ../../node_modules/jquery/dist/jquery.js
//= ../../node_modules/popper.js/dist/umd/popper.js
//= ../../node_modules/bootstrap/js/dist/util.js
//= ../../node_modules/bootstrap/js/dist/tooltip.js
//= ../../node_modules/bootstrap/js/dist/dropdown.js
//= ../../node_modules/bootstrap/js/dist/modal.js
//= ../../node_modules/bootstrap/js/dist/collapse.js
//= ../../node_modules/bootstrap/js/dist/tab.js
const topFunction = function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;

};

$(document).ready(function() {
    $("#hideSearch").on('click', function(){

        console.log("click");
        $(".showSearch").slideUp();
    });

    $("#showSearch").click(function(){
        $(".showSearch").slideDown();
    });
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrollTop").style.display = "block";
        } else {
            document.getElementById("scrollTop").style.display = "none";
        }
    };
    $("#scrollTop").on("click", function () {
        topFunction();
    });

    $("#categories").slick({
        rows: 2,
        slidesToShow: 6,
        centerMode: true,
        // the magic
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                infinite: true
            }

        }, {

            breakpoint: 600,
            settings: {
                rows: 1,
                centerMode: false,
                slidesToShow: 3
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });

    // $('[data-toggle="collapse"]').collapse('hide');

    $('body, html').not('#filterShow').click(function (e) {
        if($('#wrapper').hasClass('toggled') && !$(e.target).is('#filterShow. #sidebar-wrapper, #sidebar-wrapper *')){
            $('#filterShow').trigger('click');
        }
    });
    $('#filterShow').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('fixed');
        $('#wrapper').toggleClass('toggled');

    })

});