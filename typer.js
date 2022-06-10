function typing(param, text)
{

    if (document.getElementById(param).innerHTML == null) {

        document.getElementById(param).innerHTML = text;

    } else {

        document.getElementById(param).innerHTML += text;

    }

}

function typer(param, speed)
{

    var text = document.getElementById(param).innerHTML;

    document.getElementById(param).innerHTML = "";

    i = 0;

    setInterval(function() {

        if (i < text.length) {

            typing(param, text.charAt(i));
            i++;

        }

    }, speed);

}
