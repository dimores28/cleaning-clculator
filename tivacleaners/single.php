<?php
/*
Template Name: Post
*/
?>

<?php get_header();?>
<?php the_post(); have_posts(); ?>


<section class="post">
    <div class="post__container">
        <div class="post__img">
            <?php 
                the_post_thumbnail(
                    array(565, 250),
                    array('alt'   => "Post thumbnail",)
                );
            ?>
        </div>

        <h1 class="post__heading section-heading"><?php the_title() ?></h1>

        <div class="post__content">
            <?php the_content(); ?>
        </div>
    </div>
    <div class="post__data"><?php echo the_time('F j Y'); ?></div>
    <div>Post author: <?php the_author(); ?></div>
    <p>Категории: <?php the_category(); ?></p>
</section>
<?php get_footer();?>