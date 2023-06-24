<?php
/*
Template Name: Blog
*/
?>

<?php get_header();?>

   <section class="blog blog-page" id="blog">
      <img src="img/themes/blog_bg.png" class="blog__bg" alt="background image">
      <div class="blog__container">
         <h3 class="blog__subheading">OUR ARTICLES</h3>
         <h2 class="blog__heading">What’s News</h2>
         <div class="blog__posts">
            <?php
               global $post;

               $myposts = get_posts([ 
                  'numberposts' => -1,
                  'order'       => 'ASC',
                  'category'    => 0
               ]);

               if( $myposts ){
                  foreach( $myposts as $post ){
                        setup_postdata( $post );
                  ?>
                     <article class="post">
                        <div class="post__img">
                           <a href="<?php echo get_the_permalink(); ?>">
                              <?php 
                              if(has_post_thumbnail()) {
                                 the_post_thumbnail(
                                    array(380, 260),
                                    array('alt'   => "Post thumbnail",)
                                 );
                              } else { ?>
                                 <img src="<?php bloginfo('template_url'); ?>/assets/img/blog/post1.jpg" alt="Post thumbnail" />
                              <?php } ?>
                           </a>
                        </div>
                        <div class="post__meta">
                           <div class="post__date"><?php the_time('F j Y'); ?></div>
                           <div class="post__coment">
                              <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="14" height="14" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 8859.74 7814.53" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xodm="http://www.corel.com/coreldraw/odm/2003">
                                 <g id="Layer_x0020_1">
                                    <path class="fil0" d="M4499.09 6758.78c-340.49,0 -637.87,-19.45 -947.02,-73.92 -454.94,-80.15 -454.24,-112.99 -766.08,-185.65 -59.25,43.42 -415.31,557.96 -917.13,674.87 123.78,-233.92 207.66,-593.29 207.66,-951.73 0,-48.52 -194.53,-152.79 -276.87,-207.66 -95.57,-63.68 -202.99,-134.42 -289.73,-212.09 -472.92,-423.48 -816.57,-861.8 -943.68,-1530.82 -79.73,-419.6 -50.18,-825.5 67.67,-1222.46 73.79,-248.53 158.78,-428.39 265.7,-634.12 128.45,-247.16 481.21,-703.71 692.39,-864.98 48.89,-37.33 71.69,-68.71 118.42,-106.54 357.39,-289.38 699.85,-476.85 1137.43,-644.91 502.64,-193.05 1039.43,-269.49 1668.57,-269.49 1688.66,0 3273.15,781.63 3713.12,2343.34 30.81,109.39 62.76,244.35 75.25,357.36l37.11 413.94c-1.51,86.02 -17.35,95.13 -18.66,190.36 -2.33,170.7 -47.3,401.48 -93.54,564.04 -66.45,233.64 -99.12,279.93 -175.71,464.54 -329.08,793.28 -1200.95,1419.02 -2029.91,1673.19 -428.18,131.28 -963.12,222.75 -1524.98,222.75zm-4499.09 -3097.45c0,411.66 12.2,736.16 158.17,1122.34 134.93,357 308.36,684.82 555.15,967.61 246.35,282.28 365.96,392.83 663.58,616.93 26.3,19.81 145.87,97.19 145.87,113.7 0,328.44 -253.77,714.21 -454.2,912.83l-411.02 419.59c824.82,0 1237.47,20.94 1878.99,-370.56l323.29 -247.75c144.63,-140.58 41.89,-96.39 426.35,-20.33 256.49,50.76 474.61,71.28 730.92,99.69l395.47 19.83c839.5,0 1701.92,-159.96 2445.66,-530.66 481.15,-239.83 767.07,-488.53 1132.32,-857.66 480.17,-485.28 869.19,-1444.61 869.19,-2141.73 0,-736.63 -99.65,-1166.7 -432.6,-1782.34 -108.32,-200.26 -259.13,-412.11 -410.95,-575.4 -188.77,-203.04 -286.5,-314.75 -515.91,-487.74 -370.95,-279.73 -809.55,-518.13 -1303.18,-669.48 -248.15,-76.09 -525.33,-142.3 -803.21,-183.14 -1942.7,-285.47 -3923.22,331.11 -4919.38,2026.89 -247.45,421.24 -474.51,1047.45 -474.51,1567.38z" />
                                 </g>
                              </svg>
                              <span>0</span>
                           </div>
                        </div>
                        <h3 class="post__title">
                           <a href="<?php echo get_the_permalink(); ?>">
                              <?php the_title(); ?>
                           </a>
                        </h3>

                        <div class="post__text">
                           <?php the_content(); ?>
                        </div>
                     </article>
                  <?php 
                  }
               } wp_reset_postdata(); // Сбрасываем $post 
            ?>

            

         </div>
      </div>
   </section>

<?php get_footer();?>