//Definire tre variabili, rispettivamente con var, let e const
var nome = 'Aldo';
let cliente = 'cliente';
const numero = 3.14;

document.getElementById('concatena').innerHTML = nome + ', ' + cliente + ', ' + numero;

//Concatenare le variabili precedenti per ottenere lo stesso risultato con un'unica variabile:  
var unica = nome + ', ' + cliente + ', ' + numero;
document.getElementById('concatena2').innerHTML = unica;

//Utilizzare le kevword dichiarative var e let con la stessa variabile, per ottenere i seguenti risultati:

var name1 = 'Mario'
document.getElementById('var').innerHTML = name1;
document.getElementById('final').innerHTML = name1;
document.getElementById('let2').innerHTML = name1;

{
    let name1 = 'Carla';
    document.getElementById('let').innerHTML = name1;
    document.getElementById('let3').innerHTML = name1;
    document.getElementById('final2').innerHTML = name1;
}


/*var name1 = 'Mario';
let name2 = 'Carla';

document.getElementById('var').innerHTML = name1;
document.getElementById('let').innerHTML = name2;
document.getElementById('final').innerHTML = name1;

document.getElementById('let2').innerHTML = name1;
document.getElementById('let3').innerHTML = name2;
document.getElementById('final2').innerHTML = name2;*/


//Manipolare il valore di partenza per ottenere i seguenti risultati:

var number = 15;

document.getElementById('iniziale').innerHTML += number;
document.getElementById('valore1').innerHTML += (number + number) + ', ' + (number + number + 1);
document.getElementById('valore2').innerHTML += (number - 10) + ', ' + (number - 10 - 1);
document.getElementById('valore3').innerHTML += number * 3;
document.getElementById('valore4').innerHTML += number / 3;
document.getElementById('valore5').innerHTML += number + ' ' + 'è un numero';