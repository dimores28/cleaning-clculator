// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

let step = 1;
let roomPrice = 0;

$('.room').on('click', function() {
   $('.room').removeClass('_select');
   $(this).addClass('_select');

   const price = $(this).attr('data-room-price');

   $('.calculator__total-price span').text(price);
   roomPrice = price;
});

$('.service').on('click', function() {
   $(this).toggleClass('_select');
   let sum = 0;

   $('.service._select').each( function() {
      sum += parseInt($(this).attr('data-service-price'));
   });

   $('.calculator__total-price span').text( parseInt(roomPrice) + parseInt(sum));


});

$('.calculator__btn-next').on('click', function() {

   if(step < 3) {
      step++;
      $('.calculator__steps span').text(step);
   }

   if(step === 2) {
      $('.calculator__square').hide();
      $('.calculator__services').show();
   }

   if(step === 3) {
      $('.calculator__services').hide();
      $(this).hide();
      $('.calculator__form').show();
   }
});
