<?php
/*
Template Name: Post
*/
?>

<?php get_header();?>

<?php the_post(); have_posts(); ?>

<section class="article">
    <div class="article__container">

        <h1 class="article__heading">
            <?php the_title() ?>
        </h1>

        <div class="article__content">
            <?php the_content(); ?>
        </div>

        <div class="">
            <div class="article__data">
                <?php echo the_time('F j Y'); ?>
            </div>
        </div>
    </div>
</section>

<?php get_footer();?>