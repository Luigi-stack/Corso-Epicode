// ESERCIZIO 1
// class User {
//     constructor (firstName, lastName, age, location) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.location = location
//     }
//     compareAge(anotherUser) {
//         if (this.age < anotherUser.age) {
//           return `${anotherUser.firstName} è più vecchio di ${this.firstName}.`
//         } else if (this.age > anotherUser.age) {
//           return `${anotherUser.firstName} è più giovane di ${this.firstName}.`
//         } else {
//           return `${anotherUser.firstName} è della stessa età di ${this.firstName}.`
//         }
//       }
// }

// const User1 = new User ('Luigi, Iossa', '29', 'Dakar')
// const User2 = new User ('Mario', 'Rossi', '35', 'Milan')

// console.log(User1.compareAge(User12))


// ESERCIZIO 2
let petNameField = document.getElementById('petName-field')
let ownerNameField = document.getElementById('ownerName-field')
let speciesField = document.getElementById('species-field')
let breedField = document.getElementById('breed-field')

let petList = document.getElementById('petList')
let addButton = document.getElementById('add')

let pets = []

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName
    this.ownerName = ownerName
    this.species = species
    this.breed = breed
  }

  checkSameOwner(anotherPet) {
    if (this.ownerName === anotherPet.ownerName) {
      return true
    } else {
      return false
    }
  }
}

const renderList = function () {
  petList.innerHTML = '' // <-- svuota la lista all'inizio
  pets.forEach((pet) => {
    const newLi = document.createElement('li')
    newLi.innerText =
      'Nome: ' + pet.petName + ', proprietario: ' + pet.ownerName
    petList.appendChild(newLi)
  })
}

addButton.onclick = function () {
  let newPet = new Pet(
    petNameField.value,
    ownerNameField.value,
    speciesField.value,
    breedField.value
  )
  pets.push(newPet)
  renderList()
  petNameField.value = '' // <-- svuota l'input field alla fine
  ownerNameField.value = '' // <-- svuota l'input field alla fine
  speciesField.value = '' // <-- svuota l'input field alla fine
  breedField.value = '' // <-- svuota l'input field alla fine
}