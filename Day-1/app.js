$(document).ready(function() {
    $('p').click(function(){
        console.log('You clicked on P', this);          // Will print the whole details of the element when the specified element is clicked
    })

    // NOTE: When the page loads then the jQuery automatically runs

    // ID Selector
    $('#first').click();

    // Events in jQuery
    // Mouse Events = click, dblclick, moueenter, mouseleave
    // Form Event = submit, change, focus, blur
    // Keyboard Event = keypress, keydown, keyup
    // Document /Window events = load, resize, scroll, unload

    // Double CLick Event
    $('#clickMe').dblclick(function(){
        console.log("You double clicked the button.");
    })

    // Mouse Enter event
    $('#clickMe').mouseenter(function(){
        console.log("Mouse Entered.");
    })

    // Mouse Leave event
    $("#clickMe").mouseleave(function(){
        console.log('Mouse Left.');
    })

    // Hover Event
    $("#clickMe").hover(function(){
        console.log("Mouse Hovering.");
    })
})