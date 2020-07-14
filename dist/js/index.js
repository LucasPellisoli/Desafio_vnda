"use strict";

function domReady(fn) {
  // If we're early to the party
  document.addEventListener("DOMContentLoaded", fn); // If late; I mean on time.

  if (document.readyState === "interactive" || document.readyState === "complete") {
    fn();
  }
}

domReady(function () {
  var pageScroll = 0;
  window.addEventListener("scroll", function () {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (window.pageYOffset < 15) {
      document.getElementsByClassName("menu")[0].className = "menu";
    } else {
      document.getElementsByClassName("menu")[0].className = "menu menu-fixed";
    }

    if (viewportWidth < 768) {
      if (window.pageYOffset > pageScroll) {
        document.getElementsByClassName("menu-links")[0].className = "menu-links menu-links-hide";
      } else {
        document.getElementsByClassName("menu-links")[0].className = "menu-links";
      }
    }

    pageScroll = window.pageYOffset;
  });
  var mySwiper = new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    scrollbar: {
      el: ".swiper-scrollbar"
    }
  });
});