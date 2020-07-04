/*global $, alert, console*/
$(document).ready(function () {
    
    "use strict";
    
    $(".gear-check").click(function () {
      
        $(".color-option").fadeToggle();
      
    });
    var colorLi = $('.color-option ul li'),
        scrollButton = $("#scroll-top");
    
    colorLi
        .eq(0).css('backgroundColor', '#E41B17').end()
        .eq(1).css('backgroundColor', '#177ae4').end()
        .eq(2).css('backgroundColor', '#17e482').end()
        .eq(3).css('backgroundColor', '#e417e0');

    colorLi.click(function () {
        $("link[href*='theme']").
            attr("href", $(this).attr("data-value"));
    });
    
     // Caching The Scroll Top Element
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 800) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
    });
    
    // Click On Button To Scroll Top
    
    scrollButton.click(function () {
        
        $("html,body").animate({ scrollTop : 0 }, 600);
        
    });
    
});
    
    // Loading Screen

$(window).load(function () {
    
    "use strict";
    
    // Loading Elements
    
    $(".loading-overlay .load-wrapp").fadeOut(2000, function () {
        
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(2000, function () {
            
            $(this).remove();
        });
    });
});

