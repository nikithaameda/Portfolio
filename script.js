$(document).ready(function(){
    var navDisplay = $( "#technical-skills" );
    var offset = navDisplay.offset();
    $(".navbar").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() >= offset.top - 140) {
            $('.navbar').show();
        } else {
            $('.navbar').fadeOut();
        }
    });
    $(".hamburger").click(function() {
        $(".hamburger-navbar").toggleClass("show");
    });
    $(".nav-link").click(function() {
        $(".hamburger-navbar").toggleClass("show");
    });
});