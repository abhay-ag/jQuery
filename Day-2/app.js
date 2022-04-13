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
})