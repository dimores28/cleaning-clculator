import { flsModules } from "../files/modules.js";

$("#kitchen-link").on('click', function() {
   $("#kitchen .spollers__title").trigger('click');
});

// $("#bathroom-link").on('click', function() {
//    $("#bathroom .spollers__title").trigger('click');
// });

// $("#other-rooms-link").on('click', function() {
//    $("#other-rooms .spollers__title").trigger('click');
// });

$('#consentDataTransfer').on('change',function() {
   // this will contain a reference to the checkbox
   if (this.checked) {
       $('#bookNowBtn').prop('disabled', false);
   } else {
      $('#bookNowBtn').prop('disabled', true);
   }
});

$('.menu__item_sub').on('click', function() {
   $(this).toggleClass('_show-submenu');
});

$('.services-content__container .wp-block-button__link').on('click', function() {
   flsModules.popup.open("#popup");
});