

$(document).ready(function(){
 $('.header').height($(window).height());
})




$("#topButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#Menu").click(function() {
    $('html, body').animate({
        scrollTop: $("#menu_shmenu").offset().top
    }, 1000);
});

$("#rest").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});


$("#rezerw").click(function() {
    $('html, body').animate({
        scrollTop: $("#rez_stol").offset().top
    }, 1000);
});


$("#contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact_shmontact").offset().top
    }, 1000);
});



















