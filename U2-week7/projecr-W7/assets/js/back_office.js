const API = 'https://striveschool-api.herokuapp.com/api/product/';
const Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE1YzAyNTE3N2Y3MDAwMTNjNWVhZjgiLCJpYXQiOjE2NzkxNDcwNDUsImV4cCI6MTY4MDM1NjY0NX0.gSPER87zkQ7ztslfDGIntGFXo2uKuPsOqio0I0NQDV8"

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
})

