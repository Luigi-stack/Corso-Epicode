function n(dato) {
    document.getElementById("operazioni").value += dato;
}

function operazione() { //esegue operazioni
    let x = document.getElementById("operazioni").value
    let y = eval(x)
    document.getElementById("operazioni").value = y;
}

function cancella() { //funzione cancella
    document.getElementById("operazioni").value = "";
}