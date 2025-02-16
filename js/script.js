//stckey header
const header = document.querySelector("header");

window.onscroll = function () {
  handleScrollAnimation();
  // let posHight = document.documentElement.scrollHeight;
  let pos = window.scrollY;
  if (pos > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

// toggle button
const menu_toggle_btn = document.querySelector(".menu-toggle-btn");
const tgl_menu = document.querySelector("menu ul");
menu_toggle_btn.onclick = () => {
  tgl_menu.classList.toggle("show");
  menu_toggle_btn.classList.toggle("active");
};

//
var listArray = ["BRING THE PARTY ANYWHERE", "AN ICON MEETS AN ICON"];
var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  autoplayDisableOnInteraction: false,
  slidesPerView: 1,
  autoHeight: true,
  autoplay: {
    delay: 30000, //animation과 시간 맞춰줘야함
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
    type: "bullets",
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        "<em>" +
        listArray[index] +
        "</em>" +
        "<i></i>" +
        "<b></b>" +
        "</span>"
      );
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// onscroll animation
// onscroll animation
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.15)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      //hideScrollElement(el);
    }
  });
};
