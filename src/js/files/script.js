// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

let step = 1;
//===============
let roomPrice = 0;
let bedroomsPrice = 0;
let extrasPrice = 0;
let homeCleaningPrice = 0;
//===============

let pipePrice = 0;
let windowsPrice = 0;
let lawnPrice = 0;
//===============
let squerePrice = 0;
let repairExtras = 0;
let repairWindowPrice = 0;
let repairCleanPrice = 0;


  $(".service").on("click", function () {
    $(this).toggleClass("_select");
  });

// Cleaning of apartments / houses ==============================================================
  $(".living-quarters").on("click", function () {
    $(".living-quarters").removeClass("_select");
    $(this).addClass("_select");

    const price = $(this).attr("data-room-price");
    roomPrice = price;
    updeteHomeCleaningPrice();
    updetePrice();
  });

  $('.bedrooms__item').on('click', function() {
    $('.bedrooms__item').removeClass('_select');
    $(this).toggleClass('_select');

    //калькуляция цены
    const price = parseInt($(this).attr("data-bedroom-price"));
    bedroomsPrice = parseInt(price);
    updeteHomeCleaningPrice();
    updetePrice();
  });

  $('.living-extras').on('click', function() {
    $(this).toggleClass('_setected');
    let sum = 0; 
    $('.living-extras._setected').each(function(){
      let price = $(this).attr('data-extras-price');
      sum += parseInt(price);
    });


    extrasPrice = sum;
    updeteHomeCleaningPrice();
    updetePrice();
  });

  let isDeep = false;
  $('.is-deep').on('click', function() {
    $(this).toggleClass('_select');
    isDeep = !isDeep;

    updetePrice();
  });

  $('[data-service="1"]').on('click', function(){
    if(!$(this).hasClass('_select')) {
      roomPrice = 0;
      bedroomsPrice = 0;
      extrasPrice = 0;
      updeteHomeCleaningPrice();
      console.log('unselect');
    }

    updetePrice();
  });

// End Cleaning of apartments / houses ==============================================================


// After renovation ==============================================================
  $(".after-repair").on("click", function () {
    $(".after-repair").removeClass("_select");
    $(this).addClass("_select");

    const price = $(this).attr("data-room-price");
    squerePrice = price;

    updateAllRepairCleanPrice();
    updetePrice();
  });

  $('.renovation-extras').on('click', function() {
    $(this).toggleClass('_setected');
    let sum = 0; 

    $('.renovation-extras._setected').each(function(){
      let price = $(this).attr('data-extras-price');
      sum += parseInt(price);
    });

    repairExtras = sum;
    updateAllRepairCleanPrice();
    updetePrice();
  });

  let isRepairClinlevel = false;
  $('.is-repair-clinlevel').on('click', function() {
    $(this).toggleClass('_select');
    isRepairClinlevel = !isRepairClinlevel;

    updetePrice();
  });

  flsModules.numberWindows?.noUiSlider.on('update', function (values, handle) {
    const price = $('#numberWindows').attr('data-price-window');

    if($('[data-service="5"]').hasClass('_select')) {
      repairWindowPrice = values[handle] * price;
    }
    else {
      repairWindowPrice = 0;
    }

    updateAllRepairCleanPrice();
    updetePrice();

  });
// End After renovation ==============================================================

// Control button with calculator ===================================================================
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

// End Control button with calculator ===================================================================


// Common functions ==============================================================================
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

function updeteHomeCleaningPrice() {
  homeCleaningPrice = parseInt(roomPrice) + parseInt(bedroomsPrice) + parseInt(extrasPrice);
}

function updateAllRepairCleanPrice() {
  repairCleanPrice = parseInt(squerePrice) + parseInt(repairExtras) + parseInt(repairWindowPrice);
}

// End Common functions ==============================================================================


$('.cleaning-level__item').on('click', function() {
  $('.cleaning-level__item').removeClass('_select');
  $(this).toggleClass('_select');
});

$('.lawn-area__item').on('click', function() {
  $('.lawn-area__item').removeClass('_select');
  $(this).toggleClass('_select');

  lawnPrice = $(this).attr('data-lawn-area');
  updetePrice();
});

$('.payment-options__option').on('click', function() {
  $('.payment-options__option').removeClass('_setected');
  $(this).toggleClass('_setected');
});

$('.is-furniture').on('click', function() {
  $(this).toggleClass('_select');
  $('.renovation-extras__wrap').fadeToggle("slow")

  // updetePrice();
});

$('.is-window').on('click', function() {
  $(this).toggleClass('_select');
  $('.window-wash__wrap').fadeToggle("slow");

  // updetePrice();
});

//калькуляция стомости мытья окон ==========================
let exteriorWindow = false;
$('.exterior-window').on('click', function(){
  $(this).toggleClass('_select');
  exteriorWindow = !exteriorWindow;
});

$('[data-service="2"]').on('click', function(){
  if($(this).hasClass('_select')) {
    const price = $('#rangeWindows').attr('data-price-one-window');
    windowsPrice = parseInt(price);
  }
  else {
    windowsPrice = 0;
  }

  updetePrice();
});

flsModules.rangeWindows?.noUiSlider.on('update', function (values, handle) {
  const price = $('#rangeWindows').attr('data-price-window');
  const price2 = $('#rangeWindows').attr('data-price-exterior-window');
  const departurePrice = $('#rangeWindows').attr('data-price-one-window');

  if($('[data-service="2"]').hasClass('_select')){
    
    if(!exteriorWindow){
      windowsPrice = values[handle] * price + parseInt(departurePrice);
    }else {
      windowsPrice = values[handle] * price2 + parseInt(departurePrice);
    }
  }
  else {
    windowsPrice = 0;
  }
  
  updetePrice();
});
//конец калькуляции стомости мытья окон ==========================

flsModules.rangePipe?.noUiSlider.on('update', function (values, handle) {
  const price = $('#rangePipe').attr('data-price-pipe');

  if($('[data-service="4"]').hasClass('_select')) {
    pipePrice = values[handle] * price;
  }
  else {
    pipePrice = 0;
  }

 
  updetePrice();
});




$('[data-service="6"]').on('click', function(){
  if($(this).hasClass('_select')) {
    $("html, body").animate(
      {
        scrollTop: $(".book").offset().top,
      },
      1200
    );
  }
 
});

const header = document.querySelector(".header");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("header-scrolling");
  } else {
    header.classList.remove("header-scrolling");
  }
});

function updetePrice() {
  let isExtras = $('.living-extras._setected');
  let dopProcent = 0;

  if(isDeep && isExtras.length) {
    dopProcent = homeCleaningPrice * 1.25 - homeCleaningPrice
  }

  let isRepairExtras = $('.renovation-extras._setected');
  let dopRepairProcent = 0;

  if(isRepairClinlevel && isRepairExtras.length) {
    dopRepairProcent = repairCleanPrice * 1.25 - repairCleanPrice;
  }


  let finalPrice = (parseInt(homeCleaningPrice) +  parseInt(dopProcent))
  + parseInt(windowsPrice) 
  + parseInt(lawnPrice)
  + parseInt(pipePrice)
  + (parseInt(repairCleanPrice) + parseInt(dopRepairProcent));

  $(".calculator__total-price span").text(finalPrice);
}

//Module calendar
flatpickr("#cleaningDate",{
  position: "above",
});

//input Time
flatpickr("#timeInput", {
  enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    position: "above",
});

