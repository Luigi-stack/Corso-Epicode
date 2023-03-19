const API = 'https://striveschool-api.herokuapp.com/api/product/';
const Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE1YzAyNTE3N2Y3MDAwMTNjNWVhZjgiLCJpYXQiOjE2NzkxNDcwNDUsImV4cCI6MTY4MDM1NjY0NX0.gSPER87zkQ7ztslfDGIntGFXo2uKuPsOqio0I0NQDV8"

let eventId = new URLSearchParams(window.location.search).get('eventId')
console.log('EVENTID', eventId)

const myShop = function () {

    fetch(API + eventId, {
        method: 'GET',
        headers: {
            "Authorization": Authorization,
        },
    })

        .then((response) => {
            console.log(response)
            return response.json();
        })
        .then((events) => {
            console.log(events)
            let shop = document.getElementById("details-container");
            shop.innerHTML = `
            <div class="container mt-5">
            <div class="row">
              <div class="col offset-1 col-12 col-md-5">
                <img src="${events.imageUrl}" class="w-75" alt="" />
              </div>
              <div class="col col-12 col-md-5 mt-2">
                <h2>${events.name}</h2>
                <h5 class="mt-2">Descrizione</h5>
                <p>${events.description}</p>
                <h5>Brand</h5>
                <p>${events.brand}</p>
                <h5>Prezzo</h5>
                <p>${events.price}€</p>
                <br />
              </div>
            </div>
          </div>
      </div>
      <a href="back_office.html?eventId=${events._id}" id="buttonModify" class="my-2 btn btn-primary">Modifica</a>
      </div>
      `;
        })
}

let deleteButtonReference = document.getElementById('delete')
deleteButtonReference.addEventListener('click', async () => {
    let response = await fetch(API + eventId, {
        method: 'DELETE',
        headers: {
            "Authorization": Authorization
        },
    })
    console.log(response)
    if (response.ok) {
        alert('EVENTO ELIMINATO CORRETTAMENTE')
        window.location.replace('homepage.html')
    } else {
        alert("PROBLEMA NELL'ELIMINAZIONE DELL'EVENTO")
    }
})

myShop();


const saveObject = async function (obj) {
    try {
        let response = await fetch(API, {
            method: 'PUT',
            body: JSON.stringify(obj),
            headers: {
                "Authorization": Authorization,
                'Content-Type': 'application/json',
            },
        })
        if (response.ok) {
            alert('Oggetto modificato')
        } else {
            alert("Poblema nel modificare l'oggetto")
        }
    } catch (error) {
        console.log(error)
    }
}

let buttonRefernce = document.getElementById('buttonModify');
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
})
