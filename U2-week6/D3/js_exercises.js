/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dichiara una variabile di nome "myself" e assegnale come valore il tuo nome.
*/

let myself = 'Luigi'
console.log(myself)

/* ESERCIZIO 2
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish', 'chinchilla']
// console.log(pets[0])
// console.log(pets[1])
// console.log(pets[2])
// console.log(pets[3])
// console.log(pets[4])

for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    console.log(element)
}

/* ESERCIZIO 3
    Scrivi del codice per aggiungere all'array pets un nuovo elemento.
*/
pets.push('parrot')
// console.log(pets)

/* ESERCIZIO 4
    Scrivi del codice per rimuovere dall'array pets l'ultimo elemento aggiunto.
*/
pets.pop()

/* ESERCIZIO 5
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.push(pets.shift())

console.log(pets)


/* ESERCIZIO 6
    Cicla gli elementi dell'array pets, e stampa true in console se l'animale comincia con la lettera "c". Stampa false in caso contrario.
*/
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element.slice(0, 1) === 'c') {
        console.log(true)
    } else {
        console.log(false)
    }
}

/* ESERCIZIO 7
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
    {
        brand: 'Ford',
        model: 'Fiesta',
        color: 'red',
        trims: ['titanium', 'st', 'active'],
    },
    {
        brand: 'Peugeot',
        model: '208',
        color: 'blue',
        trims: ['allure', 'GT'],
    },
    {
        brand: 'Volkswagen',
        model: 'Polo',
        color: 'black',
        trims: ['life', 'style', 'r-line'],
    },
]

cars.forEach((p) => {
    p.licensePlate = 12345678;
  });

console.log(cars)



/* ESERCIZIO 8
    Scrivi una funzione per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Alla fine dell'esecuzione, la funzione dovrà ritornare la nuova lunghezza dell'array cars.
*/
function addNewObj (brand, model, color, trims) {
    const newObj = {brand, model, color, trims}
    cars.push(newObj)
    return cars.length
}

 console.log(addNewObj("Fiat", "Panda", "green", "GT"))

 console.log(cars)


/* ESERCIZIO 9
    Scrivi una funzione per per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justFirstTrims", sotto definito.
*/
let justFirstTrims = []
// inserisci la tua funzione qui

function firstTrims() {
    for (let i = 0; i < cars.length; i++) {
      let trim = cars[i].trims[0];
      justFirstTrims.push(trim);
    }
    return justFirstTrims;
  }
  
  console.log(firstTrims());

/* ESERCIZIO 10
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la lunghezza del valore della proprietà "color" è uguale o minore di 4, mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/
for (let index = 0; index < cars.length; index++) {
    if (cars[index].color.length <= 4) {
        console.log('Frizz')
    } else {
        console.log('Buzz')
    } 
}

/* ESERCIZIO 11
    Utilizza il metodo .filter() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    solamente le auto che hanno più di 2 trims disponibili.
*/
let newCarsTrims = cars.filter((car) => car.trims.length > 2)

console.log(newCarsTrims)

/* ESERCIZIO 12
    Utilizza il metodo .map() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    stringhe formate nel seguente modo: "Ford Fiesta", "Peugeot 208" etc.
*/
let mappedCars = cars.map((car) => (car.brand + ' ' +car.model))

console.log(mappedCars)

/* ESERCIZIO 13
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
    6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let indice = 0
while (numericArray[indice] <= 32) {
    console.log(numericArray[indice])
    indice++
}

console.log(numericArray)

/* ESERCIZIO 14
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

let convert = [];

for (let i = 0; i < charactersArray.length; i++) {
  let chart = charactersArray[i].toLowerCase();
  switch (chart) {
    case "a":
      convert.push(1);
      break;
    case "b":
      convert.push(2);
      break;
    case "c":
      convert.push(3);
      break;
    case "d":
      convert.push(4);
      break;
    case "e":
      convert.push(5);
      break;
    case "f":
      convert.push(6);
      break;
    case "g":
      convert.push(7);
      break;
    case "h":
      convert.push(8);
      break;
    case "i":
      convert.push(9);
      break;
    case "l":
      convert.push(10);
      break;
    case "m":
      convert.push(11);
      break;
    case "n":
      convert.push(12);
      break;
    case "o":
      convert.push(13);
      break;
    case "p":
      convert.push(14);
      break;
    case "q":
      convert.push(15);
      break;
    case "r":
      convert.push(16);
      break;
    case "s":
      convert.push(17);
      break;
    case "t":
      convert.push(18);
      break;
    case "u":
      convert.push(19);
      break;
    case "v":
      convert.push(20);
      break;
    case "z":
      convert.push(21);
      break;
  }
}

console.log(convert);
