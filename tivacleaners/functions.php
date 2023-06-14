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
	$phpmailer->Host       = 'smtp.gmail.com';
	$phpmailer->SMTPAuth   = true;
	$phpmailer->Port       = 465;
	$phpmailer->Username   = 'dimores95@gmail.com';
	$phpmailer->Password   = 'tjdsjpgjemfdogqb';
	$phpmailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
	$phpmailer->From       = 'maxkrasovskyi10@gmail.com';
	$phpmailer->FromName   = 'Tivacleaners site';
	// $mail->CharSet = 'UTF-8';
  }
  add_action( 'phpmailer_init', 'mihdan_send_smtp_email' );

  add_filter( 'wp_mail_content_type', 'true_content_type' );
 
	function true_content_type( $content_type ) {
		return 'text/html';
	}


	// add_action( 'init', function () {

	// 	register_post_type( 'faq', [
	// 		'label'  => 'faq',
	// 		'labels' => [
	// 			'name'               => 'Вопрос ответ', // основное название для типа записи
	// 			'singular_name'      => 'Вопрос', // название для одной записи этого типа
	// 			'add_new'            => 'Добавить ответ', // для добавления новой записи
	// 			'add_new_item'       => 'Добавление ответа', // заголовка у вновь создаваемой записи в админ-панели.
	// 			'edit_item'          => 'Редактирование ответа', // для редактирования типа записи
	// 			'new_item'           => 'Новое ответ', // текст новой записи
	// 			'view_item'          => 'Смотреть ответ', // для просмотра записи этого типа.
	// 			'search_items'       => 'Искать ответ', // для поиска по этим типам записи
	// 			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено
	// 			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине
	// 			'menu_name'          => 'ЧАВО', // название меню
	// 		],
	// 		'public'              => false,
	// 		'show_ui'             => true, // зависит от public
	// 		'menu_icon'           => 'dashicons-format-quote',
	// 		'supports'            => [ 'title', 'editor' ], 

	// 	] );

	// });


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