     $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });

        $(".nav_hover").click(
            function () {
                $(this).addClass('on_click');
            });

        $('.nav_hover').click(function (e) {
            $('.nav_hover').removeClass("on_click");
            $(".prepended").remove();
            $(this).addClass("on_click");
            $(this).prepend('<span class="prepended">- </span');
        });