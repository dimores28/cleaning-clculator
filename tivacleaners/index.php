<?php get_header();?>
    <!-- <?php var_dump(getExtras()) ?> -->
    <div class="select-extras" style="margin-top: 150px">
        <?php foreach(getExtras() as $extra) {?>
            <?php //var_dump($extra) ?>

            <div class="select-extras__item living-extras" data-extras-price="<?php echo $extra->post_content;?>">
                <div class="select-extras__img">
                    <img src="img/calculator/oven.png" alt="oven icon" width="64" height="64" />
                </div>
                <div class="select-extras__desc">
                    <?php echo $extra->post_title;?>
                </div>
            </div>
        <?php }?>
    </div>
<?php get_footer();?>
