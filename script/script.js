$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".navbar").css("background", "blue");
            alert("TEST");
        } else {
            $(".black").css("background", "#fff");
            // alert("TEST");	
        }
    })
})