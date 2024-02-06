"use strict";
export class Aside {
  constructor() {
    this.leftContent = $("#left_content");
    this.openIcon = document.getElementById("openIcon");
    this.closeIcon = document.getElementById("closeIcon");
    // open aside
    this.openIcon.addEventListener("click", () => {
      this.open_closeAside();
    });
    // close aside
    this.closeIcon.addEventListener("click", () => {
      this.open_closeAside();
    });
    // contact button
    document.getElementById("contactBtn").addEventListener("click", () => {
      const contactOffest = $("#contact").offset().top;
      this.open_closeAside();
      $("html").animate({ scrollTop: contactOffest }, 1000);
    });
  }
  // control aside
  open_closeAside() {
    this.openIcon.classList.toggle("d-none");
    this.closeIcon.classList.toggle("d-none");
    this.leftContent.animate({ width: "toggle" }, 500);
  }
}
