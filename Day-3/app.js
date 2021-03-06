/*
    What is AJAX?

    Sol. AJAX stand for Asynchronous JavaScript and XML. It is a new technique for creating better, faster, and more interactive web applications with help of XML, HTML, CSS and JavaScript.
*/

/*
    Add new elements:
        1. append() ==> inserts content at the end of the selected element
        2. prepend() ==> inserts content at the beginning of the seleted element
        3. after() ==> inserts content after the selected elements
        4. before() ==> inserts content before the selected elements
*/

$(document).ready(() =>{
    $('#add').click(() => {
        $('p').append("<b>This is appended text.</b>")     // we can also write html in the append selector
    })
    $('#pre').click(() =>{
        $('p').prepend("<b>This is prepended text. </b>")
    })

    $("#addli").click(() =>{
        $('ol').before("<li>Added Before</li>")            // before adds an unordered li to the current list whereas prepend will add a new ordered li to the current list
    })
    $("#befli").click(() => {
        $('ol').after("<li>Added after </li>")              // after adds UL> LI whereas append adds an OL > LI
    })

    $("#preli").click(() =>{
        $('ol').prepend("<li>Added after </li>")
    })
    $("#appli").click(() =>{
        $('ol').append("<li>Added after </li>")
    })

    // adding css to a particular element
    $('#addcss').click(() => {
        $("#learn").css('background-color', 'Green')
    })

    // adding classes to an element
    $('#addclass').click(() =>{
        $("#learn").addClass("class1")
    })

    // emptying the contents of an element
    $("#empty").click(() => {
        $("#learn").empty()
    })

    // Removing an element completely from the html syntax
    $("#rem").click(() => {
        $('#learn').remove()
    })
})