$(document).ready(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });
    
    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 300);
    })

AOS.init();

});

$(window).scroll(function() {
if ($(document).scrollTop() > 50) {
$('.navbar').addClass('navbar-expand');
}
else {
$('.navbar').removeClass('navbar-expand'); }

if($(document).scrollTop() > 50) {
    $('.icon-bar').css('background-color', 'black');
}
else{
    $('.icon-bar').css('background-color', 'white')
}
});