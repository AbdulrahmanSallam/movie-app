"use strict";
export class Ui {
  constructor() {
    this.containerPlace = document.getElementById("container");
  }

  displayData(data) {
    let container = "";
    for (let i = 0; i < data.length; i++) {
      let posterImg = `https://image.tmdb.org/t/p/original${data[i].poster_path}`;
      if (data[i].poster_path == null) {
        posterImg = "images/default-movie.jpg";
      }

      container += `<div id="cardItem" class="cardItem col-md-6 col-lg-4">
        <div id="card" class="cardBox">
            <div class="image">
                <img src="${posterImg}" class="img-fluid" alt="movie">
            </div>
            <div id="cardDesccription">
                <h3 id="c-title" class="w-100">${data[i].original_title}</h3>
                <p id="f-content">${data[i].overview}</p>
                <span id="date">Relase Date : ${data[i].release_date}</span>
                <div id="stars" class="d-flex">
                    <span> <i class="fa-solid text-warning fa-star"></i></span>
                    <span> <i class="fa-solid text-warning fa-star"></i></span>
                    <span> <i class="fa-solid text-warning fa-star"></i></span>
                    <span> <i class="fa-solid text-warning fa-star"></i></span>
                </div>
                <div class="rate fs-5 d-flex  justify-content-center align-items-center"><span
                        id="rate">${data[i].vote_average.toFixed(
                          1
                        )}</span></div>
            </div>
        </div>
    </div>`;
    }
    this.containerPlace.innerHTML = container;
  }
}
