$(document).ready(function () {

    $(".btn[data-id]").on('click', function () {
        var dataID = $(this).data("id");
        window.location.href = dataID;
    });

    $(".navbar > div").on('click', function () {
        var dataID = $(this).data("id");
        $(this).toggleClass("active");
        $(".navbar > div[data-id != '" + dataID + "']").removeClass("active");
        $(".category[data-id = '" + dataID + "']").slideDown().css({ "display": "flex" });
        $(".category[data-id != '" + dataID + "']").slideUp().css({ "display": "none" });
    });

    $(".navbar > div[data-id = 'work']").trigger("click");

    $(".section-head").on('click', function () {
        var dataID = $(this).data("id")
        $(this).toggleClass("active");
        $(".section-head[data-id != '"+dataID+"']").removeClass("active")
        $(".section-content[data-id = '" + dataID + "']").slideDown();
        $(".section-content[data-id != '" + dataID + "']").slideUp();
    });
});