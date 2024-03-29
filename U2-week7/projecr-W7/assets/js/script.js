const API = 'https://striveschool-api.herokuapp.com/api/product/';
const Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE1YzAyNTE3N2Y3MDAwMTNjNWVhZjgiLCJpYXQiOjE2NzkxNDcwNDUsImV4cCI6MTY4MDM1NjY0NX0.gSPER87zkQ7ztslfDGIntGFXo2uKuPsOqio0I0NQDV8"

let eventId = new URLSearchParams(window.location.search).get('eventId')
console.log('EVENTID', eventId)

const myShop = function () {

  fetch(API, {
    method: 'GET',
    headers: {
      "Authorization": Authorization
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
        let shop = document.getElementById("shopContainer");
        shop.innerHTML += `
        <div class="col col-12 col-md-4 col-lg-3 d-flex">
          <div class="card m-2 rounded-0 border border-secondary-subtle">
          <img src="${shopElement.imageUrl}"  width="100px"  class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">${shopElement.name}</h5>
            <p class="card-text mt-2">${shopElement.description}</p>
          </div>
          <a href="details.html?eventId=${shopElement._id}" class="m-2 btn btn-warning text-primary btn-sm rounded-pill fw-semibold">DETTAGLI</a>
        </div>
        </div>
              `;
      })
     
    })
}
myShop()