const API = 'https://striveschool-api.herokuapp.com/api/product/';
const Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NzkwNTcyNTMsImV4cCI6MTY4MDI2Njg1M30.Ttdf3lztH2nkfMUT9T6juYDsZeEB0Jipwj-5YrosmA4"

let eventId = new URLSearchParams(window.location.search).get('eventId')
console.log('EVENTID', eventId)

const myShop = function () {

    fetch(API, {
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
            events.forEach((shopElement) => {
                console.log(shopElement);
                let shop = document.getElementById("details-container");
                shop.innerHTML = `
                <h1>Dettagli prodotto</h1>
                <img class="mb-5" src="${shopElement.imageUrl}" alt="">
          <h3>Name</h3>
        <input class="mb-3" id='input' type="text" value="${shopElement.name}" >
          <h3>Description</h3>
          <input class="mb-3" id='input' type="text" value="${shopElement.description}" >
          <h3>Brand</h3>
          <input class="mb-3" id='input' type="text" value="${shopElement.brand}" >
          <h3>Image Url</h3>
          <input class="mb-3" id='input' type="text" value="${shopElement.imageUrl}" >
          <h3>Price</h3>
          <input class="mb-3" id='input' type="text" value="${shopElement.price}" >
          <h6>SERVER INFO</h6>
          <ul>
              <li>${shopElement.createdAt}</li>
              <li>${shopElement.updatedAt}</li>
          </ul>
      </div>
      <a href="change.html?eventId=${shopElement._id}" id="buttonModify" class="my-2 btn btn-primary">Modifica</a>
      </div>
      `;
            })

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
