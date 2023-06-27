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
			'label'  => 'Bathrooms',
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

	});


	// function getExtras() {
	// 	return $psts  = get_posts( array(
	// 		'post_type' => 'Extras',
	// 	));
	// }

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