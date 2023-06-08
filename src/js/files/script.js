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
  if (!checkSelectedService()) {
    $(".calculator__alerts").fadeIn("slow");
    $(".calculator__alerts").text('Please make a selection to continue.');
    return;
  }

  const hasSelect = $('[data-service="1"]').hasClass('_select');
  if(hasSelect && step === 2 && !checkSelectedRoomSize() ) {
    $(".calculator__alerts").fadeIn("slow");
    $(".calculator__alerts").text('Please select your home size to continue.');
      //Please select your home size to continue.
    return;
  }

  const hasLawnSelect = $('[data-service="3"]').hasClass('_select');
  if(hasLawnSelect && step === 2 && !checkSelectedLawnSize()) {
    $(".calculator__alerts").fadeIn("slow");
    $(".calculator__alerts").text('Please make a lawn area selection to continue.');
    //Please make a lawn area selection to continue.
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
    scrollTopOffer();
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

    scrollTopOffer();
  }
}

function scrollTopOffer() {
  $("html, body").animate(
    {
      scrollTop: $(".offer").offset().top + 60,
    },
    1000
  );
}

function checkSelectedService() {
  let service = document.querySelectorAll(".service._select");

  if (service.length) {
    return true;
  } else {
    return false;
  }
}

function checkSelectedRoomSize() {
  const room = document.querySelectorAll(".room._select");
  if (room.length) {
    return true;
  } else {
    return false;
  }
}

function checkSelectedLawnSize() {
  const lawn = document.querySelectorAll(".lawn-area__item._select");
  if (lawn.length) {
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

$('.payment-options__option').on('click', function() {
  $('.payment-options__option').removeClass('_setected');
  $(this).toggleClass('_setected');
});

let windowsPrice = 0;

flsModules.rangeWindows?.noUiSlider.on('update', function (values, handle) {
  const price = $('#rangeWindows').attr('data-price-window');
  windowsPrice = values[handle] * price;
});

let pipePrice = 0;
flsModules.rangePipe?.noUiSlider.on('update', function (values, handle) {
  const price = $('#rangePipe').attr('data-price-pipe');
  pipePrice = values[handle] * price;
});

const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("header-scrolling");
  } else {
    header.classList.remove("header-scrolling");
  }
});
