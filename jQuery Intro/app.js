// console.log($);          Check the working of jQuery

// General syntax of jQuery

/*
    $('<selector'>).action()
        Eg: $('p').hide()
*/

// First Program ==> do this when h1 tag is clicked

$('h1').click(function (){      // don't use arrow function
    console.log("You clicked on <h1>");

    // Element Selector
    // $('h1').hide()      // hides all the h1 tags

    // this Selector
    // $(this).hide()          // Hides the specific object that is clicked upon

    // id Selector Eg: $('#p')
    // class Selector Eg: $('.test')

    $('.test').hide()
    $('#first').hide()
})

// Ensure that jQuery run after the whole page is loaded & Enclose all the jQuery in between of this function
$(document).ready(function (){

})