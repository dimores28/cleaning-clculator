<!DOCTYPE html>
<html <?php language_attributes(); ?>>


<head>
	<title><?php echo wp_get_document_title(); ?></title>

	<meta charset="<?php bloginfo('charset'); ?>" />
	<meta name="format-detection" content="telephone=no" />

	<link rel="shortcut icon" href="favicon.ico" />

	<meta property="og:site_name" content="tivacleaners.com">
    <meta property="og:url" content="www.tivacleaners.com/">
	<meta name="theme-color" content="#50a4ed"/>
	<meta name="robots" content="max-image-preview:large">
	<meta name="description"
		content="Whether you live in an apartment or a house, we are here to provide you with top-notch cleaning services that will leave your home spotless and sparkling.">

	<!-- <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> -->

	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />

	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-2QHGCGXS08&_v=20230612142449"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'G-2QHGCGXS08');
	</script>
	<!-- <meta name="robots" content="noindex, nofollow"> -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />


    <?php wp_head(); ?>
</head>
<?php $contacts = getContacts(); ?>
<body>
	<div class="wrapper">
		<header class="header">
			<div class="header__top-menu">
				<div class="header__container">
					<div>We work 24/7</div>

					<div class="header__actions">
						<a href="tel:<?php echo $contacts["primary_phone"] ?>" class="header__phone">
							<span>Call Us: <?php echo $contacts["primary_phone"] ?> </span>

							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27" height="22">
								<path d="M19,21c0,.553-.447,1-1,1H6c-.552,0-1-.447-1-1s.448-1,1-1h12c.553,0,1,.447,1,1Zm-13-3c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1Zm-4,2c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm0-4c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm9,1c0-.552-.448-1-1-1s-1,.448-1,1,.448,1,1,1,1-.448,1-1Zm13-7.915l-.085,1.264c.002,1.431-1.219,2.651-2.719,2.651-.044,0-2.522-.322-2.522-.322-1.445-.038-2.613-1.208-2.648-2.654l-.155-1.292c-1.309-.494-2.609-.748-3.875-.754-1.311,.008-2.587,.243-3.864,.744l-.157,1.302c-.035,1.446-1.203,2.616-2.648,2.654,0,0-2.479,.322-2.523,.322C1.303,13,.083,11.779,.083,10.279L.002,9.153c-.003-1.451,.549-2.767,1.554-3.772C6.046,.892,17.954,.892,22.443,5.381c1.005,1.006,1.558,2.321,1.557,3.704Zm-1.998-.07c0-.779-.346-1.593-.974-2.22-3.983-3.983-14.625-3.431-18.057,0-.627,.627-.972,1.44-.971,2.288l.08,1.127c.002,.446,.298,.762,.672,.788,0,0,2.458-.319,2.502-.319,.397,0,.721-.324,.721-.722,0-.04,.24-2.051,.24-2.051,.042-.349,.264-.65,.584-.794,1.683-.753,3.476-1.135,5.206-1.135,1.704,.009,3.447,.388,5.179,1.128,.329,.141,.558,.445,.601,.801,0,0,.239,2.011,.239,2.051,0,.397,.324,.722,.722,.722,.044,0,2.502,.319,2.502,.319,.373-.026,.669-.339,.669-.719l.085-1.265Zm-7.002,7.985c0-.552-.448-1-1-1s-1,.448-1,1,.448,1,1,1,1-.448,1-1Zm7-1c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm0,4c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-4-4c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Z" />
							</svg>
						</a>
					</div>
				</div>
			</div>

			<div class="header__bottom-menu">
				<div class="header__container">
					<div class="header__logo">
						<a href="<?php echo get_home_url(); ?>"><img width="47.9726" height="48.9296" src="<?php bloginfo('template_url'); ?>/assets/img/logo.svg" width="120" height="123" alt="logo TIVA Cleaning" /></a>
					</div>

					<div class="header__logo-mobile">
						<a href="<?php echo get_home_url(); ?>"><img width="47.9726" height="14.6173" src="<?php bloginfo('template_url'); ?>/assets/img/logo_mobile.svg" width="132" height="40" alt="mobile logo TIVA Cleaning" /></a>
					</div>

					<div class="header__nav">
						<div class="header__menu menu">
							<button type="button" class="menu__icon icon-menu">
								<span></span>
							</button>
							<nav class="menu__body">
								<ul class="menu__list">
									<li class="menu__item">
										<a href="<?php echo get_home_url(); ?>" class="menu__link">Home</a>
									</li>
									<li class="menu__item">
										<a href="<?php echo get_home_url(); ?>#calculator" class="menu__link">Calculator</a>
									</li>
									<li class="menu__item">
										<a href="<?php echo get_home_url(); ?>#why-us" class="menu__link">Why us</a>
									</li>
									<li class="menu__item">
										<a href="https://www.tivacleaners.com/blog" class="menu__link">Blog</a>
									</li>
									<li class="menu__item">
										<a href="#" class="menu__link" data-goto-header data-goto="#contacts">Contacts</a>
									</li>
								</ul>
							</nav>
						</div>
						<button class="btn header__btn">get in touch</button>
					</div>
				</div>
			</div>
		</header>

		<main class="page">