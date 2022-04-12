$(document).ready(function() {
    $('p').click(function(){
        console.log('You clicked on P', this);          // Will print the whole details of the element when the specified element is clicked
    })

    // NOTE: When the page loads then the jQuery automatically runs

    // ID Selector
    $('#first').click();
})