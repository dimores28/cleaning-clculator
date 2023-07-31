



$('[data-service="7"]').on("click", function () {
   if (!$(this).hasClass("_select")) {
     snowPrice = 0;

     $(".removal__item").removeClass("_select");
     $('[name="snowRemovalArea"]').val("");

   }
 
   // updetePrice();
 });
 
