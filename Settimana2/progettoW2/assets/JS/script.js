var reset;


function n(dato) {
    if (reset === true) {
        document.getElementById("operazioni").value = '';
        reset = false;
        document.getElementById("operazioni").value += dato;
    } else { }
    document.getElementById("operazioni").value += dato;
}




function operazione() { //esegue operazioni
    document.getElementById("operazioni").value = eval(document.getElementById("operazioni").value);
    reset = true
}

function cancella() { //funzione cancella
    document.getElementById("operazioni").value = "";
}