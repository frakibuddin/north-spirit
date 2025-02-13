//stckey header
const header = document.querySelector("header");

window.onscroll = function () {
  // let posHight = document.documentElement.scrollHeight;
  let pos = window.scrollY;
  if (pos > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
