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
   }

   stepControl();
});

$('.calculator__btn-prev').on('click', function() {
   if(step >= 2) {
      step--;
   }
   
   stepControl();
});


function stepControl() {
   $('.calculator__steps span').text(step);

   if( step ===1 ) {
      $('.calculator__square').show();
      $('.calculator__form').hide();
      $('.calculator__services').hide();
      $('.calculator__btn-prev').hide();
   }

   if(step === 2) {
      $('.calculator__square').hide();
      $('.calculator__form').hide();
      $('.calculator__btn-prev').show();
      $('.calculator__btn-next').show();
      $('.calculator__services').show();
   }

   if(step === 3) {
      $('.calculator__services').hide();
      $('.calculator__btn-next').hide();
      $('.calculator__form').show();
   }
}
