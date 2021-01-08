"use strict";

$(document).ready(function () {

    $(".js-carousel").slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    function addVideoToPage(previewElement, videoElement, video, closeBtn) {
        previewElement.click(function () {
            videoElement.toggle();
            let videoLink = video.attr("src");
            video.attr("src", `${videoLink}&autoplay=1`);
            $(".mainer").css("filter", "blur(20px)");
            closeBtn.click(function () {
                videoElement.hide();
                video.attr("src", `${videoLink}&autoplay=0`);
                $(".mainer").css("filter", "blur(0px)");
            });
        });
    }

    addVideoToPage($(".js-carousel-element-cotton"), $(".js-video-element-cotton"), $(".js-video-element-cotton iframe"), $(".js-video-element-cotton .close"));
    addVideoToPage($(".js-carousel-element-residence"), $(".js-video-element-residence"), $(".js-video-element-residence iframe"), $(".js-video-element-residence .close"));

    $(".js-carousel-element").click(function () {
        let element = $(this);
        let times = 1;
        $(".pop-up").slideToggle();
        $(".bigger").click(function () {
            times += 0.25;
            if (times >= 0) {
                element.css("transform", `scale(${times})`);
            }
        });
        $(".smaller").click(function () {
            times -= 0.25;
            if (times >= 0.25) {
                element.css("transform", `scale(${times})`);
            }
        });
    });

    $(".slick-arrow").click(function () {
        $(".pop-up").hide();
    });


});