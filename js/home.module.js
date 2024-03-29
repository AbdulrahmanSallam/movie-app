"use strict";
import { Aside } from "./aside.module.js";
import { Contact } from "./contact.module.js";
import { Ui } from "./ui.module.js";

export class Home {
  constructor() {
    new Contact();
    this.aside = new Aside();
    this.uiClass = new Ui();
    this.getData("now_playing");
    $("a[category]").on("click", (e) => {
      this.aside.open_closeAside();
      this.getData(e.target.getAttribute("category"));
    });
    this.searchInput = document.getElementById("searchInput");
    this.searchInput.addEventListener("input", () => {
      const currentName = this.searchInput.value.trim();
      if (currentName == "") {
        this.getData("now_playing");
      } else {
        this.searchApi(currentName);
      }
    });
  }

  async getData(category) {
    const loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.classList.remove("d-none");
    let api = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;
    if (category == "trending") {
      api = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;
    }
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmQ1YzE5NjQ1Y2EwMzkxNDNkMDllOTkxMTliZjUzMyIsInN1YiI6IjY1Y2JkZWU1MDA1MDhhMDE2MjQyMjRjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hpgT0lnxPK1X7az0ZMSLxqZh6aQf48H1fUzo__zQGiI",
      },
    };
    const response = await fetch(api, options);
    const finalResponse = (await response.json()).results;
    loadingScreen.classList.add("d-none");
    $("html").animate({ scrollTop: 0 }, 1000);
    this.uiClass.displayData(finalResponse);
  }

  async searchApi(movieName) {
    const loadingScreen = document.getElementById("loadingScreen");
    loadingScreen.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmQ1YzE5NjQ1Y2EwMzkxNDNkMDllOTkxMTliZjUzMyIsInN1YiI6IjY1Y2JkZWU1MDA1MDhhMDE2MjQyMjRjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hpgT0lnxPK1X7az0ZMSLxqZh6aQf48H1fUzo__zQGiI",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      options
    );
    const finalResponse = (await response.json()).results;
    loadingScreen.classList.add("d-none");
    this.uiClass.displayData(finalResponse);
  }
}
