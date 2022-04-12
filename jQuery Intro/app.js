// console.log($);          Check the working of jQuery

// General syntax of jQuery

/*
    $('<selector'>).action()
        Eg: $('p').hide()
*/

// First Program ==> do this when h1 tag is clicked

$('h1').click(function (){      // don't use arrow function
    console.log("You clicked on <h1>");

    // $('h1').hide()      // hides all the h1 tags
    $(this).hide()          // Hides the specific object that is clicked upon
})
