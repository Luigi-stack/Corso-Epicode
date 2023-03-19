const API = 'https://striveschool-api.herokuapp.com/api/product/';
const Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE1YzAyNTE3N2Y3MDAwMTNjNWVhZjgiLCJpYXQiOjE2NzkxNDcwNDUsImV4cCI6MTY4MDM1NjY0NX0.gSPER87zkQ7ztslfDGIntGFXo2uKuPsOqio0I0NQDV8"

let eventId = new URLSearchParams(window.location.search).get('eventId')
console.log('EVENTID', eventId)

if (eventId) {
    fetch(API + eventId, {
        method: 'DELETE',
        headers: {
            "Authorization": Authorization
        },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          return new Error('Error!')
        }
      })
      .then((eventData) => {
        console.log(eventData)
        // ripopolo i campi del form!
        document.getElementById('name').value = eventData.name
        document.getElementById('description').value = eventData.description
        document.getElementById('brand').value = eventData.brand,
        document.getElementById('url').value = eventData.imageUrl,
        document.getElementById('price').value = eventData.price
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const saveEvent = async function (newEvent) {
    try {
      let url = eventId ? API + eventId : API

      let response = await fetch(url, {
        method: eventId ? 'PUT' : 'POST',
        body: JSON.stringify(newEvent),
        headers: {
            "Authorization": Authorization,
          'Content-Type': 'application/json'
        },
      })
      if (response.ok) {
        alert('EVENTO SALVATO CORRETTAMENTE')
      } else {
        alert("PROBLEMA NELLA CREAZIONE DELL'EVENTO")
      }
    } catch (error) {
      console.log(error)
    }
  }


const saveObject = async function (obj) {
    try {
        let response = await fetch(API, {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                "Authorization": Authorization,
                'Content-Type': 'application/json',
            },
        })
        if (response.ok) {
            alert('Oggetto salvato')
        } else {
            alert("Poblema nel salvare l'oggetto")
        }
    } catch (error) {
        console.log(error)
    }
}

let buttonRefernce = document.getElementById('button');
buttonRefernce.addEventListener('click', () => {
    let newObject = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        brand: document.getElementById('brand').value,
        imageUrl: document.getElementById('url').value,
        price: document.getElementById('price').value
    }
    console.log(newObject)
    saveObject(newObject)
    saveEvent(newEvent)
})

