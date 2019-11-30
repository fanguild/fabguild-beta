$(function () {

    var removeseleted = function () {
        $(".middle_bar_1").removeClass("middle_bar_add");
        $(".middle_bar_2").removeClass("middle_bar_add");
        $(".middle_bar_3").removeClass("middle_bar_add");
        $(".middle_bar_4").removeClass("middle_bar_add");
        $(".middle_bar_5").removeClass("middle_bar_add");
        $(".middle_bar_6").removeClass("middle_bar_add");
        $(".middle_bar_7").removeClass("middle_bar_add");
    }

    $(".middle_bar_1").on("click", function () {
        removeseleted();
        var pos = $(".middle_bar").scrollLeft()
        // console.log(pos)
        var posx = pos - 567
        if (posx > 0) {
            $(".middle_bar").scrollLeft(posx)
        }
        $(".middle_bar").animate({ scrollLeft: 410 });
        $(".middle_bar_1").addClass("middle_bar_add");
    })
    $(".middle_bar_2").on("click", function () {
        removeseleted();
        var pos = $(".middle_bar").scrollLeft()
        // console.log(pos)
        var posx = pos - 567
        if (posx > 0 & posx < 10) {
            $(".middle_bar").scrollLeft(posx)
        }
        $(".middle_bar").animate({ scrollLeft: 500 });
        $(".middle_bar_2").addClass("middle_bar_add");
    })
    $(".middle_bar_3").on("click", function () {
        removeseleted();
        var pos = $(".middle_bar").scrollLeft()
        // console.log(pos)
        $(".middle_bar").animate({ scrollLeft: 600 });
        $(".middle_bar_3").addClass("middle_bar_add");
    })
    $(".middle_bar_4").on("click", function () {
        removeseleted();
        var pos = $(".middle_bar").scrollLeft()
        // console.log(pos)
        $(".middle_bar").animate({ scrollLeft: 660 });
        $(".middle_bar_4").addClass("middle_bar_add");
    })
    $(".middle_bar_5").on("click", function () {
        removeseleted();
        var pos = $(".middle_bar").scrollLeft()
        // console.log(pos)
        $(".middle_bar").animate({ scrollLeft: 730 });
        $(".middle_bar_5").addClass("middle_bar_add");
    })
    $(".middle_bar_6").on("click", function () {
        removeseleted();
        var pos = $(".middle_bar").scrollLeft()
        // console.log(pos)
        var posx = pos + 567
        var scroll = 500 - pos
        if (scroll > 0) {
            $(".middle_bar").scrollLeft(posx)
            $(".middle_bar").animate({ scrollLeft: 830 });
        }
        $(".middle_bar").animate({ scrollLeft: 830 });
        $(".middle_bar_6").addClass("middle_bar_add");
    })
    $(".middle_bar_7").on("click", function () {
        removeseleted();
        var pos = $(".middle_bar").scrollLeft()
        // console.log(pos)
        var posx = pos - 567
        var scroll = pos - 720
        var scroll_back = 400 - pos
        if (scroll > 0) {
            $(".middle_bar").scrollLeft(posx)
            $(".middle_bar").animate({ scrollLeft: 350 });
        } else if (scroll_back < 0) {
            $(".middle_bar").animate({ scrollLeft: 350 });
        }
        $(".middle_bar_7").addClass("middle_bar_add");
    })

    $("#footer").on("click", function () {
        $("#footer_menu_1").removeClass("footer_third");
        $("#footer_menu_3").removeClass("footer_first");
        $("#footer_menu_name_1").removeClass("footer_third");
        $("#footer_menu_name_3").removeClass("footer_first");
        $("#footer_menu_1").addClass("footer_first");
        $("#footer_menu_3").addClass("footer_third");
        $("#footer_menu_name_1").addClass("footer_first");
        $("#footer_menu_name_3").addClass("footer_third");
        $(".footer").css({ transform: "rotate(45deg)" })
        $("#footer_back").addClass("footer_back")
        $("#footer_menu_1").css({ transform: "scale(1)" });
        $("#footer_menu_2").css({ transform: "scale(1)" });
        $("#footer_menu_3").css({ transform: "scale(1)" });
        $("#footer_menu_name_1").css({ transform: "scale(1)" });
        $("#footer_menu_name_2").css({ transform: "scale(1)" });
        $("#footer_menu_name_3").css({ transform: "scale(1)" });
    })
    $("#footer_back").on("click", function () {
        $("#footer_menu_1").removeClass("footer_first");
        $("#footer_menu_3").removeClass("footer_third");
        $("#footer_menu_name_1").removeClass("footer_first");
        $("#footer_menu_name_3").removeClass("footer_third");

        $("#footer_menu_1").addClass("footer_third");
        $("#footer_menu_3").addClass("footer_first");
        $("#footer_menu_name_1").addClass("footer_third");
        $("#footer_menu_name_3").addClass("footer_first");

        $(".footer").css({ transform: "rotate(0deg)" })
        $("#footer_back").removeClass("footer_back")

        $("#footer_menu_1").css({ transform: "scale(0)" });
        $("#footer_menu_2").css({ transform: "scale(0)" });
        $("#footer_menu_3").css({ transform: "scale(0)" });

        $("#footer_menu_name_1").css({ transform: "scale(0)" });
        $("#footer_menu_name_2").css({ transform: "scale(0)" });
        $("#footer_menu_name_3").css({ transform: "scale(0)" });
    })

});
