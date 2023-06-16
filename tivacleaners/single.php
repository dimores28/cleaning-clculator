<?php
/*
Template Name: Post
*/
?>

<?php get_header();?>

<?php the_post(); have_posts(); ?>

<section class="post">
    <div class="post__container">
        <h1 class="post__heading section-heading">
            <?php the_title() ?>
        </h1>
        <div class="post__content">
            <?php the_content(); ?>
        </div>
        <div class="post__data-wrap">
            <div class="post__data"><?php echo the_time('F j Y'); ?></div>
        </div>
    </div>
</section>

<?php get_footer();?>