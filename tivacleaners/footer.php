	</main>
	<?php $contacts = getContacts(); ?>
	<footer class="footer" id="contacts" data-watch="navigator">
			<div class="footer__container">
				<div class="footer__logo">
					<img width="47.9726" height="48.9296" class="footer__logo-img" src="<?php bloginfo('template_url'); ?>/assets/img/logo.svg" alt="logo" />
					<p class="footer__logo-desc">
						We take pride in our attention to detail and commitment to customer
						satisfaction.
					</p>
				</div>
				<div class="footer__content">
					<div class="footer__contacts">
						<h3 class="footer__heading">CONTACT US</h3>
						<ul class="contacts">
							<li class="contacts__item">
								<a href="<?php echo $contacts["address_link"] ?>" class="contacts__link" target="_blank">
									<svg class="contacts__icon" xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512">
										<path d="M12,.042a9.992,9.992,0,0,0-9.981,9.98c0,2.57,1.99,6.592,5.915,11.954a5.034,5.034,0,0,0,8.132,0c3.925-5.362,5.915-9.384,5.915-11.954A9.992,9.992,0,0,0,12,.042ZM12,14a4,4,0,1,1,4-4A4,4,0,0,1,12,14Z" />
									</svg>

									<span><?php echo $contacts["address"] ?></span>
								</a>
							</li>
							<li class="contacts__item">
								<svg class="contacts__icon" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
									<path d="M24,6.24c0,7.64-10.13,17.76-17.76,17.76-1.67,0-3.23-.63-4.38-1.78l-1-1.15c-1.16-1.16-1.16-3.12,.05-4.33,.03-.03,2.44-1.88,2.44-1.88,1.2-1.14,3.09-1.14,4.28,0l1.46,1.17c3.2-1.36,5.47-3.64,6.93-6.95l-1.16-1.46c-1.15-1.19-1.15-3.09,0-4.28,0,0,1.85-2.41,1.88-2.44,1.21-1.21,3.17-1.21,4.38,0l1.05,.91c1.2,1.19,1.83,2.75,1.83,4.42Z" />
								</svg>

								<a href="tel:<?php echo $contacts["primary_phone"] ?>" class="contacts__link">
									<span><?php echo $contacts["primary_phone"] ?></span>
								</a>
								<a href="tel:<?php echo $contacts["secondary_phone"] ?>" class="contacts__link">
									<span class="margin-left"><?php echo $contacts["secondary_phone"] ?></span>
								</a>
							</li>
						</ul>
					</div>

					<div class="footer__more-info">
						<h3 class="footer__heading">MORE INFO</h3>
						<ul class="more-info">
							<li class="more-info__item">
								<svg class="more-info__icon" id="Layer_1" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg">
									<path d="m18.951 23h-.033c-.511-.008-.997-.225-1.344-.6l-1.918-1.881c-.384-.397-.375-1.03.022-1.414.001-.001.002-.002.003-.003.397-.381 1.027-.37 1.41.024l1.861 1.823 3.341-3.341c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414l-3.421 3.421c-.352.357-.833.558-1.335.557z" />
									<path d="m14.035 20.015c-.004-3.297 2.665-5.973 5.961-5.978 1.283-.002 2.533.41 3.563 1.175 1.773-6.385-1.966-12.998-8.35-14.771s-12.996 1.965-14.769 8.35 1.966 12.999 8.35 14.772c2.1.583 4.319.583 6.419 0-.762-1.026-1.174-2.27-1.174-3.548zm-1.035-7.993c0 .266-.106.52-.294.708l-3.005 3.006c-.398.384-1.032.373-1.416-.025-.375-.388-.375-1.004 0-1.392l2.712-2.712v-4.594c0-.553.448-1.002 1.002-1.002.553 0 1.001.449 1.001 1.002z" />
								</svg>
								<span>24/7</span>
							</li>
							<li class="more-info__item">
								<a href="mailto:<?php echo $contacts["email"] ?>" class="more-info__link">
									<svg class="more-info__icon" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
										<path d="M19,24h-6.66C5.87,24,.46,19.1,.03,12.85-.21,9.38,1.06,5.97,3.51,3.52,5.97,1.06,9.38-.21,12.85,.03c6.25,.43,11.15,5.84,11.15,12.31v5.82c0,3.44-2.06,5.85-5,5.85Z" />
									</svg>

									<span><?php echo $contacts["email"] ?></span>
								</a>
							</li>
						</ul>
					</div>
					<div class="footer__fol-us">
						<h3 class="footer__heading">FOLLOW US</h3>
						<ul class="fol-us">
							<li class="fol-us__item">
								<a href="<?php echo $contacts["instagram"] ?>" class="fol-us__link">
									<svg class="fol-us__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background: new 0 0 24 24" xml:space="preserve" width="512" height="512">
										<g>
											<path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z" />
											<path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z" />
											<circle cx="18.406" cy="5.594" r="1.44" />
										</g>
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="footer__policy">© TIVAcleaners 2023. All rights reserved</div>
		</footer>

		<div id="popup" aria-hidden="true" class="popup">
			<div class="popup__wrapper">
				<div class="popup__content">
					<button data-close type="button" class="popup__close">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
							<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
						</svg>
					</button>

					<form action="" class="popup__form" id="popupForm">
						<div class="form__loader popup__loader">
							<span class="loader"></span>
						</div>

						<label class="popup__form-labele" for="popupForm">CONTACT US</label>
						<div class="popup__form-upper">
							<div class="popup__form-group upper-group">
								<label class="form-group__labele" for="popupUserName"></label>
								<input type="text" class="input popup__input popup__input-name" id="popupUserName" name="popupUserName" placeholder="Name" />
							</div>

							<div class="popup__form-group upper-group">
								<label class="form-group__labele" for="popupEmail"></label>
								<input type="email" class="input popup__input popup__input-email" id="popupEmail" placeholder="Email" required="required" aria-required="true" name="popupEmail" />
							</div>
							<div class="popup__form-group upper-group">
								<label class="form-group__labele" for="popupPhone"></label>
								<input type="tel" class="input popup__input popup__input-phone" id="popupPhone" placeholder="Phone" required="required" aria-required="true" pattern="[0-9()#&+*-=.]+" name="popupPhone" title="Only numbers and phone symbols (#, -, *, і etc.) are accepted." />
							</div>
						</div>

						<div class="popup__form-group lower-group">
							<label class="form-group__labele" for="popupMessage"></label>
							<textarea class="input popup__input popup__input-ms" id="popupMessage" name="popupMessage" rows="3" placeholder="Message"></textarea>
						</div>
						<div class="popup__alert"></div>
						<button type="submit" class="btn btn-form popup__submit">Submit</button>
					</form>
				</div>
			</div>
		</div>

	</div>
		<!-- Стилі для body -->
	<style>
		.lock body {
			overflow: hidden;
			touch-action: none;
			overscroll-behavior: none;
		}

		.loading body {
			opacity: 0;
			visibility: hidden;
		}

		.loaded body {
			transition: opacity 0.5s ease 0s;
			opacity: 1;
			visibility: visible;
		}
	</style>
	<div id="fls-preloader">
		<!-- Документація: https://template.fls.guru/template-docs/modul-preloader.html -->
		<!-- Стилі для прелоадера -->
		<style>
			* {
				padding: 0px;
				margin: 0px;
				border: 0px;
			}

			*,
			*:before,
			*:after {
				box-sizing: border-box;
			}

			html.lock {
				overflow: hidden;
				touch-action: none;
				overscroll-behavior: none;
			}

			/* Головний блок */
			.fls-preloader {
				pointer-events: none;
				z-index: 3000;
				position: fixed;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				background-image: linear-gradient(to top, rgb(95, 218, 171), rgb(67, 196, 166));
			}

			/* Блок з елементами */
			.fls-preloader__body {
				padding: 0.93rem;
				max-width: 31.25rem;
				display: flex;
				flex-direction: column;
				color: #fff;
			}

			.fls-preloader__img {
				width: 128px;
				height: 128px;
				margin-bottom: 14px;
				transform-origin: center;
				animation: loader linear 1.5s infinite;
			}

			/* Блок з лічильником */
			.fls-preloader__counter {
				font-size: 0rem;
			}

			/* Прогресбар */
			.fls-preloader__line {}

			/* Лінія прогресбару */
			.fls-preloader__line span {
				display: inline-block;
				transition: width 0.2s ease;
				height: 0.8rem;
				background-color: #ffffff;
			}

			@keyframes loader {
				0% {
					transform: rotate(0);
				}

				75% {
					transform: rotate(360deg);
				}

				100% {
					transform: rotate(360deg);
				}
			}
		</style>
		<!-- Скріпт прелоадера -->
		<script>
			function preloader() {
				const preloaderImages = document.querySelector('[data-preloader]') ? document.querySelectorAll('[data-preloader] img') : document.querySelectorAll('img');
				const preloaderContainer = document.querySelector('#fls-preloader');
				if (preloaderImages.length) {
					const preloaderTemplate = `
					<div class="fls-preloader">
						<div class="fls-preloader__body">
							<div class="fls-preloader__img">
								<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
									x="0px" y="0px" viewBox="0 0 5000 4000" style="enable-background:new 0 0 5000 4000;" xml:space="preserve">
									<style type="text/css">
										.st0 {
											fill: #1B75BC;
										}
									</style>
									<path class="st0" d="M3398.4,1698.2l0.1-0.1l139.6-241.7c0.1-0.1,0.1-0.2,0.2-0.3l275.7-477.4l384.5-665.8
								c26.4-45.5,33.6-99.8,19.8-150.6C4197.5,84.5,4132,27,4052.3,16.5c-79.7-10.5-157.9,28.2-198,97.9l-820.5,1421.4v-263.4
								c0-122.2-82.8-225-195.4-255.5V804c0-32-25-58.1-56.6-59.9c-4.1-0.8-8.4-1.2-12.7-1.2V544.4c0-36.5-29.6-66.2-66.2-66.2h-264.7
								c-36.5,0-66.2,29.6-66.2,66.2v198.5c-36.5,0-66.2,29.6-66.2,66.2V1017c-116.5,30.1-198.1,135-198.5,255.3v254.1
								c-53.3-76.5-104.7-138.3-142.2-180.5c-1.2-2.2-2.6-4.4-4.1-6.5c-15.7-21.8-34.3-40.7-55.2-56.4l0,0l0,0
								c-51-38.5-115.1-57.7-180.6-52.1l-112.5-194.9l-99.3-172l57.3-33.1l229.2-132.3c15.2-8.8,26.3-23.2,30.8-40.2
								c4.6-16.9,2.2-35-6.6-50.2l-132.3-229.2c-8.8-15.2-23.3-26.3-40.2-30.8c-17-4.6-35-2.2-50.2,6.6L1372.4,487L684.7,884
								c-15.3,8.7-26.4,23.3-30.9,40.2c-4.6,17-2.2,35.1,6.7,50.3l132.3,229.2c18.3,31.6,58.7,42.5,90.4,24.2
								c45.6-26.4,99.9-33.5,150.7-19.9c50.9,13.7,94.3,47,120.6,92.6l112.5,194.8c-52.9,76-61.9,174.2-23.9,258.6l51.3,113.7H982.5
								c-36.5,0-66.2,29.6-66.2,66.2c0,36.5,29.6,66.2,66.2,66.2H1492l-18.9,132.3H982.5c-36.5,0-66.2,29.6-66.2,66.2
								c0,36.5,29.6,66.2,66.2,66.2h141.7l20.4,132.3H982.5c-36.5,0-66.2,29.6-66.2,66.2c0,339.3,142.2,647.6,373,874l50.1,326.2
								c0,0.2,0,0.4,0.1,0.6l40.7,264.7c4.9,32.4,32.7,56.3,65.4,56.4h1588.1c32.7,0,60.4-23.8,65.4-56.1l91.3-593.2
								c236.9-228.7,371.2-543.3,372.7-872.5c0-36.5-29.6-66.2-66.2-66.2h-162.1l20.4-132.3h141.7c36.5,0,66.2-29.6,66.2-66.2V1934
								c0-36.5-29.6-66.2-66.2-66.2h-196.5L3398.4,1698.2L3398.4,1698.2z M2504.4,610.6h132.3v132.3h-132.3V610.6z M2438.2,875.3h269.5
								v132.3h-269.5V875.3z M2239.7,1272.3c0-73.1,59.2-132.3,132.3-132.3h397c73.1,0,132.3,59.2,132.3,132.3v66.2h-661.7V1272.3z
								M2239.7,1470.8h661.7v132.3h-661.7V1470.8z M2418.4,1867.8c-21.7-48.6-51.1-93.3-87.3-132.3h570.3v29.5l-59.5,102.9H2418.4z
								M1610.5,502.5l66.2,114.6L1562,683.3l-33.1-57.3l-33.1-57.3L1610.5,502.5z M1230.4,1180.6c-63.1-71-153.5-111.6-248.5-111.5h0
								c-35.4,0-70.6,5.7-104.3,16.9l-69.4-120.4l573-330.8l33.1,57.3l33.1,57.3l-57.3,33.1c-31.6,18.3-42.5,58.7-24.2,90.4l99.3,172
								l-72.8,42.2L1230.4,1180.6z M1416.7,1225.6l114.6-66.2l66.2,114.6l-229.2,132.3l-66.2-114.6L1416.7,1225.6z M1439.7,1867.8
								l-76-168.4c-28-61.9-4.4-135.1,54.4-169l261.9-151.2c58.8-34.2,134.1-18,173.6,37.4c5.4,7.5,12,13.5,19.4,18
								c59.6,74.1,140.3,206.9,176.6,268.2c-7.8,5.8-15.2,12.1-22.2,19c-29,28.9-76,28.9-104.9,0c-81.7-78.1-210.4-78.1-292.1,0
								c-41.5,42.3-75,91.8-98.8,146H1439.7z M1623.4,2015.8c2.7-18.9,7-37.6,12.7-55.8l0.6-1.3c17.2-54.1,47-103.4,87.1-143.6
								c29-28.9,75.9-28.9,104.9,0c81.7,78.1,210.4,78.1,292.1,0c29-28.9,75.9-28.9,104.9,0c40,40.2,69.9,89.5,87.1,143.6l0.6,1.4
								c5.8,18.3,10,36.9,12.7,55.9l51.1,356.4l0,0l79.3,554.2h0l16.2,113.1c2.6,16.5-4.8,33-18.9,42c-13.7,9.5-31.8,9.9-45.8,1
								c-35.9-21.2-75.8-34.8-117.2-39.7l-51-716.6c-1.2-17.5-9.4-33.9-22.7-45.4c-13.3-11.5-30.6-17.3-48.2-16.1
								c-17.5,1.2-33.9,9.4-45.4,22.7c-11.5,13.3-17.3,30.6-16.1,48.2l51.5,720.1c-30.2,10.1-58.6,24.9-84.1,44
								c-59.3,44.1-140.4,44.1-199.7,0c-22.5-16.7-47.2-30.2-73.5-40.2l106.6-852.7c3.6-35.7-22-67.8-57.6-72.3
								c-35.7-4.5-68.4,20.4-73.7,55.9L1670.6,3041c-45.4,3.9-89.4,18.1-128.5,41.6l-77.5,46.3L1623.4,2015.8z M1454.5,2264.8l-94.8,661.5
								l-12.7-82.6l0,0l-88.8-578.9H1454.5z M1050.7,2529.5H1165l61.2,397.1l24.7,160.9C1133.2,2923.9,1063.9,2730.6,1050.7,2529.5z
								M2977,3852.9H1502.5l-32.1-208.5c0-0.2-0.1-0.4-0.1-0.7l-27.3-177.2c221.8,159.4,497.9,254,796.8,254c286,0.6,564.8-89,797-255.9
								L2977,3852.9z M3066.4,3271.8C2607,3684,1914.1,3694.7,1442.2,3297l168.1-100.9c57.9-34.8,131.2-31,185.2,9.6
								c106.4,79.2,252.1,79.2,358.5,0c54.1-40.6,127.3-44.4,185.3-9.6c58,35.1,131.1,33.6,187.6-3.9s86.4-104.2,76.7-171.3l-23.3-162.7
								l-78.7-551.1l-6-42.3h725.6L3066.4,3271.8z M3428.7,2529.5c-13.1,201-82.4,394.4-200.1,558l85.8-558H3428.7z M3430.8,2000.2v132.3
								h-953.9l-18.8-132.3H3430.8z M3147.6,1867.8h-152.7L3969,180.5c8.5-15.8,23-27.4,40.2-32.3c17.2-4.9,35.7-2.6,51.2,6.4
								c15.5,9,26.7,23.8,31.1,41.1c4.4,17.4,1.5,35.8-7.9,51l-436.9,756.9l-346.2,599.6L3147.6,1867.8z" />
								<polygon class="st0" points="4423.2,2151.1 4549.8,2066.3 4465.1,2192.9 4549.8,2319.5 4423.2,2234.8 4296.6,2319.5 4381.4,2192.9 
								4296.6,2066.3 " />
								<polygon class="st0" points="3966.8,1826 4093.4,1741.2 4008.6,1867.8 4093.4,1994.4 3966.8,1909.6 3840.2,1994.4 3925,1867.8 
							3840.2,1741.2 " />
										<polygon class="st0" points="3221.3,635 3347.9,550.2 3263.1,676.8 3347.9,803.4 3221.3,718.6 3094.7,803.4 3179.5,676.8 
							3094.7,550.2 " />
										<polygon class="st0" points="4133,2570.8 4208,2520.6 4157.8,2595.6 4208,2670.5 4133,2620.3 4058,2670.5 4108.2,2595.6 
							4058,2520.6 " />
										<polygon class="st0" points="525,1849 651.6,1764.2 566.8,1890.8 651.6,2017.4 525,1932.7 398.4,2017.4 483.2,1890.8 398.4,1764.2 
							" />
										<polygon class="st0" points="2176.3,273.4 2302.9,188.6 2218.1,315.2 2302.9,441.8 2176.3,357 2049.7,441.8 2134.5,315.2 
							2049.7,188.6 " />
										<polygon class="st0" points="234.7,2268.7 309.7,2218.5 259.5,2293.5 309.7,2368.4 234.7,2318.2 159.8,2368.4 210,2293.5 
							159.8,2218.5 " />
										<polygon class="st0" points="651.6,2783.8 726.5,2733.6 676.4,2808.5 726.5,2883.5 651.6,2833.3 576.6,2883.5 626.8,2808.5 
							576.6,2733.6 " />
									</svg>
								</div>
							<div class="fls-preloader__counter">0%</div>
							<div class="fls-preloader__line"><span></span></div>
						</div>
					</div>`;
					document.querySelector('html').insertAdjacentHTML("beforeend", preloaderTemplate);

					const
						preloader = document.querySelector('.fls-preloader'),
						showPecentLoad = document.querySelector('.fls-preloader__counter'),
						showLineLoad = document.querySelector('.fls-preloader__line span'),
						htmlDocument = document.documentElement;

					let imagesLoadedCount = counter = progress = 0;

					htmlDocument.classList.add('loading');
					htmlDocument.classList.add('lock');

					preloaderImages.forEach(preloaderImage => {
						const imgClone = document.createElement('img');
						if (imgClone) {
							imgClone.onload = imageLoaded;
							imgClone.onerror = imageLoaded;
							preloaderImage.dataset.src ? imgClone.src = preloaderImage.dataset.src : imgClone.src = preloaderImage.src;
						}
					});

					function setValueProgress(progress) {
						showPecentLoad ? showPecentLoad.innerText = `${progress}%` : null;
						showLineLoad ? showLineLoad.style.width = `${progress}%` : null;
					}
					showPecentLoad ? setValueProgress(progress) : null;

					function imageLoaded() {
						imagesLoadedCount++;
						progress = Math.round((100 / preloaderImages.length) * imagesLoadedCount);
						const intervalId = setInterval(() => {
							counter >= progress ? clearInterval(intervalId) : setValueProgress(++counter);
							counter >= 100 ? addLoadedClass() : null;
						}, 10);
					}

					function addLoadedClass() {
						htmlDocument.classList.add('loaded');
						htmlDocument.classList.remove('lock');
						htmlDocument.classList.remove('loading');
						setInterval(() => {
							preloader.remove();
							preloaderContainer.remove();
						}, 500);
					}
				} else {
					preloaderContainer.remove();
				}
			}
			preloader();
		</script>
	</div>
	<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js?_v=20230612142449"></script> -->
	<!-- <script src="js/app.min.js?_v=20230612142449"></script> -->
    <?php wp_footer();?>
</body>

</html>