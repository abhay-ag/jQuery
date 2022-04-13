/*
    Event Methods == keyboard events
*/

$(document).ready(function(){
    // hide and show events

    // .hide function takes time as milliseconds and takes that time to hide the object.

    $('#learning').hide(3000, function(){
        console.log("Content Hidden");
    })
})