const card_URL = 'https://api.pexels.com/v1/search?query=beach'

const displayEvents = function (events) {
    const putImg = document.createElement('img')
    putImg.innerHTML = `<img src="https://picsum.photos/200" alt="">`
    let LoadImgReference = document.getElementsByClassName('btn', 'btn-primary', 'my-2')[0]
    LoadImgReference.appendChild(putImg)
}





const getImg = function () {
    fetch(card_URL, {
        method: "GET",
        headers: {
            Authorization: "Sb7JfpKp3eF2Ob0dT88w9rerYxRuSFO0v56bTNx5v5YLQIyXm9ZdegDy"
        }
    })
    .then((res) => {
        console.log(res)
        return res.json()
    })
    .then((data) =>{
        console.log(data) //data is the array
        let photosCard = data.photos
        
        photosCard.forEach((photosElements)=> {

            let cards = document.getElementById("row");
            cards.innerHTML =
              cards.innerHTML +
              `<div class="col-md-4">
              <div class="card mb-4 shadow-sm d-none">
              <img src="${photosElements.src.tiny}" alt="" class="d-none" >
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${photosElements.photographer}</h5>
                  <p class="card-text">
                  ${photosElements.alt}
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">
                        View
                      </button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>`;
        }) 
        const loadImgReference = document.getElementById('loadImg')
        
        loadImgReference.addEventListener('click', () => {
            for (let i = 0; i < photosCard.length; i++) {
                let classImg = document.getElementsByClassName('d-none')[0];
                classImg.classList.toggle('d-none')
            }
        })
    })
}

getImg()
