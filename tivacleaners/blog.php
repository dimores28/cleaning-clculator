<?php
/*
Template Name: Blog
*/
?>

<?php get_header();?>
   <section class="blog">
      <div class="blog__container">
         <h2 class="blog__heading section-heading">Blog</h2>
         <div class="blog__content articles">
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
                        <article class="articles__item article-card">
                           <div class="article-card__img">
                              <a href="<?php echo get_the_permalink(); ?>">
                                 <?php 
                                    if(has_post_thumbnail()) {
                                       the_post_thumbnail(
                                          array(565, 250),
                                          array('alt'   => "Post thumbnail",)
                                       );
                                    } else { ?>
                                       <img src="<?php bloginfo('template_url'); ?>/assets/img/blog/blog1.webp" alt="Post thumbnail" />
                                    <?php } ?>
                                 
                              </a>
                           </div>

                           <div class="article-card__content">
                              <h3 class="article-card__title">
                                 <a href="<?php echo get_the_permalink(); ?>">
                                       <?php the_title(); ?>
                                 </a>
                              </h3>

                              <div class="article-card__text">
                                 <?php the_content(); ?>
                              </div>

                              <div class="article-card__block">
                                 <div class="article-card__category">
                                    By: <a href="#">Carpet washing</a>
                                 </div>
                                 <div class="article-card__date">
                                    <span>
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          viewBox="0 0 16 16">
                                          <path
                                             d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                                          <path
                                             d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                                       </svg>
                                    </span>
                                    <?php the_time('F j Y'); ?>
                                 </div>
                              </div>
                              <a href="<?php echo get_the_permalink(); ?>" class="btn btn-form article-card__btn"
                                 >READ MORE</a
                              >
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