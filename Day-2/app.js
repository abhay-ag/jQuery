/*
    Event Methods == keyboard events
*/

$(document).ready(function(){
    // hide and show events

    // .hide function takes time as milliseconds and takes that time to hide the object.

    // Single parameter

    // $('#learning').hide(4000);

    // Double parameter.
    $('.btn').click(function(){
        $('#learning').hide(3000, function(){
            console.log("Content Hidden");
        })

        $("#learning").show(4000, function(){
            console.log("Content visible");
        })
    })

    // Toggle method performs both hide and show function in the specified time
    $('.btn1').click(function(){
        $("#learning").toggle(1000)
    })

    // fadeIn and fadeOut fadeToggle fadeTo;

    // fadeOut event
    $('.btn3').click(function(){
        $('.test').fadeOut(1000);
    })

    // fadeIn event
    $('.btn2').click(function(){
        $('.test').fadeIn(1000);
    })

    // fadeToggle event
    $('.btn4').click(function(){
        $('.test').fadeToggle(1000);
    })

    // fadeTo uses two parameters, first is the time in milliseconds and second is the opacity
    $('.btn5').click(function(){
        $('.test').fadeTo(1000, 0.2);
    })

    // slideDown, slideUp, slideToggle events

    // slideUp Event
    $('.btn6').click(function(){
        $('.test').slideUp(1000);
    })

    // slideDown event
    $('.btn7').click(function(){
        $('.test').slideDown(1000);
    })

    // slideToggle event
    $('.btn8').click(function(){
        $('.test').slideToggle(1000);
    })

    // ANIMATE Method

    $("#learning").animate({
        opacity: 0.3,
        height: '100px',
        width: '350px'
    }, 2000)

    $(".test").animate({
        opacity: 0.7,
        height: '100px',
        width: '350px'
    }, "slow")
})