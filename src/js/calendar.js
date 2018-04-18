$(document).ready(function(){
    $('.events-item').click(function (e) {
        e.preventDefault();
        console.log('click');
        var tooltip = $(this).find('.calendar-tooltip');
        $(tooltip).toggle();
    })
};