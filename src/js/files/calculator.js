let snowPrice = 0;

$(".removal__item").on("click", function () {
   $(".removal__item").removeClass("_select");
   $(this).toggleClass("_select");
 
   const snowAreaPrice = $(this).attr("data-removal-price");
   const text = $(this).text();
 
 
   $('[name="snowRemovalArea"]').val($(this).text());
 
   // updetePrice();
 
   if (text.indexOf("+") > 0) {
     $(".calculator__total-price strong").text("+");
     $(".calculator__total-price strong").show();
     $(".calculator__total-price strong").addClass("_plus");
   } else {
     $(".calculator__total-price strong").removeClass("_plus");
     $(".calculator__total-price strong").hide();
   }
 });

$('[data-service="7"]').on("click", function () {
   if (!$(this).hasClass("_select")) {
     snowPrice = 0;

     $(".removal__item").removeClass("_select");
     $('[name="snowRemovalArea"]').val("");

   }
 
   // updetePrice();
 });
 
