const deviceWidth = window.matchMedia("(max-width:790px)");

window.addEventListener("resize", () => {
  if (deviceWidth.matches) {
    document.querySelector("#image").src = "/images/bg-img2.jpg";
  } else {
    document.querySelector("#image").src = "/images/bg-img.jpg";
  }
});