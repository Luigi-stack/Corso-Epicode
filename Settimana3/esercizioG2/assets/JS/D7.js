/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log("Esercizio 1:")

function concatStringa(s1, s2) {
  let s3 = s1.slice(0, 2) + s2.slice(-3);
  s3 = s3.toUpperCase();
  console.log(s3)
}

concatStringa("flavio", "luca")

console.log("----------------------------------------")


/* ESERCIZIO 2
  Scrivi una funzione per creare un array di soli valori DISPARI da 1 a 100.
 */

console.log("Esercizio 2: ")

const functionDispari = () => {
  arr2 = [];
  for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
      arr2.push(i);
    }
  }
  console.log(arr2);
};
functionDispari();

console.log("----------------------------------------")


/* ESERCIZIO 3
  Scrivi una funzione per creare un array di soli valori multipli di 5, da 1 a 100.
 */

console.log("Esercizio 3: ")

function multiple() {
  arr3 = []
  for (let i = 5; i <= 100; i++) {
    if (i % 5 === 0) {
      arr3.push(i)
    }
  }
  console.log(arr3)
}
multiple()


console.log("----------------------------------------")

/* ESERCIZIO 4
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */

console.log("Esercizio 4: ")
 
 function arrayRandom(n) {
  arRay = [];
  for(i = 0; i < n; i++) {
    let random = Math.floor(Math.random() * 100);
    arRay.push(random);
  }
  console.log(arRay)
 }

 arrayRandom(10)


console.log("----------------------------------------")


/* ESERCIZIO 5
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

  console.log("Esercizio 5: ")

  const functionPari = (n) => {
    arr2 = [];
    for (let i = 0; i <= n; i++) {
      if (i % 2 === 0) {
        arr2.push(i);
      }
    }
    console.log(arr2);
  };
  functionPari(10);
  
  console.log("----------------------------------------")

/* ESERCIZIO 6
  Scrivi una funzione per sommare a catena i numeri contenuti in un array.
 */

  console.log("Esercizio 6: ")

  arrayNumeri = [2, 4, 10, 20, 6]

  function funzioneSomma() {
    let somma = 0;
    for(i = 0; i < arrayNumeri.length; i++) {
      somma += arrayNumeri[i];
    }
    console.log(somma)
  }
  funzioneSomma(arrayNumeri)

  console.log("----------------------------------------")

/* ESERCIZIO 7
  Scrivi una funzione per incrementare di 1 tutti i valori numerici in un array.
*/

console.log("Esercizio 7: ")

arrayNumeri2 = [1, 2, 3, 4, 5]

function funzioneIncremento() {

  for(i = 0; i < arrayNumeri2.length; i++) {
     arrayNumeri2[i]++;
  }
  console.log(arrayNumeri2)
}
funzioneIncremento(arrayNumeri2)

console.log("----------------------------------------")


/* ESERCIZIO 8
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

console.log("Esercizio 8: ")

stringArray = ['epicode', 'is', 'great'];

/* ESERCIZIO 9 (EXTRA)
  Scrivi una funzione per eliminare solo i valori PARI da un array.
*/

/* ESERCIZIO 10 (EXTRA)
  Scrivi una funzione per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

/* ESERCIZIO 11 (EXTRA)
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
// const movies = [
//   {
//     Title: 'The Lord of the Rings: The Fellowship of the Ring',
//     Year: '2001',
//     imdbID: 'tt0120737',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Lord of the Rings: The Return of the King',
//     Year: '2003',
//     imdbID: 'tt0167260',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Lord of the Rings: The Two Towers',
//     Year: '2002',
//     imdbID: 'tt0167261',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Lord of War',
//     Year: '2005',
//     imdbID: 'tt0399295',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Lords of Dogtown',
//     Year: '2005',
//     imdbID: 'tt0355702',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Lord of the Rings',
//     Year: '1978',
//     imdbID: 'tt0077869',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Lord of the Flies',
//     Year: '1990',
//     imdbID: 'tt0100054',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Lords of Salem',
//     Year: '2012',
//     imdbID: 'tt1731697',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
//     Year: '1984',
//     imdbID: 'tt0087365',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Lord of the Flies',
//     Year: '1963',
//     imdbID: 'tt0057261',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
//   },
//   {
//     Title: 'The Avengers',
//     Year: '2012',
//     imdbID: 'tt0848228',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Avengers: Infinity War',
//     Year: '2018',
//     imdbID: 'tt4154756',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Avengers: Age of Ultron',
//     Year: '2015',
//     imdbID: 'tt2395427',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
//   },
//   {
//     Title: 'Avengers: Endgame',
//     Year: '2019',
//     imdbID: 'tt4154796',
//     Type: 'movie',
//     Poster:
//       'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
//   },
// ]

/* ESERCIZIO 12
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

/* ESERCIZIO 13
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

/* ESERCIZIO 14
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

/* ESERCIZIO 15
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

/* ESERCIZIO 16
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/


// const filmSpecifico = (array, grande) => {
//   const filtrato = cazzo.filter((elemento) => elemento.imdbID === grande);

//   console.log(filtrato);
// };

// filmSpecifico(movies, "tt2395427");



/* ESERCIZIO 17
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

/* ESERCIZIO 18 (EXTRA)
  Scrivi una funzione per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/