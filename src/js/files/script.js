// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

let step = 1;
let roomPrice = 0;

$(".room").on("click", function () {
  $(".room").removeClass("_select");
  $(this).addClass("_select");

  const price = $(this).attr("data-room-price");

  $(".calculator__total-price span").text(price);
  roomPrice = price;
});

$(".service").on("click", function () {
  $(this).toggleClass("_select");
  let sum = 0;

  $(".service._select").each(function () {
    sum += parseInt($(this).attr("data-service-price"));
  });

  $(".calculator__total-price span").text(parseInt(roomPrice) + parseInt(sum));
});

$(".calculator__btn-next").on("click", function () {
  if (!checkSelectedApartmentSize()) {
    $(".calculator__alerts").fadeIn("slow");
    return;
  }

  $(".calculator__alerts").fadeOut();

  if (step < 3) {
    step++;
  }

  stepControl();
});

$(".calculator__btn-prev").on("click", function () {
  if (step >= 2) {
    step--;
  }

  stepControl();
});

function stepControl() {
  $(".calculator__steps span").text(step);

  if (step === 1) {
    $(".calculator__square").slideDown("slow");
    $(".calculator__form").slideUp("slow");
    $(".calculator__services").slideUp("slow");

    $(".calculator__btn-prev").hide();
    scrollTopOffer();
  }

  if (step === 2) {
    $(".calculator__square").slideUp("slow");
    $(".calculator__form").slideUp("slow");
    $(".calculator__services").slideDown("slow");

    $(".calculator__btn-prev").show();
    $(".calculator__btn-next").show();
  }

  if (step === 3) {
    $(".calculator__services").slideUp("slow");
    $(".calculator__form").slideDown("slow");

    $(".calculator__btn-next").hide();

    scrollTopOffer();
  }
}

function scrollTopOffer() {
  $("html, body").animate(
    {
      scrollTop: $(".offer").offset().top,
    },
    1000
  );
}

function checkSelectedApartmentSize() {
  let room = document.querySelectorAll(".room._select");

  if (room.length) {
    return true;
  } else {
    return false;
  }
}

const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("header-scrolling");
  } else {
    header.classList.remove("header-scrolling");
  }
});
