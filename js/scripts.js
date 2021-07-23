$(function () {
    $(".carousel").carousel( { interval: 2000} );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("1").hasClass(fa-pause)) {
            $("carousel").carousel("pause");
            $("carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".caousel").carousel("cycle");
            $("carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });  
});

    $('#reserveButton').click(function() {
        $('#reserveModal').modal('show');
         
    });

    $('#loginButton').click(function() {
        $('#loginModal').modal('show');
        
    });
