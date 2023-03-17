const API = 'https://striveschool-api.herokuapp.com/api/product/';
const Authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgxN2M1ZWU3ODE4NzAwMTVjMjY3YTgiLCJpYXQiOjE2NzkwNTcyNTMsImV4cCI6MTY4MDI2Njg1M30.Ttdf3lztH2nkfMUT9T6juYDsZeEB0Jipwj-5YrosmA4"

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
          <div class="card w-25 m-2">
          <img src="${shopElement.imageUrl}"  width="100px"  class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">${shopElement.name}</h5>
            <p class="card-text">${shopElement.description}</p>
            <a href="details.html?eventId=${shopElement._id}" class="btn btn-primary">details</a>
          </div>
        </div>
              `;
      })
      console.log
    })
}
myShop()