import { Aside } from "./aside.module.js";
import { Contact } from "./contact.module.js";
import { Ui } from "./ui.module.js";

export class Home {
  constructor() {
    this.loadingScreen = document.getElementById("loadingScreen");
    this.aside = new Aside();
    new Contact();
    this.uiClass = new Ui();
    this.firstShow("now_playing");
    $("a[category]").on("click", (e) => {
      this.excute(e);
      this.aside.open_closeAside();
    });
    this.searchInput = document.getElementById("searchInput");
    this.searchInput.addEventListener("input", () => {
      const currentName = this.searchInput.value.trim();
      if(currentName == ""){
        this.firstShow("now_playing");
      }else{
          this.searchApi(currentName);
      }
    });
  }

  async search(movieName) {
    await this.searchApi(movieName);
  }

  async firstShow() {
    await this.getData("now_playing");
  }

  async excute(e) {
    await this.getData(e.target.getAttribute("category"));
  }

  async getData(category) {
    this.loadingScreen.classList.remove("d-none");

    let api = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;
    if (category == "trending") {
      api = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;
    }

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTU3ZmYyNjUzMDMxZGRjZTg1NjAxNzNlNmQzMjNhMyIsInN1YiI6IjY1YmQxZTFmZTE4Yjk3MDE2MjlhNTVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jrrPvqPkbY4huH6IaAgY32nue3tKy0Qo2AWTwt0osKI",
      },
    };

    const response = await fetch(api, options);
    const finalResponse = (await response.json()).results;
    this.loadingScreen.classList.add("d-none");
    $("html").animate({ scrollTop: 0 }, 1000);
    this.uiClass.displayData(finalResponse);
  }

  async searchApi(movieName) {
    this.loadingScreen.classList.add("d-none");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTU3ZmYyNjUzMDMxZGRjZTg1NjAxNzNlNmQzMjNhMyIsInN1YiI6IjY1YmQxZTFmZTE4Yjk3MDE2MjlhNTVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jrrPvqPkbY4huH6IaAgY32nue3tKy0Qo2AWTwt0osKI",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      options
    );
    const finalResponse = (await response.json()).results;
    this.loadingScreen.classList.add("d-none");
    this.uiClass.displayData(finalResponse);
  }
}
