console.log('hello')

class User {
    constructor (firstName, lastName, age, location) {
        this.name = firstName
        this.surname = lastName
        this.age = age
        this.location = location
    }
}

const User1 = new User ('Luigi, Iossa', '29', 'Dakar')
console.log('Hello' + ' ' + User1.name)

const User2 = new User ('Mario', 'Rossi', '35', 'Milan')
console.log('Hello' + ' ' + User2.name)



// ESERCIZIO 2
let petName = document.getElementById('petName');
let ownerName = document.getElementById('ownerName');
let species = document.getElementById('species');
let breed = document.getElementById('breed');
let button = document.getElementById('add');
let petList = document.getElementById('petList');

let contacts = []


class Pet {
    constructor (petName, ownerName, species, breed) {
        this.petName = petName
        this.ownerName = ownerName
        this.species = species
        this.breed = breed
    }
}

// const Dog = new Pet('Fuffy', 'Luigi', 'dog', 'Labrador')
// console.log(Dog)

const renderList = () => {
    petList.innerHTML = ''
    contacts.forEach((Pet) => {
      // per ogni contatto cosa farò?
      // 1) creerò un <li> con il suo nome + cognome
      const newLi = document.createElement('li')
      // ho ottenuto un <li></li>
      // ora aggiungo nome + cognome
      newLi.innerText = Pet.petName +' ' + 'è il' + Pet.species + 'di' + ' ' + Pet.ownerName + ' ' + 'è un' + Pet.breed
      // ho ottenuto un <li>Gino Paoli</li>
      // 2) lo aggiungerò all'<ul>
      petList.appendChild(newLi)
      // <ul><li>Gino Paoli</li></ul>
    })
  }
  
  
  button.addEventListener('click', () => {
    console.log('bottone cliccato!')
    let newContact = new Pet(
        petName.value, // valore dell'input name
        ownerName.value // valore dell'input surname
    )

    contacts.push(newContact)

    //   azzera gli input per facilitare l'inserimento di un nuovo contact
    petName.value = ''
    ownerName.value = ''
    renderList()
  })