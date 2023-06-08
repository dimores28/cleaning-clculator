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
});

$(".calculator__btn-next").on("click", function () {
  if (!checkSelectedApartmentSize()) {
    $(".calculator__alerts").fadeIn("slow");
    return;
  }

  $(".calculator__alerts").fadeOut();

  showedSpollers();

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
//   $(".calculator__steps span").text(step);
      $('.calculator__steps div').removeClass('_active');
      $(`[data-step=${step}]`).addClass('_active');

  if (step === 1) {
    $(".calculator__services").slideDown("slow");  
    $(".calculator__form").slideUp("slow");
    $(".calculator__square").slideUp("slow");

    $(".calculator__btn-prev").hide();
   //  scrollTopOffer();
  }

  if (step === 2) {
    $(".calculator__services").slideUp("slow");
    $(".calculator__form").slideUp("slow");
    $(".calculator__square").slideDown("slow");

    $(".calculator__btn-prev").show();
    $(".calculator__btn-next").show();
  }

  if (step === 3) {
    $(".calculator__square").slideUp("slow");
    $(".calculator__form").slideDown("slow");

    $(".calculator__btn-next").hide();

   //  scrollTopOffer();
  }
}

function scrollTopOffer() {
  $("html, body").animate(
    {
      scrollTop: $(".calculator").offset().top + 60,
    },
    1000
  );
}

function checkSelectedApartmentSize() {
  let room = document.querySelectorAll(".service._select");

  if (room.length) {
    return true;
  } else {
    return false;
  }
}

function showedSpollers() {
  //Скрываем все спойлеры
  $(".spollers__item ").hide();

  //Открываем необходимые спойлеры под выбранные услуги
  $(".service._select").each(function () {
      let serviceId = $(this).attr("data-service");
      $(`[data-service-filters=${serviceId}]`).show();
  });
}

$('.select-extras__item').on('click', function() {
  $(this).toggleClass('_setected');
});

$('.bedrooms__item').on('click', function() {
  $('.bedrooms__item').removeClass('_select');
  $(this).toggleClass('_select');

  //калькуляция цены
  const price = parseInt($(this).attr("data-bedroom-price"));
  let newPrice = parseInt(roomPrice)  + parseInt(price);

  $(".calculator__total-price span").text(newPrice);

});

$('.cleaning-level__item').on('click', function() {
  $('.cleaning-level__item').removeClass('_select');
  $(this).toggleClass('_select');
});

$('.lawn-area__item').on('click', function() {
  $('.lawn-area__item').removeClass('_select');
  $(this).toggleClass('_select');
});

const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("header-scrolling");
  } else {
    header.classList.remove("header-scrolling");
  }
});
