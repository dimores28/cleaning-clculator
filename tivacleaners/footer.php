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
							<li class="more-info__item">
								<a href="https://www.tivacleaners.com/privacy-policy-2/" class="more-info__link">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  class="more-info__icon" viewBox="0 0 16 16">
										<path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"/>
									</svg>

									<span>Privacy policy</span>
								</a>
							</li>
						</ul>
					</div>
					<div class="footer__fol-us">
						<h3 class="footer__heading">FOLLOW US</h3>
						<ul class="fol-us">
							<li class="fol-us__item">
								<a href="<?php echo $contacts["instagram"] ?>" class="fol-us__link" target="_blank">
									<svg class="fol-us__icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background: new 0 0 24 24" xml:space="preserve" width="512" height="512">
										<g>
											<path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z" />
											<path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z" />
											<circle cx="18.406" cy="5.594" r="1.44" />
										</g>
									</svg>
								</a>
							</li>
							<li class="fol-us__item">
								<a href="https://www.facebook.com/profile.php?id=61551237391908" class="fol-us__link" target="_blank">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
										<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
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


			/* Блок з лічильником */
			.fls-preloader__counter {
				font-size: 6rem;
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