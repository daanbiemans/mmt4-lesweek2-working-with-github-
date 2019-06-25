$(document).ready(function () {
   

    $('.menu-toggle').click(function () {

        $('.site-nav').toggleClass('site-nav--open', 500);
        $(this).toggleClass('open');

    });


    $('#checkboxDarkInput').change(function () {
        if ($(this).is(":checked")) {
            $('body').addClass('dark');

        } else {
            $('body').removeClass('dark');

        }

    });



    $(function () { 
        $("#accordion").accordion({
            heightStyle: "content",
            header: ".accordioncontent"
        }
        ); 
    });


});

$(document).ready(function () {
    $("video").each(function () {


        var player = videojs(this.id, {});

        $(this).parents(".vid-container").find(".rewindbtn").click(function () {

            player.currentTime(player.currentTime() - 10);

        });
  


        var geklikt = false;

        $(this).parents(".firstcontentpanel").find(".playbtn").click(function () {
            if (!geklikt) {
                player.pause();
                geklikt = true;

            } else {
                player.play();
                geklikt = false;
            }
        });
    });

        $('.checkbtn').click(function () {
            $('.modal-container').css('display', "block")


        });

   

    $('.closebtn').click(function () {
        $('.modal-container').css('display', "none")

    });



    $("video").each(function () {

        var viewed = false;
        var $checkVideo = $(this).parents(".vid-container").find(".checkbtn");

        $checkVideo.click(function () {
            if (!viewed) {
                $(this).parents(".check").find(".watched").show()
                viewed = true;
            }
        });

    });


});