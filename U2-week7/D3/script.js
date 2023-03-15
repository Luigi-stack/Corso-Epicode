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
        `<div class="col col-md-6 col-lg-4 my-3 d-flex justify-content-center">
    <div id="card" class="card h-100 card2" style="width: 18rem">
      <img src="${user.img}" class="card-img-top" alt="" height="350px" />
      <div class="card-body d-flex flex-column justify-content-between ">
        <h5 class="card-title">${user.title}</h5>
        <p class="card-text">
        ${user.price}€
        </p>
        <div id="btn" class="d-grid gap-2">
        <button onclick="removeCards()" type="button" class="btn btn-primary">Scarta</button>
        </div>
      </div>
    </div>`;
      i++;

   
    });
  });

  function removeCards() { //onclick del bottone
    let deleteCards = document.getElementById('card');
    deleteCards.style.display = 'none';
  }




  
  