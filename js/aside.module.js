/// <reference types="../@types/jquery" />

export class Aside {
  constructor() {
    this.leftContent = $("#left_content");
    this.closeIcon = document.getElementById("closeIcon");
    this.openIcon = document.getElementById("openIcon");
    // open aside
    this.openIcon.addEventListener("click", () => {
      this.open_closeAside();
    });
    // close aside
    this.closeIcon.addEventListener("click", () => {
      this.open_closeAside();
    });
    // for change aside in small width
    window.addEventListener("resize", this.changeAside);
    window.addEventListener("load", this.changeAside);
    // contact button
    this.contactBtn = $("#contactBtn");
    this.contactBtn.on("click", () => {
      const contactOffest = $("#contact").offset().top;
      $("html").animate({ scrollTop: contactOffest }, 1000);
      this.open_closeAside();
    });
  }
  // control aside
  open_closeAside() {
    this.openIcon.classList.toggle("d-none");
    this.closeIcon.classList.toggle("d-none");
    this.leftContent.animate({ width: "toggle" }, 500);
  }
  // aside apperance
  changeAside() {
    const wWidth = window.innerWidth;
    if (wWidth < 992) {
       $("#right").css("backgroundColor", "transparent");
       $("#rightTop").css("display", "none");
       $("#rightBottom").css("display", "none");
       $("#rightCenter").css("color", "white");
    } else {
      $("#right").removeAttr("style");
      $("#rightTop").removeAttr("style");
      $("#rightBottom").removeAttr("style");
      $("#rightCenter").removeAttr("style");
    }
  }
}
