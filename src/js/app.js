const $ = require('jquery'); // если будет нужен
const slick = require('slick-carousel'); // если будет нужен

//= ../../common/categoriesSlider.js;
//= ../../node_modules/modernizr/bin/modernizr.js

//= ../../node_modules/jquery/dist/jquery.js
//= ../../node_modules/popper.js/dist/umd/popper.js
//= ../../node_modules/bootstrap/js/dist/util.js
//= ../../node_modules/bootstrap/js/dist/tooltip.js
//= ../../node_modules/bootstrap/js/dist/dropdown.js
//= ../../node_modules/bootstrap/js/dist/modal.js
//= ../../node_modules/bootstrap/js/dist/collapse.js
//= ../../node_modules/bootstrap/js/dist/tab.js
//= ../../node_modules/chart.js/dist/chart.
//= ../../node_modules/slick-carousel/slick/slick.js

$(document).ready(function() {
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
                slidesToShow: 2,
                dots: true
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });
});