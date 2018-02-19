module.exports.categories = function () {
    $("#categories").slick({

        // normal options...
        infinite: false,
        rows: 2,
        // the magic
        responsive: [{

            breakpoint: 1170,
            settings: {
                slidesToShow: 7,
                infinite: true
            }

        }, {

            breakpoint: 1024,
            settings: {
                slidesToShow: 7,
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
};