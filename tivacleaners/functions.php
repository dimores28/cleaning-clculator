<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

	add_action( 'wp_enqueue_scripts', function() {
		wp_enqueue_style( 'style', get_template_directory_uri() . '/assets/css/style.min.css');

		// отменяем зарегистрированный jQuery
		wp_deregister_script('jquery-core');
		wp_deregister_script('jquery');

		// регистрируем
		wp_register_script( 'jquery-core', 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js?_v=20230612142449', false, null, true );
		wp_register_script( 'jquery', false, array('jquery-core'), null, true );

		// подключаем
		wp_enqueue_script( 'jquery' );

		wp_enqueue_script( 'script', get_template_directory_uri() . '/assets/js/app.min.js', array('jquery'), 'null', true );
	});

   add_theme_support('post-thumbnails');
   add_theme_support( 'title-tag' );
   add_theme_support('custom-logo');

   /**
 * Настройка SMTP
 *
 * @param PHPMailer $phpmailer объект мэилера
 */

function mihdan_send_smtp_email( PHPMailer $phpmailer ) {
	$phpmailer->isSMTP();
	$phpmailer->Host       = 'mail.adm.tools';
	$phpmailer->SMTPAuth   = true;
	$phpmailer->Port       = 465;
	$phpmailer->Username   = 'info@tivacleaners.com';
	$phpmailer->Password   = 'Tivacleaners2023!';
	$phpmailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
	$phpmailer->From       = 'info@tivacleaners.com';
	$phpmailer->FromName   = 'Tivacleaners site';

}
  add_action( 'phpmailer_init', 'mihdan_send_smtp_email' );

  add_filter( 'wp_mail_content_type', 'true_content_type' );
 
	function true_content_type( $content_type ) {
		return 'text/html';
	}


	add_action( 'init', function () {

		register_post_type( 'Extras', [
			'label'  => 'Extras',
			'labels' => [
				'name'               => 'Extras', // основное название для типа записи
				'singular_name'      => 'Extra', // название для одной записи этого типа
				'add_new'            => 'Adding an add-on', // для добавления новой записи
				'add_new_item'       => 'Adding extras', // заголовка у вновь создаваемой записи в админ-панели.
				'edit_item'          => 'Add-on Editing', // для редактирования типа записи
				'new_item'           => 'New addition', // текст новой записи
				'view_item'          => 'Watch add-on', // для просмотра записи этого типа.
				'search_items'       => 'Found Extra', // для поиска по этим типам записи
				'not_found'          => 'Not found', // если в результате поиска ничего не было найдено
				'not_found_in_trash' => 'Not found in cart', // если не было найдено в корзине
				'menu_name'          => 'Extras', // название меню
			],
			'public'              => false,
			'show_ui'             => true, // зависит от public
			'menu_icon'           => 'dashicons-filter',
			'supports'            => [ 'title', 'thumbnail'],  // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'

		] );

		register_post_type( 'House areas', [
			'label'  => 'House areas',
			'labels' => [
				'name'               => 'House areas', // основное название для типа записи
				'singular_name'      => 'House area', // название для одной записи этого типа
				'add_new'            => 'Add house area', // для добавления новой записи
				'add_new_item'       => 'Adding home area', // заголовка у вновь создаваемой записи в админ-панели.
				'edit_item'          => 'Editing the area of the house', // для редактирования типа записи
				'new_item'           => 'New house area', // текст новой записи
				'view_item'          => 'See the area of the house', // для просмотра записи этого типа.
				'search_items'       => 'Search for the area of the house', // для поиска по этим типам записи
				'not_found'          => 'House area not found', // если в результате поиска ничего не было найдено
				'not_found_in_trash' => 'Not found in cart', // если не было найдено в корзине
				'menu_name'          => 'House areas', // название меню
			],
			'public'              => false,
			'show_ui'             => true, // зависит от public
			'menu_icon'           => 'dashicons-admin-home',
			'supports'            => [ 'title', 'thumbnail'],  // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'

		] );

		register_post_type( 'Bedrooms', [
			'label'  => 'Bedrooms',
			'labels' => [
				'name'               => 'Bedrooms', // основное название для типа записи
				'singular_name'      => 'Bedroom', // название для одной записи этого типа
				'add_new'            => 'Add bedroom', // для добавления новой записи
				'add_new_item'       => 'Adding a bedroom', // заголовка у вновь создаваемой записи в админ-панели.
				'edit_item'          => 'Bedroom Editing', // для редактирования типа записи
				'new_item'           => 'New bedroom', // текст новой записи
				'view_item'          => 'Watch the bedroom', // для просмотра записи этого типа.
				'search_items'       => 'Search for a bedroom', // для поиска по этим типам записи
				'not_found'          => 'Bedroom not found', // если в результате поиска ничего не было найдено
				'not_found_in_trash' => 'Not found in cart', // если не было найдено в корзине
				'menu_name'          => 'Bedrooms', // название меню
			],
			'public'              => false,
			'show_ui'             => true, // зависит от public
			'menu_icon'           => 'dashicons-admin-home',
			'supports'            => [ 'title', 'thumbnail'],  // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'

		] );

		register_post_type( 'Bathrooms', [
			'label'  => 'Bathrooms',
			'labels' => [
				'name'               => 'Bathrooms', // основное название для типа записи
				'singular_name'      => 'Bathroom', // название для одной записи этого типа
				'add_new'            => 'Add bathroom', // для добавления новой записи
				'add_new_item'       => 'Adding a bathroom', // заголовка у вновь создаваемой записи в админ-панели.
				'edit_item'          => 'Bathroom Editing', // для редактирования типа записи
				'new_item'           => 'New bathroom', // текст новой записи
				'view_item'          => 'Watch the bathroom', // для просмотра записи этого типа.
				'search_items'       => 'Search for a bathroom', // для поиска по этим типам записи
				'not_found'          => 'Bathroom not found', // если в результате поиска ничего не было найдено
				'not_found_in_trash' => 'Not found in cart', // если не было найдено в корзине
				'menu_name'          => 'Bathrooms', // название меню
			],
			'public'              => false,
			'show_ui'             => true, // зависит от public
			'menu_icon'           => 'dashicons-image-filter',
			'supports'            => [ 'title', 'thumbnail'],  // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'

		] );

		register_post_type( 'Lawn area', [
			'label'  => 'Lawn area',
			'labels' => [
				'name'               => 'Lawn area', // основное название для типа записи
				'singular_name'      => 'Lawn area', // название для одной записи этого типа
				'add_new'            => 'Add lawn area', // для добавления новой записи
				'add_new_item'       => 'Adding a lawn area', // заголовка у вновь создаваемой записи в админ-панели.
				'edit_item'          => 'Lawn area Editing', // для редактирования типа записи
				'new_item'           => 'New lawn area', // текст новой записи
				'view_item'          => 'Watch the lawn area', // для просмотра записи этого типа.
				'search_items'       => 'Search for a lawn area', // для поиска по этим типам записи
				'not_found'          => 'Lawn area not found', // если в результате поиска ничего не было найдено
				'not_found_in_trash' => 'Not found in cart', // если не было найдено в корзине
				'menu_name'          => 'Lawn area', // название меню
			],
			'public'              => false,
			'show_ui'             => true, // зависит от public
			'menu_icon'           => 'dashicons-image-filter',
			'supports'            => [ 'title', 'thumbnail'],  

		] );

		register_post_type( 'Gardening', [
			'label'  => 'Gardening',
			'labels' => [
				'name'               => 'Gardening', // основное название для типа записи
				'singular_name'      => 'Gardening', // название для одной записи этого типа
				'add_new'            => 'Add garden area', // для добавления новой записи
				'add_new_item'       => 'Adding a garden area', // заголовка у вновь создаваемой записи в админ-панели.
				'edit_item'          => 'Garden area Editing', // для редактирования типа записи
				'new_item'           => 'New garden area', // текст новой записи
				'view_item'          => 'Watch the garden area', // для просмотра записи этого типа.
				'search_items'       => 'Search for a garden area', // для поиска по этим типам записи
				'not_found'          => 'Garden area not found', // если в результате поиска ничего не было найдено
				'not_found_in_trash' => 'Not found in cart', // если не было найдено в корзине
				'menu_name'          => 'Garden area', // название меню
			],
			'public'              => false,
			'show_ui'             => true, // зависит от public
			'menu_icon'           => 'dashicons-image-filter',
			'supports'            => [ 'title'],

		] );

		register_post_type( 'Window', [
			'label'  => 'Window',
			'labels' => [
				'name'               => 'Window', // основное название для типа записи
				'singular_name'      => 'Window', // название для одной записи этого типа
				'add_new'            => 'Add Window', // для добавления новой записи
				'add_new_item'       => 'Adding Window', // заголовка у вновь создаваемой записи в админ-панели.
				'edit_item'          => 'Window area Editing', // для редактирования типа записи
				'new_item'           => 'New Window', // текст новой записи
				'view_item'          => 'Watch the Window', // для просмотра записи этого типа.
				'search_items'       => 'Search for a Window', // для поиска по этим типам записи
				'not_found'          => 'Window not found', // если в результате поиска ничего не было найдено
				'not_found_in_trash' => 'Not found in cart', // если не было найдено в корзине
				'menu_name'          => 'Window', // название меню
			],
			'public'              => false,
			'show_ui'             => true, // зависит от public
			'menu_icon'           => 'dashicons-screenoptions',
			'supports'            => [ 'title'],  

		] );

		register_post_type( 'Drain pipes', [
			'label'  => 'Drain pipes',
			'labels' => [
				'name'               => 'Drain pipes', // основное название для типа записи
				'singular_name'      => 'Drain pipe', // название для одной записи этого типа
				'add_new'            => 'Add Drain pipe', // для добавления новой записи
				'add_new_item'       => 'Adding Drain pipe', // заголовка у вновь создаваемой записи в админ-панели.
				'edit_item'          => 'Drain pipes area Editing', // для редактирования типа записи
				'new_item'           => 'New Drain pipe', // текст новой записи
				'view_item'          => 'Watch the Drain pipe', // для просмотра записи этого типа.
				'search_items'       => 'Search for a Drain pipes', // для поиска по этим типам записи
				'not_found'          => 'Drain pipe not found', // если в результате поиска ничего не было найдено
				'not_found_in_trash' => 'Not found in cart', // если не было найдено в корзине
				'menu_name'          => 'Drain pipes', // название меню
			],
			'public'              => false,
			'show_ui'             => true, // зависит от public
			'menu_icon'           => 'dashicons-screenoptions',
			'supports'            => [ 'title'],  

		] );

		register_post_type( 'Payment options', [
			'label'  => 'Payment options',
			'labels' => [
				'name'               => 'Drain pipes', // основное название для типа записи
				'singular_name'      => 'Payment option', // название для одной записи этого типа
				'add_new'            => 'Add Payment option', // для добавления новой записи
				'add_new_item'       => 'Adding Payment option', // заголовка у вновь создаваемой записи в админ-панели.
				'edit_item'          => 'Payment option Editing', // для редактирования типа записи
				'new_item'           => 'New Payment option', // текст новой записи
				'view_item'          => 'Watch the Payment option', // для просмотра записи этого типа.
				'search_items'       => 'Search for a Payment option', // для поиска по этим типам записи
				'not_found'          => 'Payment option not found', // если в результате поиска ничего не было найдено
				'not_found_in_trash' => 'Not found in cart', // если не было найдено в корзине
				'menu_name'          => 'Payment options', // название меню
			],
			'public'              => false,
			'show_ui'             => true, // зависит от public
			'menu_icon'           => 'dashicons-tickets-alt',
			'supports'            => [ 'title'],  

		] );

		register_post_type( 'Contacts', [
			'label'  => 'Contacts',
			'labels' => [
				'name'               => 'Contacts', // основное название для типа записи
				'singular_name'      => 'Contact', // название для одной записи этого типа
				'add_new'            => 'Add Contact', // для добавления новой записи
				'add_new_item'       => 'Adding Contact', // заголовка у вновь создаваемой записи в админ-панели.
				'edit_item'          => 'Contact Editing', // для редактирования типа записи
				'new_item'           => 'New Contact', // текст новой записи
				'view_item'          => 'Watch the Contact', // для просмотра записи этого типа.
				'search_items'       => 'Search for a Contact', // для поиска по этим типам записи
				'not_found'          => 'Contact not found', // если в результате поиска ничего не было найдено
				'not_found_in_trash' => 'Not found in cart', // если не было найдено в корзине
				'menu_name'          => 'Contacts', // название меню
			],
			'public'              => false,
			'show_ui'             => true, // зависит от public
			'menu_icon'           => 'dashicons-tickets-alt',
			'supports'            => [ 'title'],  

		] );

		register_post_type( 'Reviews', [
			'label'  => 'Reviews',
			'labels' => [
				'name'               => 'Reviews', // основное название для типа записи
				'singular_name'      => 'Review', // название для одной записи этого типа
				'add_new'            => 'Add a review', // для добавления новой записи
				'add_new_item'       => 'Adding review', // заголовка у вновь создаваемой записи в админ-панели.
				'edit_item'          => 'Add-on Editing', // для редактирования типа записи
				'new_item'           => 'New addition', // текст новой записи
				'view_item'          => 'Watch add-on', // для просмотра записи этого типа.
				'search_items'       => 'Found Review', // для поиска по этим типам записи
				'not_found'          => 'Not found', // если в результате поиска ничего не было найдено
				'not_found_in_trash' => 'Not found in cart', // если не было найдено в корзине
				'menu_name'          => 'Reviews', // название меню
			],
			'public'              => false,
			'show_ui'             => true, // зависит от public
			'menu_icon'           => 'dashicons-admin-page',
			'supports'            => [ 'title', 'thumbnail'],  // 'title','editor','author','thumbnail','excerpt','trackbacks',
		] );

		register_post_type( 'Snow clearing area', [
			'label'  => 'Snow clearing area',
			'labels' => [
				'name'               => 'Snow clearing area', // основное название для типа записи
				'singular_name'      => 'Snow clearing area', // название для одной записи этого типа
				'add_new'            => 'Add snow clearing area', // для добавления новой записи
				'add_new_item'       => 'Adding a snow clearing area', // заголовка у вновь создаваемой записи в админ-панели.
				'edit_item'          => 'Snow clearing area Editing', // для редактирования типа записи
				'new_item'           => 'New snow clearing area', // текст новой записи
				'view_item'          => 'Watch the snow clearing area', // для просмотра записи этого типа.
				'search_items'       => 'Search for a snow clearing area', // для поиска по этим типам записи
				'not_found'          => 'Snow clearing area not found', // если в результате поиска ничего не было найдено
				'not_found_in_trash' => 'Not found in Snow clearing area', // если не было найдено в корзине
				'menu_name'          => 'Snow clearing area', // название меню
			],
			'public'              => false,
			'show_ui'             => true, // зависит от public
			'menu_icon'           => 'dashicons-image-filter',
			'supports'            => [ 'title'],  

		] );

		register_post_type( 'Carpet area', [
			'label'  => 'SCarpet area',
			'labels' => [
				'name'               => 'Carpet area', // основное название для типа записи
				'singular_name'      => 'Carpet area', // название для одной записи этого типа
				'add_new'            => 'Add Carpet area', // для добавления новой записи
				'add_new_item'       => 'Adding a carpet area', // заголовка у вновь создаваемой записи в админ-панели.
				'edit_item'          => 'Carpet area Editing', // для редактирования типа записи
				'new_item'           => 'New Carpet area', // текст новой записи
				'view_item'          => 'Watch the Carpet area', // для просмотра записи этого типа.
				'search_items'       => 'Search for a Carpet area', // для поиска по этим типам записи
				'not_found'          => 'Carpet not found', // если в результате поиска ничего не было найдено
				'not_found_in_trash' => 'Not found in Carpet area', // если не было найдено в корзине
				'menu_name'          => 'Carpet area', // название меню
			],
			'public'              => false,
			'show_ui'             => true, // зависит от public
			'menu_icon'           => 'dashicons-image-filter',
			'supports'            => [ 'title'],  

		] );

	});


	function getExtras() {
		$args = array(
			'post_type' => 'Extras',
			'orderby'   => 'date',
			'order'     => 'ASC',
			'numberposts' => -1,
		);

		$extras = [];

		foreach(get_posts($args) as $post) {
			$extra = get_fields($post->ID);
			$extra['title'] = $post->post_title;
			$extra['img'] = get_the_post_thumbnail_url($post->ID, 'thumbnail');

			$extras[] = $extra;
		}

		return $extras;
	}

	function getHouseAreas() {
		$args = array(
			'post_type' => 'House areas',
			'orderby'   => 'date',
			'order'     => 'ASC',
			'numberposts' => -1,
		);

		$houseAreas = [];

		foreach(get_posts($args) as $post) {
			$area = get_fields($post->ID);
			$area['title'] = $post->post_title;
			$area['img'] = get_the_post_thumbnail_url($post->ID, 'thumbnail');

			$houseAreas[] = $area;
		}

		return $houseAreas;
	}

	function getBedrooms() {
		$args = array(
			'post_type' => 'Bedrooms',
			'orderby'   => 'title',
			'order'     => 'ASC',
			'numberposts' => -1,
		);

		$bedrooms = [];

		foreach(get_posts($args) as $post) {
			$bedroom = get_fields($post->ID);
			$bedroom['title'] = $post->post_title;
			$bedroom['img'] = get_the_post_thumbnail_url($post->ID, 'thumbnail');

			$bedrooms[] = $bedroom;
		}

		return $bedrooms;
	}

	function getBathrooms() {
		$args = array(
			'post_type' => 'Bathrooms',
			'orderby'   => 'title',
			'order'     => 'ASC',
			'numberposts' => -1,
		);

		$bathrooms = [];

		foreach(get_posts($args) as $post) {
			$bathroom = get_fields($post->ID);
			$bathroom['title'] = $post->post_title;
			$bathroom['img'] = get_the_post_thumbnail_url($post->ID, 'thumbnail');

			$bathrooms[] = $bathroom;
		}

		return $bathrooms;
	}

	function getLawnArea() {
		$args = array(
			'post_type' => 'Lawn area',
			'orderby'   => 'date',
			'order'     => 'ASC',
			'numberposts' => -1,
		);

		$lawnAreas = [];

		foreach(get_posts($args) as $post) {
			$area = get_fields($post->ID);
			$area['title'] = $post->post_title;
			$area['img'] = get_the_post_thumbnail_url($post->ID, 'thumbnail');

			$lawnAreas[] = $area;
		}

		return $lawnAreas;
	}

	function getGardenArea() {
		$args = array(
			'post_type' => 'Gardening',
			'orderby'   => 'date',
			'order'     => 'ASC',
			'numberposts' => -1,
		);

		$gardenAreas = [];

		foreach(get_posts($args) as $post) {
			$area = get_fields($post->ID);
			$area['title'] = $post->post_title;

			$gardenAreas[] = $area;
		}

		return $gardenAreas;
	}

	function getWindow() {
		$args = array(
			'post_type' => 'Window',
			'orderby'   => 'date',
			'order'     => 'ASC',
			'numberposts' => 1,
		);

		$windows = [];

		foreach(get_posts($args) as $post) {
			$win = get_fields($post->ID);

			$windows[] = $win;
		}

		return $windows[0];
	}

	function getDrainPipes() {
		$args = array(
			'post_type' => 'Drain pipes',
			'orderby'   => 'date',
			'order'     => 'ASC',
			'numberposts' => 1,
		);

		$pipes = [];

		foreach(get_posts($args) as $post) {
			$pipe = get_fields($post->ID);

			$pipes[] = $pipe;
		}

		return $pipes[0];
	}

	function getPaymentOptions() {
		$args = array(
			'post_type' => 'Payment options',
			'orderby'   => 'date',
			'order'     => 'ASC',
			'numberposts' => 1,
		);

		$pipes = [];

		foreach(get_posts($args) as $post) {
			$pipe = get_fields($post->ID);

			$pipes[] = $pipe;
		}

		return $pipes[0];
	}

	function getContacts() {
		$args = array(
			'post_type' => 'Contacts',
			'orderby'   => 'date',
			'order'     => 'ASC',
			'numberposts' => 1,
		);

		$contacts = [];

		foreach(get_posts($args) as $post) {
			$con = get_fields($post->ID);

			$contacts[] = $con;
		}

		return $contacts[0];
	}

	function getReviews() {
		$args = array(
			'post_type' => 'Reviews',
			'orderby'   => 'date',
			'order'     => 'ASC',
			'numberposts' => -1,
		);

		$reviews = [];

		foreach(get_posts($args) as $post) {
			$review = get_fields($post->ID);
			$review['title'] = $post->post_title;
			$review['img'] = get_the_post_thumbnail_url($post->ID, 'thumbnail');

			$reviews[] = $review;
		}

		return $reviews;
	}

	function getSnowClearingAreas() {
		$args = array(
			'post_type' => 'Snow clearing area',
			'orderby'   => 'date',
			'order'     => 'ASC',
			'numberposts' => -1,
		);

		$snowClearingAreas = [];

		foreach(get_posts($args) as $post) {
			$area = get_fields($post->ID);
			$area['title'] = $post->post_title;

			$snowClearingAreas[] = $area;
		}

		return $snowClearingAreas;
	}

	function getCarpetAreas() {
		$args = array(
			'post_type' => 'Carpet area',
			'orderby'   => 'date',
			'order'     => 'ASC',
			'numberposts' => -1,
		);

		$carpetAreas = [];

		foreach(get_posts($args) as $post) {
			$area = get_fields($post->ID);
			$area['title'] = $post->post_title;

			$carpetAreas[] = $area;
		}

		return $carpetAreas;
	}

//======================SVG===========================================//
add_filter( 'upload_mimes', 'svg_upload_allow' );

# Добавляет SVG в список разрешенных для загрузки файлов.
function svg_upload_allow( $mimes ) {
	$mimes['svg']  = 'image/svg+xml';

	return $mimes;
}

add_filter( 'wp_check_filetype_and_ext', 'fix_svg_mime_type', 10, 5 );

# Исправление MIME типа для SVG файлов.
function fix_svg_mime_type( $data, $file, $filename, $mimes, $real_mime = '' ){

	// WP 5.1 +
	if( version_compare( $GLOBALS['wp_version'], '5.1.0', '>=' ) ){
		$dosvg = in_array( $real_mime, [ 'image/svg', 'image/svg+xml' ] );
	}
	else {
		$dosvg = ( '.svg' === strtolower( substr( $filename, -4 ) ) );
	}

	// mime тип был обнулен, поправим его
	// а также проверим право пользователя
	if( $dosvg ){

		// разрешим
		if( current_user_can('manage_options') ){

			$data['ext']  = 'svg';
			$data['type'] = 'image/svg+xml';
		}
		// запретим
		else {
			$data['ext']  = false;
			$data['type'] = false;
		}

	}

	return $data;
}

 //вимкнути перевірку оновлень плагінів та движка
//  add_filter( 'auto_update_plugin', '__return_false');
//  add_filter( 'pre_site_transient_update_core', '__return_null' );
//  function disable_plugin_updates($value) {
// 	  if(isset($value) && is_object($value)) {
// 		  unset($value->response);
// 	  }
// 	  return $value;
//  }
//  add_filter('site_transient_update_plugins', 'disable_plugin_updates');