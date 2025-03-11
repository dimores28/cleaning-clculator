<?php
// Загружаем конфигурацию
$config = require_once('config.php');

// Кому отправляем
$to = $config['notification_emails'];

// Тема письма
$subject = 'Tivacleaners website!';
   
// Загружаем только ядро WordPress
define( 'WP_USE_THEMES', false );
require( 'wp-load.php' );

// ... existing code ... 