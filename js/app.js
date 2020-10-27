$(document).ready(() => {
    $(".hamburguer").click(() => {
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    });
});