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
