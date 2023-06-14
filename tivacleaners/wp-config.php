<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'truth_tivacleaners' );

/** Database username */
define( 'DB_USER', 'truth_tivacleaners' );

/** Database password */
define( 'DB_PASSWORD', '8-J!uV49ez' );

/** Database hostname */
define( 'DB_HOST', 'truth.mysql.tools' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );


// Имя пользователя для SMTP авторизации
define( 'SMTP_USER', 'dimores95@gmail.com' );  
  
// Пароль пользователя для SMTP авторизации
define( 'SMTP_PASS', 'tjdsjpgjemfdogqb' );
  
// Хост почтового сервера
define( 'SMTP_HOST', 'smtp.gmail.com' );
  
// Обратный Email
define( 'SMTP_FROM', 'dmytroivanovichn@gmail.com' );
  
// Имя для обратного мыла
define( 'SMTP_NAME', 'Вася Пупкин' );
  
// Номер порта (25, 465, 587)
define( 'SMTP_PORT', '465' );
  
// Тип шифиования (ssl или tls)
define( 'SMTP_SECURE', 'tls' );
  
// Включение/отключение шифрования
define( 'SMTP_AUTH', true );
  
// Режим отладки (0, 1, 2)
define( 'SMTP_DEBUG', 0 );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '4Q-|Dz/CI6.bjP1&o|reu_e}U%LtM*P;K|zp&$Gyf+Q&p;ut1=Glx90Zqi8|Fn&s' );
define( 'SECURE_AUTH_KEY',  'holNS(u@[Rk@PM|E|BY`3Lep6m$@MuK<d)#R9gI(fdCk7BWIT%o5dWVdOMMb9-sj' );
define( 'LOGGED_IN_KEY',    '9-w(h%@yC]{#f~SNF]78LdlkG~oZGX;5).Ws mR=IF>sjK`A<jIWbWhp7z~{w%=@' );
define( 'NONCE_KEY',        'S:ms?*/<q+2F0u2hAqbQo8=F#f52bUYrug>w86k~wM;:]Ix%bq.!0so7~)lagE`t' );
define( 'AUTH_SALT',        '^Jddmue86NN=;t!+)[*5Y~=bt<5NM0FUOH^x_m{EjGrS0] tf`VC[OLYs,vQ.Su#' );
define( 'SECURE_AUTH_SALT', 'bru0Rw2`SC=BNW-fM61`VXenNwZdq&>g0EBX.Ic7foqu{/<y_W.6&Z= ,|}]O6G*' );
define( 'LOGGED_IN_SALT',   'M(^WPR5&2z8[*?0= h&k6Gtpb9Rt/tj6llpv71W0 5u<6g9v2<nSCp#E;e/gwMU7' );
define( 'NONCE_SALT',       'Vu# kXpzR`^y 0(p/B3(suF#r2R>tz4@*Se.dU#BrMJ^UtHUO:_!:[=*ayi9 jnu' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
