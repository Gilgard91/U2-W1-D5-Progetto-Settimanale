window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  let button = document.getElementById("getstarted");
  let scrollTop = window.scrollY;

  if (scrollTop >= 236) {
    navbar.style.backgroundColor = "white";
    button.style.backgroundColor = "#1a8917";
  } else {
    navbar.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "#191919";
  }
});

console.dir(document.getElementById("gElement"));

let gElement = document.getElementById("gElement");
let childG = gElement.children
setInterval(() => {
    let random = Math.round(Math.random() * childG.length)+1
    let opacityG = childG[random].style.opacity === "0" ? "1" : "0";
    childG[random].style.opacity = opacityG;
}, 30)