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

const service = `
      <div class="order-table__product product">
          <h4 class="product__heading">
            Post Renovations
          </h4>
          <div class="product__row">
            <div class="product__name">
              Number of Bathrooms
            </div>
            <div class="product__total-options">
              8.00
            </div>
          </div>
          <div class="product__row">
            <div class="product__name">
              Number of Bathrooms
            </div>
            <div class="product__total-options">
              8.00
            </div>
          </div>
      </div>
`;

// Cleaning houses
function orderCleaningApartments() {
   if($('input[name="houseClean"]').val()) {
      let row = ``;

      if($('input[name="houseSize"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
            House size:
            </div>
            <div class="product__total-options">
              ${$('input[name="houseSize"]').val()}
            </div>
          </div>
         `;
      }

      if($('input[name="numberBeadroom"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
              Number of Beadroom:
            </div>
            <div class="product__total-options">
              ${$('input[name="numberBeadroom"]').val()}
            </div>
          </div>
         `;
      }

      if($('input[name="numberBathrooms"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
              Number of Bathrooms:
            </div>
            <div class="product__total-options">
              ${$('input[name="numberBathrooms"]').val()}
            </div>
          </div>
         `;
      }

      if($('input[name="numberReception"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
              Number of Reception:
            </div>
            <div class="product__total-options">
              ${$('input[name="numberReception"]').val()}
            </div>
          </div>
         `;
      }

      if($('input[name="extras"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
               Extras:
            </div>
            <div class="product__total-options">
              ${$('input[name="extras"]').val()}
            </div>
          </div>
         `;
      }

      if($('input[name="cleaningLevel"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
               Cleaning level:
            </div>
            <div class="product__total-options">
              ${$('input[name="cleaningLevel"]').val()}
            </div>
          </div>
         `;
      }

      let cleaningApartments = `
      <div class="order-table__product product">
          <h4 class="product__heading">
            Cleaning houses
          </h4>
         ${row}
      </div>
      `;

      return cleaningApartments;
   } else  {
      return '';
   }
}
// window cleaning
function orderWindowCleaning() {
   if($('input[name="cleaningWindow"]').val()) {
      let row = ``;

      if($('input[name="numberWindow"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
               Number Window:
            </div>
            <div class="product__total-options">
              ${$('input[name="numberWindow"]').val()}
            </div>
          </div>
         `;
      }

      if($('input[name="insideWindowsClean"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
               Inside Windows Clean:
            </div>
            <div class="product__total-options">
              ${$('input[name="insideWindowsClean"]').val()}
            </div>
          </div>
         `;
      }

      if($('input[name="outsideWindowsClean"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
               Outside Windows Clean:
            </div>
            <div class="product__total-options">
              ${$('input[name="outsideWindowsClean"]').val()}
            </div>
          </div>
         `;
      }

      let cleaningWindow = `
      <div class="order-table__product product">
         <h4 class="product__heading">
            Window Cleaning
         </h4>
         ${row}
      </div>
      `;

      return cleaningWindow;
   } else {
      return '';
   }
}

// Lawn mowing
function orderLawnMowing() {
   if($('input[name="lawnArea"]').val() || $('input[name="gardenArea"]').val()) {
      let row = ``;

      if($('input[name="lawnArea"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
               Lawn Area:
            </div>
            <div class="product__total-options">
              ${$('input[name="lawnArea"]').val()}
            </div>
          </div>
         `;
      }

      if($('input[name="gardenArea"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
               Garden Area:
            </div>
            <div class="product__total-options">
              ${$('input[name="gardenArea"]').val()}
            </div>
          </div>
         `;
      }

      let lawnMowing = `
      <div class="order-table__product product">
         <h4 class="product__heading">
            Lawn Mowing
         </h4>
         ${row}
      </div>
      `;

      return lawnMowing;
   } else {
      return '';
   }
}

// Carpet cleaning
function orderCarpetCleaning() {
   if($('input[name="snowCarpetArea"]').val()) {
      let row = ``;

      if($('input[name="snowCarpetArea"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
               Carpet area:
            </div>
            <div class="product__total-options">
              ${$('input[name="snowCarpetArea"]').val()}
            </div>
          </div>
         `;
      }

      if($('input[name="snowCarpetLevel"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
               Snow carpet level:
            </div>
            <div class="product__total-options">
              ${$('input[name="snowCarpetLevel"]').val()}
            </div>
          </div>
         `;
      }

      let carpetCleaning = `
      <div class="order-table__product product">
         <h4 class="product__heading">
            Snow Carpet
         </h4>
         ${row}
      </div>
      `;
      return carpetCleaning;
   } else {
      return '';
   }
}

// After renovation
function orderAfterRenovation() {
   if($('input[name="afterRenovationClean"]').val()) {
      let row = ``;

      if($('input[name="renovationHouseSize"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
            House size:
            </div>
            <div class="product__total-options">
              ${$('input[name="renovationHouseSize"]').val()}
            </div>
          </div>
         `;
      }

      if($('input[name="renovationNumberBathrooms"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
               Number bathrooms:
            </div>
            <div class="product__total-options">
              ${$('input[name="renovationNumberBathrooms"]').val()}
            </div>
          </div>
         `;
      }

      if($('input[name="renovationNumberBedrooms"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
               Number bedrooms:
            </div>
            <div class="product__total-options">
              ${$('input[name="renovationNumberBedrooms"]').val()}
            </div>
          </div>
         `;
      }

      if($('input[name="renovationNumberReception"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
               Number reception:
            </div>
            <div class="product__total-options">
              ${$('input[name="renovationNumberReception"]').val()}
            </div>
          </div>
         `;
      }

      if($('input[name="renovationExtras"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
               Extras:
            </div>
            <div class="product__total-options">
              ${$('input[name="renovationExtras"]').val()}
            </div>
          </div>
         `;
      }

      if($('input[name="renovationCleaningLevel"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
               Cleaning level:
            </div>
            <div class="product__total-options">
              ${$('input[name="renovationCleaningLevel"]').val()}
            </div>
          </div>
         `;
      }

      if($('input[name="renovationNumberWindows"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
               Number windows:
            </div>
            <div class="product__total-options">
              ${$('input[name="renovationNumberWindows"]').val()}
            </div>
          </div>
         `;
      }

      if($('input[name="renovationWindowsInside"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
              Windows inside:
            </div>
            <div class="product__total-options">
              ${$('input[name="renovationWindowsInside"]').val()}
            </div>
          </div>
         `;
      }

      if($('input[name="renovationWindowsOutside"]').val()) {
         row += `
         <div class="product__row">
            <div class="product__name">
               Windows outside:
            </div>
            <div class="product__total-options">
              ${$('input[name="renovationWindowsOutside"]').val()}
            </div>
          </div>
         `;
      }

      let afterRenovation = `
      <div class="order-table__product product">
         <h4 class="product__heading">
            Post Renovations
         </h4>
         ${row}
      </div>
      `;

      return afterRenovation;
   } else {
      return '';
   }
}

flsModules.printOrderTable = () =>{
   let table = '';

   table += orderCleaningApartments();
   table += orderWindowCleaning();
   table += orderLawnMowing();
   table += orderCarpetCleaning();
   table += orderAfterRenovation();

   return table;
}