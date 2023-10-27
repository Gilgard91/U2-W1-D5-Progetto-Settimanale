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
