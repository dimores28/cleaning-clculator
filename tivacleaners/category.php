<?php
/*
Template Name: category
*/
?>

<?php get_header();?>
<div class="ctegory__container" style="background: #90e0ef; padding: 20px">

    <div class="select-extras" style="margin-top: 150px">
        <?php foreach(getExtras() as $extra) {?>

            <div class="select-extras__item living-extras" data-extras-price="<?php echo $extra["Extras-priceprice"];?>">
                <div class="select-extras__img">
                    <?php echo $extra["svg_icon"];?>
                </div>
                <div class="select-extras__desc">
                    <?php echo $extra["title"];?>
                </div>
            </div>
        <?php }?>
    </div>

    <div class="calculator__rooms" style="margin-top: 40px">
        <?php foreach(getHouseAreas() as $area) {?>
            <div class="room living-quarters" data-room-price="<?php echo $area["house-area-price"];?>">
                <div class="room__img">
                    <img src="<?php echo $area["img"];?>" alt="house image" width="134" height="55" />
                </div>
                <?php echo $area["title"];?>
            </div>
        <?php }?>
    </div>

    <div class="bedrooms" style="margin-top: 40px">
        <h4 class="bedrooms__title">
            Number of bedroom:
        </h4>

        <div class="bedrooms__block">
            <?php foreach(getBedrooms() as $bedroom) {?>
                <div class="bedrooms__item" data-bedroom-price="<?php echo $bedroom["bedroom_price"];?>">
                    <div class="bedrooms__img">
                        <img src="<?php echo $bedroom["img"];?>" alt="bedroom icon" width="48" height="48" />
                    </div>
                    <?php echo $bedroom["title"];?>
                </div>
            <?php }?>
        </div>
    </div>

    <div class="bathrooms" style="margin-top: 40px">
        <h4 class="bathrooms__title">
            Number of bathrooms:
        </h4>
        <div class="bathrooms__block">
            <?php foreach(getBathrooms() as $bathroom) {?>
                <div class="bathrooms__item" data-bathrooms-price="<?php echo $bathroom["bathroom_price"];?>">
                    <div class="bathrooms__img">
                        <img src="<?php echo $bathroom["img"];?>" alt="bathrooms icon" width="48" height="48" />
                    </div>
                    <?php echo $bathroom["title"];?>
                </div>
            <?php }?>
        </div>
    </div>

    <div class="lawn-area" style="margin-top: 40px">
        <?php foreach(getLawnArea() as $lawn) {?>
            <div class="lawn-area__item" data-lawn-area="<?php echo $lawn["lawn_area_price"];?>">
                <div class="lawn-area__img">
                    <img src="<?php echo $lawn["img"];?>" alt="lawn icon" width="48" height="48" />
                </div>
                <?php echo $lawn["title"];?>
            </div>
        <?php }?>
    </div>
    
    <pre>
        <!-- <?php print_r(getWindow()); ?> -->
    </pre>

    <pre>
        <?php print_r(getReviews()); ?> 
    </pre>

    <section class="reviews" id="reviews">
        <div class="reviews__container">
           <h2 class="reviews__heading">
              What Our Customers Are Saying.
           </h2>
           <div class="reviews__content">
              <div class="reviews__slider swiper">
                <div class="reviews__wrapper swiper-wrapper">
                  <?php foreach(getReviews() as $review) {?>
                    <div class="reviews__slide swiper-slide review">

                        <div class="review__head">
                        <div class="review__photo">
                            <img src="<?php echo $review["img"];?>" alt="photo" width="40" height="40">
                        </div>
                        <div>
                            <h3 class="review__fullname"><?php echo $review["title"];?></h3>
                            <div class="review__date"><?php echo $review["сomment_date"];?></div>
                        </div>
                        </div>


                        <div class="rating review__rating">
                        <div class="rating__body">
                            <div class="rating__active"></div>
                            <div class="rating__items">
                            <input type="radio" class="rating__item" value="1" name="rating">
                            <input type="radio" class="rating__item" value="2" name="rating">
                            <input type="radio" class="rating__item" value="3" name="rating">
                            <input type="radio" class="rating__item" value="4" name="rating">
                            <input type="radio" class="rating__item" value="5" name="rating">
                            </div>
                        </div>
                        <div class="rating__value"><?php echo $review["rating"];?></div>
                        </div>

                        <p class="review__text">
                            <?php echo $review["feedback_text"];?>
                        </p>
                        <button class="review__link">Read More</button>
                        
                    </div>
                  <?php }?>
                </div>
              </div>
           </div>
        </div>
    </section>

</div>

<?php get_footer();?>