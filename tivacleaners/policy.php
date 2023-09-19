<?php
/*
Template Name: Privacy policy
*/
?>

<?php get_header();?>

<?php the_post(); have_posts(); ?>

<section class="policy">
    <div class="policy__container">

        <h1 class="policy__heading">
            <?php the_title() ?>
        </h1>

        <div class="policy__content">
            <?php the_content(); ?>
        </div>

    </div>
</section>

<?php get_footer();?>
