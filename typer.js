// Coded by Afrizal F.A - R&D ICWR

function typing(elementID, text)
{

    if (document.getElementById(elementID).innerHTML == null) {

        document.getElementById(elementID).innerHTML = text;

    } else {

        document.getElementById(elementID).innerHTML += text;

    }

}

function typer(elementID, speed)
{

    var text = document.getElementById(elementID).innerHTML;

    document.getElementById(elementID).innerHTML = "";

    i = 0;

    setInterval(function() {

        if (i < text.length) {

            typing(elementID, text.charAt(i));
            i++;

        }

    }, speed);

}
