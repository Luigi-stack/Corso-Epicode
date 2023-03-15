fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data); //array di 50 libri

    let books = document.getElementById("row");
    let i = 0;

    data.forEach((user) => {
      books.innerHTML =
        books.innerHTML +
        `<div class="col col-md-6 col-lg-4 my-3">
    <div class="card" style="width: 18rem">
      <img src="${user.img}" class="card-img-top" alt="" height="350px" />
      <div class="card-body">
        <h5 class="card-title">${user.title}</h5>
        <p class="card-text">
        ${user.price}€
        </p>
        <div class="d-grid gap-2">
        <button id="button type="button" class="btn btn-primary">Scarta</button>
        </div>
      </div>
    </div>`;
      i++;
    });

let deleteButton = document.getElementById('button')


  });
