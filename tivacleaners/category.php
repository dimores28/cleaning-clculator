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
        <!-- <?php print_r(getReviews()); ?>  -->
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

    <pre>
        <!-- <?php print_r(getGardenArea()); ?>  -->
    </pre>


    <div class="gardening-area">
        <?php foreach(getGardenArea() as $garden) {?>
            <div class="gardening-area__item" data-garden-area="<?php echo $garden["garden_area"];?>">
                <div class="gardening-area__img">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="48" height="48" style="
                        shape-rendering: geometricPrecision;
                        text-rendering: geometricPrecision;
                        image-rendering: optimizeQuality;
                        fill-rule: evenodd;
                        clip-rule: evenodd;
                        " viewBox="0 0 1933.08 1774.43" xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
                    <g id="Layer_x0020_1">
                        <metadata id="CorelCorpID_0Corel-Layer" />
                        <path class="fil0"
                        d="M1612.15 1574.1c0,-67.76 55.36,-120.81 105.71,-120.81l26.43 0c51.24,0 105.71,54.47 105.71,105.72 0,44.03 -0.58,62.91 -36.73,99.18 -70.89,71.11 -201.12,20.53 -201.12,-84.09zm-766.44 -45.3c0,51.21 49.8,50.7 69.13,31.38 19.33,-19.33 19.84,-69.13 -31.38,-69.13 -21.21,0 -37.76,16.54 -37.76,37.76zm845.72 37.76c0,31.28 14.17,45.3 45.31,45.3 33.55,0 48.22,-44.73 23.82,-69.13 -24.4,-24.39 -69.13,-9.72 -69.13,23.83zm241.64 -13.27l0 33.44c-3.99,46.68 -24.67,93.24 -63.18,131.85 -114.02,114.3 -282.87,23.63 -295.5,-23.65l-513.47 0c-3.94,14.75 -2.27,8.27 -13.33,16.87 -7.81,6.07 -9.46,8.46 -16.26,13.95 -75.9,61.3 -190.41,63.71 -274.72,12.98 -67.14,-40.4 -95.97,-97.97 -110.66,-168.73 -2.32,-11.15 1.7,-3.57 -3.84,-11.26 -7.68,-10.67 -275.03,-131.54 -337.96,-179.29 -49.81,-37.79 -69.02,-65.42 -101.02,-117.97 -39.27,-64.51 -44.57,-146.38 -44.57,-249.92 0,-146.93 3.52,-335.67 0.31,-479.8 -0.46,-20.72 -0.32,-15.11 -9.85,-27.9l-123.67 -170.83c-8.04,-10.74 -25.36,-31.21 -25.36,-46.37l0 -177.45c0,-28.84 22.39,-64.31 38.73,-78.31 80.23,-68.75 203.32,-15.63 203.05,89.5 -0.21,80.83 -15.63,83.92 18.71,132.31 4.41,6.21 7.34,11.03 12.39,17.81l587.41 794.44c60.02,80.01 23.79,63.64 144.01,63.64 0,-69.83 -10.28,-140.62 31.01,-184.2 58.72,-61.97 138.56,-35.79 214.67,-19.96 65.39,13.6 164.86,25.03 200.88,59.64 47.39,45.54 40.48,80.56 40.48,144.52 37.2,0 69.51,15.24 89.64,38.73 41.28,48.17 31.18,112.12 31.18,184.03 50.47,0 181.43,21.41 219.78,44.52 61.28,36.93 95.87,95.62 101.15,157.42zm-1208.17 -20.71c0,-60.45 39.4,-123.27 94.79,-146.85 116.14,-49.44 226.13,36.88 226.13,146.85 0,175.46 -238.12,216.28 -305.85,64.21 -6.36,-14.27 -15.07,-43.97 -15.07,-64.21zm0 -185l0 -135.92 336.02 0c9.22,0 8.82,3.32 13.76,8.9 0.59,0.66 8.33,11.65 9.45,13.19 6.97,9.51 12.07,16.16 19.4,25.92 108.31,144.29 44.02,100 318.74,145.65 25.39,4.22 53.19,7.69 82.05,12.34 16.12,2.59 23.07,3.82 39.24,6.06 12.21,1.69 29.45,5.87 42.16,6.92 -13.51,20.18 -25.53,28.28 -38.88,59.28 -28.54,66.28 -14.77,86.18 -13.97,121.95l-419.08 0c59.42,-123.85 -51.15,-320.91 -211.43,-320.91 -46.79,0 -69.78,-0.59 -113.27,18.87 -34,15.21 -55.27,35.37 -64.18,37.76zm449.29 -135.92l294.52 -0.02c70.33,-0.47 60.38,13.32 60.38,124.62l-207.1 -30.75c-109.04,-18.45 -77.38,2.89 -136.56,-74.87l-11.24 -18.97zm-86.84 -177.45c0,-74.27 77.52,-42.26 114.21,-34.92 27.54,5.51 52.7,10.54 78.65,15.73 137.33,27.47 128.06,12.8 128.06,109.8l-320.92 0 0 -90.61zm-845.72 -400.21c12.15,8.14 23.85,29.12 33.39,42.11l160.78 220.55c23.21,30.7 42.42,58.84 65.3,89.49l128.76 177.06c16.93,23.95 12.03,25.9 11.98,63.54l0 234.08c-13.27,-3.09 -40.9,-16.59 -52.88,-22.64 -68.72,-34.69 -190.42,-89.02 -247.59,-133.73 -112.82,-88.22 -99.74,-226.29 -99.74,-360.88 0,-103.19 0,-206.39 0,-309.59zm-158.57 -366.22l0 -151.03c0,-38.97 57.29,-43.71 71.97,-15.33 9.97,19.29 -3.74,119.82 7.88,154.47 4.5,13.45 121.29,168.16 134.82,186.1l139.13 189.35c31.54,41.91 60.8,82.4 91.71,123.49l229.24 310.67c8.62,11.48 13.86,18.51 22.21,30.65 8.45,12.27 16.73,21.35 24.17,32.46l-98.16 0 -57.22 -78.7c-7.61,-10.37 -12.25,-17.8 -20.44,-28.64l-97.11 -133.2c-7.37,-9.78 -11.54,-16.73 -18.82,-26.49l-351.6 -482.79c-13.56,-19.71 -25.59,-36.12 -39.43,-54.96 -6.08,-8.28 -38.33,-48.81 -38.33,-56.05z" />
                    </g>
                    </svg>
                </div>
                <?php echo $garden["title"];?>
            </div>
        <?php }?>
    </div>

</div>

<?php get_footer();?>