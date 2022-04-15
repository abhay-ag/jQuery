function blink()
{
    $(document).ready(function() {
        $('#blink').fadeOut()
        $('#blink').fadeIn()
    })
}

setInterval(blink, 1000)