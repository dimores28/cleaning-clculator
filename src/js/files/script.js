// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, menuClose } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
// import '../jquery.min.js';


let step = 1;
//===============
let roomPrice = 0;
let bedroomsPrice = 0;
let bathroomsPrice = 0;
let receptionPprice = 0;
let extrasPrice = 0;
let homeCleaningPrice = 0;
//===============

let pipePrice = 0;
let windowsPrice = 0;
let lawnPrice = 0;
let gardenPrice = 0;
//===============
let squerePrice = 0;
let bathroomsARPrice = 0;
let repairExtras = 0;
let repairWindowPrice = 0;
let repairCleanPrice = 0;
let exteriorWindowPR = false;

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

  $('[name="houseSize"]').val($(this).children("p").text());
});

$(".bedrooms__item").on("click", function () {
  $(".bedrooms__item").not(this).removeClass("_select");
  $(this).toggleClass("_select");

  if($(this).hasClass("_select")){
    //калькуляция цены
    const price = parseInt($(this).attr("data-bedroom-price"));
    bedroomsPrice = parseInt(price);
    updeteHomeCleaningPrice();
    updetePrice();

    $('[name="numberBeadroom"]').val($(this).text());
  } else {
    bedroomsPrice = 0;
    updeteHomeCleaningPrice();
    updetePrice();

    $('[name="numberBeadroom"]').val('');
  }

});

$(".bathrooms__item").on("click", function () {
  $(".bathrooms__item").not(this).removeClass("_select");
  $(this).toggleClass("_select");

  if($(this).hasClass("_select")) {
    //калькуляция цены
    const price = parseInt($(this).attr("data-bathrooms-price"));
    bathroomsPrice = parseInt(price);
    updeteHomeCleaningPrice();
    updetePrice();

    $('[name="numberBathrooms"]').val($(this).text());
  }
  else {
    bathroomsPrice = 0;
    updeteHomeCleaningPrice();
    updetePrice();
    $('[name="numberBathrooms"]').val('');
  }
});

$(".reception__item").on("click", function () {
  $(".reception__item").not(this).removeClass("_select");
  $(this).toggleClass("_select");

  if($(this).hasClass("_select")){
    //калькуляция цены
    const price = parseInt($(this).attr("data-reception-price"));
    receptionPprice = parseInt(price);
    updeteHomeCleaningPrice();
    updetePrice();

    $('[name="numberReception"]').val($(this).text());
  } else {
    receptionPprice = 0;
    updeteHomeCleaningPrice();
    updetePrice();

    $('[name="numberReception"]').val('');
  }

});

$(".living-extras").on("click", function () {
  $(this).toggleClass("_setected");
  let sum = 0;
  let extrass = "";

  $(".living-extras._setected").each(function () {
    let price = $(this).attr("data-extras-price");
    sum += parseInt(price);

    extrass = extrass + $(this).text() + ", ";
  });

  extrasPrice = sum;
  updeteHomeCleaningPrice();
  updetePrice();

  $('[name="extras"]').val(extrass);
});

let isDeep = false;
$("#clStandart").on("click", function () {
  isDeep = false;
  $(this).addClass("_select");
  $("#clDeep").removeClass("_select");

  updetePrice();
  $('[name="cleaningLevel"]').val("");
});

$("#clDeep").on("click", function () {
  isDeep = true;
  $(this).addClass("_select");
  $("#clStandart").removeClass("_select");

  updetePrice();
  $('[name="cleaningLevel"]').val("Deep");
});

$('#isCleanWindow').on('click', function(){
  $(this).toggleClass("_select");
  $('[data-service="2"]').trigger("click");
  $('[data-service-filters="2"]').slideToggle("slow");
})

$('[data-service="1"]').on("click", function () {
  $('[name="houseClean"]').val($(this).text());

  if (!$(this).hasClass("_select")) {
    //обнуляем стоимость и очищаем ранее выбранные опции
    roomPrice = 0;
    bedroomsPrice = 0;
    extrasPrice = 0;

    updeteHomeCleaningPrice();

    $(".living-quarters").removeClass("_select");
    $(".bedrooms__item").removeClass("_select");
    $(".living-extras").removeClass("_setected");
    $("#clStandart").trigger("click");

    $('[name="houseSize"]').val("");
    $('[name="houseClean"]').val("");
    $('[name="numberBeadroom"]').val("");
    $('[name="numberBathrooms"]').val("");
    $('[name="extras"]').val("");
    $('[name="cleaningLevel"]').val("");
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

  $('[name="renovationHouseSize"]').val($(this).text());
});

$(".bathrooms-ar__item").on("click", function () {
  $(".bathrooms-ar__item").not(this).removeClass("_select");
  $(this).toggleClass("_select");

  if($(this).hasClass("_select")){
    //калькуляция цены
    const price = parseInt($(this).attr("data-bathrooms-price"));
    bathroomsARPrice = parseInt(price);
    updateAllRepairCleanPrice();
    updetePrice();

    $('[name="renovationNumberBathrooms"]').val($(this).text());
  } else {
    bathroomsARPrice = 0;
    updateAllRepairCleanPrice();
    updetePrice();

    $('[name="renovationNumberBathrooms"]').val('');
  }

});

$(".renovation-extras").on("click", function () {
  $(this).toggleClass("_setected");
  let sum = 0;
  let extras = "";

  $(".renovation-extras._setected").each(function () {
    let price = $(this).attr("data-extras-price");
    sum += parseInt(price);

    extras = extras + $(this).text() + ", ";
  });

  repairExtras = sum;
  updateAllRepairCleanPrice();
  updetePrice();

  $('[name="renovationExtras"]').val(extras);
});

let isRepairClinlevel = false;
$("#clRepairStandart").on("click", function () {
  isRepairClinlevel = false;
  $(this).addClass("_select");
  $("#clRepairDeep").removeClass("_select");

  updetePrice();
  $('[name="renovationCleaningLevel"]').val("");
});

$("#clRepairDeep").on("click", function () {
  isRepairClinlevel = true;
  $(this).addClass("_select");
  $("#clRepairStandart").removeClass("_select");

  updetePrice();
  $('[name="renovationCleaningLevel"]').val("Deep");
});

flsModules.numberWindows?.noUiSlider.on("update", function (values, handle) {
  const price = $("#numberWindows").attr("data-price-window");

  if ($('[data-service="5"]').hasClass("_select")) {
    repairWindowPrice = values[handle] * price;
    $('[name="renovationNumberWindows"]').val(values[handle]);
  } else {
    repairWindowPrice = 0;
    $('[name="renovationNumberWindows"]').val("");
  }

  updateAllRepairCleanPrice();
  updetePrice();
});



$("#inside-pr").on("click", function () {
  $(this).toggleClass("_select");

  if ($(this).hasClass("_select") && $("#outside-pr").hasClass("_select")) {
    exteriorWindowPR = true;
  } else {
    exteriorWindowPR = false;
  }

  if($(this).hasClass("_select")) {
    $('[name="renovationWindowsInside"]').val("Inside");
  } else {
    $('[name="renovationWindowsInside"]').val("");
  }

  updateAllRepairCleanPrice();
  updetePrice();
});

$("#outside-pr").on("click", function () {
  $(this).toggleClass("_select");

  if ($(this).hasClass("_select") && $("#inside-pr").hasClass("_select")) {
    exteriorWindowPR = true;
  } else {
    exteriorWindowPR = false;
  }

  if($(this).hasClass("_select")) {
    $('[name="renovationWindowsOutside"]').val("Outside");
  } else {
    $('[name="renovationWindowsOutside"]').val("");
  }


  updateAllRepairCleanPrice();
  updetePrice();
});

$('[data-service="5"]').on("click", function () {
  $('[name="afterRenovationClean"').val($(this).text());

  if (!$(this).hasClass("_select")) {
    //обнуляем стоимость и очищаем ранее выбранные опции
    squerePrice = 0;
    repairExtras = 0;
    repairWindowPrice = 0;
    repairCleanPrice = 0;
    flsModules.numberWindows?.noUiSlider.set(0);
    updateAllRepairCleanPrice();

    $(".after-repair").removeClass("_select");
    $("#clRepairStandart").trigger("click");

    $(".is-furniture").removeClass("_select");
    $(".renovation-extras__wrap").css("display", "none");
    $(".renovation-extras").removeClass("_setected");

    $(".is-window").removeClass("_select");
    $(".window-wash__wrap").css("display", "none");

    $('[name="afterRenovationClean"').val("");
    $('[name="renovationHouseSize"]').val("");
    $('[name="renovationNumberBathrooms"]').val("");
    $('[name="renovationExtras"]').val("");
    $('[name="renovationCleaningLevel"]').val("");
    $('[name="renovationNumberWindows"]').val("");
  }

  updetePrice();
});
// End After renovation ==============================================================

// Control button with calculator ===================================================================
$(".calculator__btn-next").on("click", function () {
  if (!checkSelectedService()) {
    $(".calculator__alerts").fadeIn("slow");
    $(".calculator__alerts").text("Please make a selection to continue.");
    return;
  }

  const hasSelect = $('[data-service="1"]').hasClass("_select");
  if (hasSelect && step === 2 && !checkSelectedRoomSize()) {
    $(".calculator__alerts").fadeIn("slow");
    $(".calculator__alerts").text("Please select your home size to continue.");
    //Please select your home size to continue.
    return;
  }
  
  const hasSelectPR = $('[data-service="5"]').hasClass("_select");
  if (hasSelectPR && step === 2 && !checkSelectedRoomSizePR()) {
    $(".calculator__alerts").fadeIn("slow");
    $(".calculator__alerts").text("Please select your home size to continue.");
    //Please select your home size to continue.
    return;
  }

  const hasLawnSelect = $('[data-service="3"]').hasClass("_select");
  if (hasLawnSelect && step === 2 && !checkSelectedLawnSize() && !checkSelectedGardeningSize()) {
    $(".calculator__alerts").fadeIn("slow");
    $(".calculator__alerts").text(
      "To continue, please select a lawn area or a garden area!"
    );
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
  $(".calculator__steps div").removeClass("_active");
  $(`[data-step=${step}]`).addClass("_active");

  if (step === 1) {
    $(".calculator__services").slideDown("slow");
    $(".calculator__form").slideUp("slow");
    $(".calculator__square").slideUp("slow");

    $(".calculator__total-price").css({ opacity: "0", "max-height": "0" });
    $(".calculator__btn-prev").hide();
    $(".calculator__total-price span").text('');
    scrollTopOffer();
  }

  if (step === 2) {
    $(".calculator__services").slideUp("slow");
    $(".calculator__form").slideUp("slow");
    $(".calculator__square").slideDown("slow");

    $(".calculator__btn-prev").show();
    $(".calculator__btn-next").show();
    $(".calculator__total-price").css({ opacity: "1", "max-height": "unset" });
    $(".calculator__total-price strong").hide();


    // $(".calculator__total-price span").text();
    $('.calculator__full-price').hide();
    updetePrice();

    scrollTopOffer();
  }

  if (step === 3) {
    $(".calculator__square").slideUp("slow");
    $(".calculator__form").slideDown("slow");

    $(".calculator__btn-next").hide();

    //цена без скидки
    let price = $(".calculator__total-price span").text();
    let procent = parseInt($('.payment-options__option._setected').attr("data-discont-procent"));

    if(procent) {
      $('.calculator__full-price').show();
      $('.calculator__full-price span').text(price);

      price = price * ((100 - procent) / 100);
      $(".calculator__total-price span").text(price);
    }

    //встаривание цены в платежную систему
    let totalPrice = price * 1.05;
    $('.stripe-form input[name="item_price"]').val(totalPrice.toFixed(2));
    $("#totalPrice").val(totalPrice.toFixed(2));
    $("#clientId").val(
      $('.stripe-form input[name="client_reference_id"]').val()
    );


    $(".calculator__total-price strong").text("(+GST 5%)");
    $(".calculator__total-price strong").show();
    $(".calculator__total-price strong").removeClass("_plus");

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

function checkSelectedRoomSizePR() {
  const room = document.querySelectorAll(".living-quarters._select");
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

function checkSelectedGardeningSize() {
  const garden = document.querySelectorAll(".gardening-area__item._select");
  if (garden.length) {
    return true;
  } else {
    return false;
  }
}

function showedSpollers() {
  //Скрываем все спойлеры
  $(".calculator__spollers .spollers__item").hide();

  //Открываем необходимые спойлеры под выбранные услуги
  $(".service._select").each(function () {
    let serviceId = $(this).attr("data-service");
    $(`[data-service-filters=${serviceId}]`).show();
  });
}

function updeteHomeCleaningPrice() {
  homeCleaningPrice =
    parseInt(roomPrice) +
    parseInt(bedroomsPrice) +
    parseInt(extrasPrice) +
    parseInt(bathroomsPrice) +
    parseInt(receptionPprice);
}

function updateAllRepairCleanPrice() {
  let windowsPrice = repairWindowPrice;
  const price = $("#numberWindows").attr("data-price-exterior-window");
  let numberWindows = flsModules.numberWindows?.noUiSlider.get()

  if( exteriorWindowPR ) {
    windowsPrice = price * numberWindows;
  }

  repairCleanPrice =
    parseInt(squerePrice) +
    parseInt(repairExtras) +
    parseInt(windowsPrice) +
    parseInt(bathroomsARPrice);
}

// End Common functions ==============================================================================

$(".cleaning-level__item").on("click", function () {
  $(".cleaning-level__item").removeClass("_select");
  $(this).toggleClass("_select");
});

// Lawn area price ==============================================================================
$(".lawn-area__item").on("click", function () {
  $(".lawn-area__item").removeClass("_select");
  $(this).toggleClass("_select");

  const sevicePrice = $('[data-service="3"]').attr("data-service-price");
  const lawnAreaPrice = $(this).attr("data-lawn-area");
  const text = $(this).text();

  lawnPrice = parseInt(lawnAreaPrice) + parseInt(sevicePrice);

  $('[name="lawnArea"]').val($(this).text());

  updetePrice();

  if (text.indexOf("+") > 0) {
    $(".calculator__total-price strong").text("+");
    $(".calculator__total-price strong").show();
    $(".calculator__total-price strong").addClass("_plus");
  } else {
    $(".calculator__total-price strong").removeClass("_plus");
    $(".calculator__total-price strong").hide();
  }
});

$('.gardening-area__item').on('click', function () {
  $('.gardening-area__item').not(this).removeClass("_select");
  $(this).toggleClass("_select");

  if($(this).hasClass("_select")) {
    //калькуляция цены
    const price = $(this).attr('data-garden-area');
    gardenPrice =  parseInt(price);
    updetePrice();

    $('[name="gardenArea"]').val($(this).text());
  }
  else {
    gardenPrice = 0;
    updetePrice();
    $('[name="gardenArea"]').val('');
  }
});

$('[data-service="3"]').on("click", function () {
  if (!$(this).hasClass("_select")) {
    lawnPrice = 0;
    gardenPrice = 0;
    $(".lawn-area__item").removeClass("_select");
    $(".gardening-area__item").removeClass("_select");

    // $('[name="lawnMowing"]').val("");
    $('[name="lawnArea"]').val("");
    $('[name="gardenArea"]').val("");
  }

  // $('[name="lawnMowing"]').val($(this).text());
  updetePrice();
});

// End lawn area price ==============================================================================

$(".payment-options__option").on("click", function () {
  $(".payment-options__option").removeClass("_setected");
  $(this).toggleClass("_setected");

  let procent = parseInt($(this).attr("data-discont-procent"));

  if (procent) {
    $(".payment-options__option").children().css("opacity", "0");
    $(this).children().css("opacity", "1");
    let price = $(".calculator__total-price span").text();

    let totalPrice = price * ((100 - procent) / 100);
    $('.payment-options__desc').slideDown("slow");

    $(this)
      .children()
      .text(`Disc. price: $${totalPrice.toFixed(1)}`);
  } else {
    $(".payment-options__option").children().css("opacity", "0");
    $('.payment-options__desc').slideUp("slow");
  }
});


$(".is-window").on("click", function () {
  $(this).toggleClass("_select");
  $(".window-wash__wrap").fadeToggle("slow");

  // updetePrice();
});

//калькуляция стомости мытья окон ==========================
let exteriorWindow = false;

$("#inside").on("click", function () {
  $(this).toggleClass("_select");

  if ($(this).hasClass("_select") && $("#outside").hasClass("_select")) {
    exteriorWindow = true;
  } else {
    exteriorWindow = false;
  }

  if($(this).hasClass("_select")) {
    $('[name="insideWindowsClean"]').val("Inside");
  } else {
    $('[name="insideWindowsClean"]').val("");
  }

  exteriorWindows();
});

$("#outside").on("click", function () {
  $(this).toggleClass("_select");

  if ($(this).hasClass("_select") && $("#inside").hasClass("_select")) {
    exteriorWindow = true;
  } else {
    exteriorWindow = false;
  }

  if($(this).hasClass("_select")) {
    $('[name="outsideWindowsClean"]').val("Outside");
  } else {
    $('[name="outsideWindowsClean"]').val("");
  }


  exteriorWindows();
});

function exteriorWindows() {
  const price = $("#rangeWindows").attr("data-price-window");
  const price2 = $("#rangeWindows").attr("data-price-exterior-window");
  const departurePrice = $("#rangeWindows").attr("data-price-one-window");
  const numberWindow = parseInt(flsModules.rangeWindows?.noUiSlider.get());

  if (!exteriorWindow) {
    windowsPrice = numberWindow * price + parseInt(departurePrice);
  } else {
    windowsPrice = numberWindow * price2 + parseInt(departurePrice);
  }

  updetePrice();
}

$('[data-service="2"]').on("click", function () {
  if ($(this).hasClass("_select")) {
    const price = $("#rangeWindows").attr("data-price-one-window");
    windowsPrice = parseInt(price);

    $('[name="cleaningWindow"]').val($(this).text());
    $('[name="outsideWindowsClean"]').val("Outside");
  } else {
    windowsPrice = 0;
    flsModules.rangeWindows?.noUiSlider.set(0);

    $('[name="cleaningWindow"]').val("");
    $('[name="numberWindow"]').val("");
    $('[name="interiorWindowsClean"]').val("");
  }

  updetePrice();
});

flsModules.rangeWindows?.noUiSlider.on("update", function (values, handle) {
  const price = $("#rangeWindows").attr("data-price-window");
  const price2 = $("#rangeWindows").attr("data-price-exterior-window");
  const departurePrice = $("#rangeWindows").attr("data-price-one-window");

  if ($('[data-service="2"]').hasClass("_select")) {
    if (!exteriorWindow) {
      windowsPrice = values[handle] * price + parseInt(departurePrice);
    } else {
      windowsPrice = values[handle] * price2 + parseInt(departurePrice);
    }

    $('[name="numberWindow"]').val(values[handle]);
  } else {
    windowsPrice = 0;

    $('[name="numberWindow"]').val("");
  }

  updetePrice();
});
//конец калькуляции стомости мытья окон ==========================

// Drain pipe cleaning ===============================================
$('[data-service="4"]').on("click", function () {
  if ($(this).hasClass("_select")) {
    const price = $("#rangePipe").attr("data-price-one-pipe");
    pipePrice = parseInt(price);

    $('[name="pipeCleaning"]').val($(this).text());
  } else {
    pipePrice = 0;
    flsModules.rangePipe?.noUiSlider.set(0);

    $('[name="pipeCleaning"]').val("");
    $('[name="pipeCleaningNumber"]').val("");
  }

  updetePrice();
});

flsModules.rangePipe?.noUiSlider.on("update", function (values, handle) {
  const price = $("#rangePipe").attr("data-price-pipe");
  const departurePrice = $("#rangePipe").attr("data-price-one-pipe");

  if ($('[data-service="4"]').hasClass("_select")) {
    pipePrice = values[handle] * price + parseInt(departurePrice);

    $('[name="pipeCleaningNumber"]').val(values[handle]);
  } else {
    pipePrice = 0;
    $('[name="pipeCleaningNumber"]').val("");
  }

  updetePrice();
});
// Drain pipe cleaning ===============================================

$('[data-service="6"]').on("click", function () {
  if ($(this).hasClass("_select")) {
    flsModules.popup.open("#popup");
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

function updateDiscountPrice() {
  let procent = parseInt(
    $(".payment-options__option._setected").attr("data-discont-procent")
  );

  if (procent) {
    $(".calculator__discount").css("opacity", "1");
    let price = $(".calculator__total-price span").text();

    let totalPrice = price * ((100 - procent) / 100);

    $(".calculator__discount span").text(totalPrice.toFixed(1));
  } else {
    $(".calculator__discount").css("opacity", "0");
    $(".calculator__discount span").text(0);
  }
}

function updetePrice() {
  // let isExtras = $(".living-extras._setected");
  let dopProcent = 0;

  if (isDeep) {
    dopProcent = homeCleaningPrice * 1.2 - homeCleaningPrice;
  }

  // let isRepairExtras = $(".renovation-extras._setected");
  let dopRepairProcent = 0;

  if (isRepairClinlevel) {
    dopRepairProcent = repairCleanPrice * 1.25 - repairCleanPrice;
  }

  let finalPrice =
    parseInt(homeCleaningPrice) +
    parseInt(dopProcent) +
    parseInt(windowsPrice) +
    parseInt(lawnPrice) +
    parseInt(gardenPrice) +
    parseInt(pipePrice) +
    (parseInt(repairCleanPrice) + parseInt(dopRepairProcent));

  $(".calculator__total-price span").text(finalPrice);

  updateDiscountPrice();
}

//Payment button
$("#buyNowBtn").on("click", function () {
  $("#calcForm").addClass("payment");
  $("#bookNowBtn").trigger("click");
  // $( '.stripe-form input[type="submit"]' ).trigger( "click" );
});

$("#payment_method").on("change", function () {
  if (this.value == 2) {
    $("#calcForm").addClass("payment");
    $("#clientId").val(
      $('.stripe-form input[name="client_reference_id"]').val()
    );
  } else {
    $("#calcForm").removeClass("payment");
    $("#clientId").val('');
  }
});

//Module calendar
let datapiker = flatpickr("#cleaningDate", {
  position: "above",
  minDate: new Date(),
  onChange: function(selectedDates, dateStr, instance) {
    if(selectedDates.length == 0) {
      setDatePick();
    }
  },
});

$('#cleaningDate').on('input', function(){

  if($(this).val() === '') {
    setDatePick();
  }
});

function setDatePick() {
  try {
    datapiker.setDate(new Date(), true);
  } catch(e) {
    console.error(e);
  }
  
}

setDatePick();


let timepicker = flatpickr("#timeInput", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  position: "above",
  onChange: function(selectedDates, dateStr, instance) {
    if(selectedDates.length == 0) {
      setTime();
    }
  },
});

function setTime(){
    try {
      timepicker.setDate("12:00",true);
    } catch (e) {
      console.error(e);
    }
}

$('#timeInput').on('input', function(){

  if($(this).val() === '') {
    setTime();
  }
});

setTime();







document.addEventListener("DOMContentLoaded", function () {
  const toggleLinks = document.querySelectorAll(".read-more .toggle-link");

  toggleLinks.forEach(function (toggleLink) {
    toggleLink.addEventListener("click", function (event) {
      event.preventDefault();
      const content = this.parentNode.querySelector(".content");
      content.classList.toggle("expanded");
      this.textContent = content.classList.contains("expanded")
        ? "Read Less"
        : "Read More";
    });
  });
});

document.querySelector(".banner__btn")?.addEventListener("click", function () {
  flsModules.popup.open("#popup");
});
document.querySelector(".poster__btn")?.addEventListener("click", function () {
  flsModules.popup.open("#popup");
});
document.querySelector(".header__btn")?.addEventListener("click", function () {
  flsModules.popup.open("#popup");
});

$('.menu__link').on('click', function(){
  if(!$(this).is('[data-goto]')) {
    document.documentElement.classList.contains("menu-open") ? menuClose() : null;
  }
});

//client_reference_id

$('.review__link').on('click', function(){
  $(this).parent('.review').toggleClass('_more');
});
