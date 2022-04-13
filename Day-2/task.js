$(document).ready(function(){

    // // Fires when the key is being pressed
    // $(document).keydown(function(){
    //     console.log("Key is being pressed");
    // })

    // // Fires when the key is stopped pressing
    // $(document).keyup(function(){
    //     console.log("Key is up");
    // })

    // // Fires only when the key is pressed
    // $(document).keypress(function(){
    //     console.log("key pressed");
    // })

    // FORM EVENTS

    $(document).on('submit', '#taskForm', function() {
        return false;
       });

    $("#taskForm").submit(function(){
        console.log("Form submitted");
    })
    $("#taskInput").blur(function(){
        console.log("Focus changed from form");
    })
    $("#taskInput").focus(function(){
        console.log("Focus changed to form");
    })

    // Task - 1
    let i =0;
    $('#keyPI').keypress(function(){
        $('span').text(i += 1)
    })
})