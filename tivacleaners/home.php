<?php
/*
Template Name: Home
*/
?>
<!-- <?php echo do_shortcode('[wp_stripe_checkout_session name="Cleaning" price="42" class="stripe-form"]') ?> -->


<?php get_header();?>
	<section class="offer">
		<img src="<?php bloginfo('template_url'); ?>/assets/img/main_bg.jpg" class="offer__bg" alt="background image" width="1500" height="700" />
		<div class="offer__container">
			<h1 class="offer__heading">Quote Calculator</h1>
			<div class="offer__calculator calculator">
				<div class="calculator__services">
					<h2 class="offer__sub-title">
						What service are you interested in?
					</h2>
					<div class="service" data-service-price="30" data-service="1">
						<div class="service__img">
							<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/service1.png" alt="service icon" />
						</div>
						<p>Cleaning of apartments / houses</p>
					</div>
					<div class="service" data-service-price="55" data-service="2">
						<div class="service__img">
							<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/service3.png" alt="service icon" />
						</div>
						<p>Window cleaning</p>
					</div>
					<div class="service" data-service-price="20" data-service="3">
						<div class="service__img">
							<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/service4.png" alt="service icon" />
						</div>
						<p>Lawn mowing</p>
					</div>
					<div class="service" data-service-price="30" data-service="4">
						<div class="service__img">
							<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/service5.png" alt="service icon" />
						</div>
						<p>Drain pipe cleaning</p>
					</div>
					<div class="service" data-service-price="30" data-service="5">
						<div class="service__img">
							<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/service6.png" alt="service icon" />
						</div>
						<p>After renovation</p>
					</div>
					<div class="service" data-service-price="30" data-service="6">
						<div class="service__img">
							<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/service7.png" alt="service icon" />
						</div>
						<p>Request a service</p>
					</div>
				</div>

				<div class="calculator__square" style="display: none">
					<div data-spollers class="spollers calculator__spollers">
						<div class="spollers__item" data-service-filters="1">
							<button type="button" data-spoller class="spollers__title _spoller-active">
								Cleaning of apartments / houses
							</button>
							<div class="spollers__body">
								<div class="block-row">
									<h3 class="block-row__title">
										1. HOW BIG IS YOUR HOME?*
									</h3>
									<div class="block-row__desc">
										<p>
											Choose your home size or select hourly
											for partial cleanings, large, builders
											and extra dirty homes. For move in/out
											please make sure to select the option
											in the extras section. If square
											footage exceeds parameters, you may be
											subject to additional charges.
										</p>
									</div>

									<div class="calculator__rooms">
										<div class="room living-quarters" data-room-price="110">
											<div class="room__img">
												<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/house1.png" alt="house image" />
											</div>
											<p>0-1000 square feet</p>
										</div>
										<div class="room living-quarters" data-room-price="210">
											<div class="room__img">
												<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/house2.png" alt="house image" />
											</div>
											<p>1001-2000 square feet</p>
										</div>
										<div class="room living-quarters" data-room-price="310">
											<div class="room__img">
												<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/house3.png" alt="house image" />
											</div>
											<p>2001-3000 square feet</p>
										</div>
										<div class="room living-quarters" data-room-price="410">
											<div class="room__img">
												<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/house4.png" alt="house image" />
											</div>
											<p>3001-4000 square feet</p>
										</div>
										<div class="room living-quarters" data-room-price="510">
											<div class="room__img">
												<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/house5.png" alt="house image" />
											</div>
											<p>4000+ square feet</p>
										</div>
									</div>

									<div class="bedrooms">
										<h4 class="bedrooms__title">
											Number of bedroom:
										</h4>
										<div class="bedrooms__block">
											<div class="bedrooms__item" data-bedroom-price="169">
												<div class="bedrooms__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/bedroom.png" alt="bedroom icon" />
												</div>
												1
											</div>
											<div class="bedrooms__item" data-bedroom-price="195">
												<div class="bedrooms__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/bedroom.png" alt="bedroom icon" />
												</div>
												2
											</div>
											<div class="bedrooms__item" data-bedroom-price="235">
												<div class="bedrooms__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/bedroom.png" alt="bedroom icon" />
												</div>
												3
											</div>
											<div class="bedrooms__item" data-bedroom-price="349">
												<div class="bedrooms__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/bedroom.png" alt="bedroom icon" />
												</div>
												4
											</div>
											<div class="bedrooms__item" data-bedroom-price="369">
												<div class="bedrooms__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/bedroom.png" alt="bedroom icon" />
												</div>
												5
											</div>
										</div>
									</div>

									<div class="bathrooms">
										<h4 class="bathrooms__title">
											Number of bathrooms:
										</h4>
										<div class="bathrooms__block">
											<div class="bathrooms__item" data-bathrooms-price="15">
												<div class="bathrooms__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/bathroom.png" alt="bathrooms icon" />
												</div>
												1
											</div>

											<div class="bathrooms__item" data-bathrooms-price="30">
												<div class="bathrooms__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/bathroom.png" alt="bathrooms icon" />
												</div>
												2
											</div>

											<div class="bathrooms__item" data-bathrooms-price="45">
												<div class="bathrooms__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/bathroom.png" alt="bathrooms icon" />
												</div>
												3
											</div>

											<div class="bathrooms__item" data-bathrooms-price="60">
												<div class="bathrooms__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/bathroom.png" alt="bathrooms icon" />
												</div>
												4
											</div>

											<div class="bathrooms__item" data-bathrooms-price="75">
												<div class="bathrooms__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/bathroom.png" alt="bathrooms icon" />
												</div>
												5
											</div>
										</div>
									</div>
								</div>

								<div class="block-row">
									<h3 class="block-row__title">
										2. SELECT EXTRAS
									</h3>
									<div class="block-row__desc">
										<p>
											Select the options you wish to add to
											your booking. We HIGHLY recommend a
											deep cleaning for homes not cleaned
											for 30 days and for first visits to
											get your home prepared for ongoing
											maintenance service. For all move
											out/in jobs, homes must be empty prior
											to teams arrival.
										</p>
									</div>
									<div class="select-extras">
										<div class="select-extras__item living-extras" data-extras-price="20">
											<div class="select-extras__img">
												<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/oven.png" alt="oven icon" width="64" height="64" />
											</div>
											<div class="select-extras__desc">
												Clean inside the oven
											</div>
										</div>
										<div class="select-extras__item living-extras" data-extras-price="20">
											<div class="select-extras__img">
												<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/fridge.png" alt="fridge icon" width="64" height="64" />
											</div>
											<div class="select-extras__desc">
												Clean inside fridge
											</div>
										</div>
										<div class="select-extras__item living-extras" data-extras-price="10">
											<div class="select-extras__img">
												<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/pets.png" alt="pets icon" width="64" height="64" />
											</div>
											<div class="select-extras__desc">
												Pets in home
											</div>
										</div>
										<div class="select-extras__item living-extras" data-extras-price="10">
											<div class="select-extras__img">
												<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/dishes.png" alt="Dishes icon" width="64" height="64" />
											</div>
											<div class="select-extras__desc">
												Dishes
											</div>
										</div>
										<div class="select-extras__item living-extras" data-extras-price="20">
											<div class="select-extras__img">
												<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/basement.png" alt="basement icon" width="64" height="64" />
											</div>
											<div class="select-extras__desc">
												Finished Basement
											</div>
										</div>
										<div class="select-extras__item living-extras" data-extras-price="10">
											<div class="select-extras__img">
												<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/carpet.png" alt="carpet icon" width="64" height="64" />
											</div>
											<div class="select-extras__desc">
												Stains on the carpet
											</div>
										</div>
									</div>
								</div>

								<div class="block-row">
									<h3 class="block-row__title">
										3. Cleaning level
									</h3>
									<div class="block-row__desc">
										<p></p>
									</div>
									<div class="cleaning-level">
										<button class="switsh-btn _select" id="clStandart">
											Standart
										</button>
										<button class="switsh-btn cleaning-level-deep" id="clDeep">
											Deep
										</button>
									</div>
								</div>
							</div>
						</div>
						<div class="spollers__item" data-service-filters="2">
							<button type="button" data-spoller class="spollers__title _spoller-active">
								Window cleaning
							</button>
							<div class="spollers__body">
								<div class="number-windows">
									<h3 class="filter-title number-windows__title">
										Number of windows
									</h3>
									<div class="block-row__desc">
										<p>
											Please remove all items from windows
											(mosquito nets, etc.) before cleaning
										</p>
									</div>

									<button class="switsh-btn exterior-window">
										<span>Interior windows cleaning</span>
									</button>

									<div class="number-windows__renge">
										<div id="rangeWindows" data-from="0" data-to="50" data-price-window="7" data-price-exterior-window="10" data-price-one-window="25" class="range"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="spollers__item" data-service-filters="3">
							<button type="button" data-spoller class="spollers__title _spoller-active">
								Lawn mowing
							</button>
							<div class="spollers__body">
								<h3 class="filter-title number-windows__title">
									Lawn area*
								</h3>
								<div class="lawn-area">
									<div class="lawn-area__item" data-lawn-area="15">
										<div class="lawn-area__img">
											<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/lawn.png" alt="lawn icon" width="48" height="48" />
										</div>
										х-700 sq.feet
									</div>
									<div class="lawn-area__item" data-lawn-area="20">
										<div class="lawn-area__img">
											<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/lawn.png" alt="lawn icon" width="48" height="48" />
										</div>
										701-1000 sq.feet
									</div>
									<div class="lawn-area__item" data-lawn-area="25">
										<div class="lawn-area__img">
											<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/lawn.png" alt="lawn icon" width="48" height="48" />
										</div>
										1001-1500 sq.feet
									</div>
									<div class="lawn-area__item" data-lawn-area="30">
										<div class="lawn-area__img">
											<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/lawn.png" alt="lawn icon" width="48" height="48" />
										</div>
										1501-3000 sq.feet
									</div>
									<div class="lawn-area__item" data-lawn-area="35">
										<div class="lawn-area__img">
											<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/lawn.png" alt="lawn icon" width="48" height="48" />
										</div>
										3001-3500 sq.feet
									</div>
									<div class="lawn-area__item" data-lawn-area="40">
										<div class="lawn-area__img">
											<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/lawn.png" alt="lawn icon" width="48" height="48" />
										</div>
										3500х sq.feet
									</div>
								</div>
							</div>
						</div>
						<div class="spollers__item" data-service-filters="4">
							<button type="button" data-spoller class="spollers__title _spoller-active">
								Drain pipe cleaning
							</button>
							<div class="spollers__body">
								<div class="number-pipe">
									<h3 class="filter-title number-pipe__title">
										Number of pipe
									</h3>
									<div class="number-pipe__renge">
										<div id="rangePipe" data-from="0" data-to="16" data-price-pipe="8" data-price-one-pipe="40" class="range"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="spollers__item" data-service-filters="5">
							<button type="button" data-spoller class="spollers__title _spoller-active">
								After renovation
							</button>
							<div class="spollers__body">
								<div class="block-row">
									<h3 class="block-row__title">
										1. HOW BIG IS YOUR HOME?*
									</h3>
									<div class="block-row__desc">
										<p>
											Choose your home size or select hourly
											for partial cleanings, large, builders
											and extra dirty homes. For move in/out
											please make sure to select the option
											in the extras section. If square
											footage exceeds parameters, you may be
											subject to additional charges.
										</p>
									</div>

									<div class="calculator__rooms">
										<div class="room after-repair" data-room-price="110">
											<div class="room__img">
												<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/house1.png" alt="house image" />
											</div>
											<p>0-1000 square feet</p>
										</div>
										<div class="room after-repair" data-room-price="210">
											<div class="room__img">
												<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/house2.png" alt="house image" />
											</div>
											<p>1001-2000 square feet</p>
										</div>
										<div class="room after-repair" data-room-price="310">
											<div class="room__img">
												<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/house3.png" alt="house image" />
											</div>
											<p>2001-3000 square feet</p>
										</div>
										<div class="room after-repair" data-room-price="410">
											<div class="room__img">
												<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/house4.png" alt="house image" />
											</div>
											<p>3001-4000 square feet</p>
										</div>
										<div class="room after-repair" data-room-price="510">
											<div class="room__img">
												<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/house5.png" alt="house image" />
											</div>
											<p>4000+ square feet</p>
										</div>
									</div>

									<div class="bathrooms-ar">
										<h4 class="bathrooms-ar__title">
											Number of bathrooms:
										</h4>
										<div class="bathrooms-ar__block">
											<div class="bathrooms-ar__item" data-bathrooms-price="15">
												<div class="bathrooms-ar__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/bathroom.png" alt="bathrooms icon" />
												</div>
												1
											</div>

											<div class="bathrooms-ar__item" data-bathrooms-price="30">
												<div class="bathrooms-ar__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/bathroom.png" alt="bathrooms icon" />
												</div>
												2
											</div>

											<div class="bathrooms-ar__item" data-bathrooms-price="45">
												<div class="bathrooms-ar__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/bathroom.png" alt="bathrooms icon" />
												</div>
												3
											</div>

											<div class="bathrooms-ar__item" data-bathrooms-price="60">
												<div class="bathrooms-ar__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/bathroom.png" alt="bathrooms icon" />
												</div>
												4
											</div>

											<div class="bathrooms-ar__item" data-bathrooms-price="75">
												<div class="bathrooms-ar__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/bathroom.png" alt="bathrooms icon" />
												</div>
												5
											</div>
										</div>
									</div>
								</div>

								<div class="block-row">
									<h3 class="block-row__title">
										2. Is there furniture?*
									</h3>
									<div class="block-row__desc">
										<p></p>
									</div>

									<button class="switsh-btn is-furniture">
										YES
									</button>

									<div class="renovation-extras__wrap" style="display: none">
										<h3 class="block-row__title">
											SELECT EXTRAS
										</h3>

										<div class="select-extras">
											<div class="select-extras__item renovation-extras" data-extras-price="20">
												<div class="select-extras__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/oven.png" alt="oven icon" width="64" height="64" />
												</div>
												<div class="select-extras__desc">
													Clean inside the oven
												</div>
											</div>
											<div class="select-extras__item renovation-extras" data-extras-price="20">
												<div class="select-extras__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/fridge.png" alt="fridge icon" width="64" height="64" />
												</div>
												<div class="select-extras__desc">
													Clean inside fridge
												</div>
											</div>
											<div class="select-extras__item renovation-extras" data-extras-price="10">
												<div class="select-extras__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/pets.png" alt="pets icon" width="64" height="64" />
												</div>
												<div class="select-extras__desc">
													Pets in home
												</div>
											</div>
											<div class="select-extras__item renovation-extras" data-extras-price="10">
												<div class="select-extras__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/dishes.png" alt="Dishes icon" width="64" height="64" />
												</div>
												<div class="select-extras__desc">
													Dishes
												</div>
											</div>
											<div class="select-extras__item renovation-extras" data-extras-price="20">
												<div class="select-extras__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/basement.png" alt="basement icon" width="64" height="64" />
												</div>
												<div class="select-extras__desc">
													Finished Basement
												</div>
											</div>
											<div class="select-extras__item renovation-extras" data-extras-price="10">
												<div class="select-extras__img">
													<img src="<?php bloginfo('template_url'); ?>/assets/img/calculator/carpet.png" alt="carpet icon" width="64" height="64" />
												</div>
												<div class="select-extras__desc">
													Stains on the carpet
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="block-row">
									<h3 class="block-row__title">
										3. Cleaning level
									</h3>
									<div class="block-row__desc">
										<p></p>
									</div>
									<div class="cleaning-level">
										<button class="switsh-btn _select" id="clRepairStandart">
											Standart
										</button>
										<button class="switsh-btn" id="clRepairDeep">
											Deep
										</button>
									</div>
								</div>

								<div class="block-row">
									<h3 class="block-row__title">
										4. Wash windows?
									</h3>

									<button class="switsh-btn is-window">
										YES
									</button>

									<div class="window-wash__wrap" style="display: none">
										<div class="number-windows">
											<h3 class="filter-title number-windows__title">
												Number of windows
											</h3>
											<div class="number-windows__renge">
												<div id="numberWindows" data-from="0" data-to="30" data-price-window="12" class="range"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="payment-options">
						<h3 class="payment-options__title">
							CHOOSE YOUR FREQUENCY
						</h3>
						<div class="payment-options__text">
							<p>
								It's all about matching you with the perfect
								clean for your home. Scheduling is flexible.
								Cancel or reschedule anytime. The first booking
								will not include a discount as we need to
								familiarize ourselves with your home.
							</p>
						</div>
						<div class="payment-options__variants">
							<label class="payment-options__option _setected" for="oneTime" data-discont-procent="0">
								One time
								<span>100</span>
							</label>
							<label class="payment-options__option" for="monthly" data-discont-procent="5">
								Monthly (5%off)
								<span></span>
							</label>
							<label class="payment-options__option" for="biweekly" data-discont-procent="7">
								Biweekly (7%off)
								<span></span>
							</label>
							<label class="payment-options__option" for="weekly" data-discont-procent="15">
								Weekly (15%off)
								<span></span>
							</label>
						</div>
					</div>
				</div>

				<div class="calculator__form" style="display: none">
					<form id="calcForm" class="calc__form">
						<div class="form__loader calc__loader">
							<span class="loader"></span>
						</div>
						<div class="calculator__form-group">
							<div class="input-group">
								<label for="firstName">First name*</label>
								<input type="text" class="form-control" id="firstName" required="required" aria-required="true" placeholder="First name*" aria-label="First name" name="firstName" />
							</div>

							<div class="input-group">
								<label for="lastName">Last name</label>
								<input type="text" class="form-control" id="lastName" placeholder="Last name" aria-label="Last name" name="lastName" />
							</div>

							<div class="input-group">
								<label for="userPhone">Telephone*</label>
								<input type="tel" class="form-control" id="userPhone" placeholder="+182xxxxx*" required="required" aria-required="true" pattern="[0-9()#&+*-=.]+" aria-describedby="userPhone" name="userPhone" />
							</div>

							<div class="input-group">
								<label for="userEmail">Email address*</label>
								<input type="email" class="form-control" placeholder="example@mail.com*" required="required" aria-required="true" id="userEmail" aria-describedby="emailHelp" name="userEmail" />
							</div>

							<div class="input-group">
								<label for="userAddres">Addres*</label>
								<input type="text" class="form-control" placeholder="Addres*" required="required" aria-required="true" id="userAddres" aria-describedby="Addres Help" name="userAddres" />
							</div>

							<div class="input-group">
								<label for="aptSuite">Apt/Suite</label>
								<input type="text" class="form-control" placeholder="Apt/Suite #" id="aptSuite" aria-describedby="Apt/Suite Help" name="aptSuite" />
							</div>

							<div class="input-group">
								<label for="userCity">City*</label>
								<input type="text" class="form-control" placeholder="City*" required="required" aria-required="true" id="userCity" aria-describedby="City Help" name="userCity" />
							</div>

							<div class="input-group">
								<label for="zipCode">Zip Code*</label>
								<input type="text" class="form-control" placeholder="T3C 1C7*" required="required" aria-required="true" id="zipCode" aria-describedby="Zip Code Help" name="zipCode" />
							</div>

							<div class="input-group">
								<label for="cleaningDate">Date</label>
								<input type="text" class="form-control datapicker" id="cleaningDate" placeholder="Date" aria-label="cleaning date" name="cleaningDate" />
							</div>

							<div class="input-group">
								<label for="timeInput">Time:</label>
								<input type="text" class="form-control" id="timeInput" placeholder="Enter time (hh:mm)" aria-describedby="time Help" name="timeInput" />
							</div>

							<div class="input-group">
								<label for="streetAddress">Message</label>
								<textarea id="message" class="form-control form-textarea" placeholder="Message" name="message"></textarea>
							</div>

							<div class="input-hidden">
								<input type="hidden" name="totalPrice" id="totalPrice" />
								<input type="hidden" name="clientId" id="clientId" />
								<!-- Cleaning houses -->
								<input type="hidden" name="houseClean" />
								<input type="hidden" name="houseSize" />
								<input type="hidden" name="numberBeadroom" />
								<input type="hidden" name="numberBathrooms" />
								<input type="hidden" name="extras" />
								<input type="hidden" name="cleaningLevel" />

								<!-- window cleaning -->
								<input type="hidden" name="cleaningWindow" />
								<input type="hidden" name="interiorWindowsClean" />
								<input type="hidden" name="numberWindow" />

								<!-- Lawn mowing -->
								<input type="hidden" name="lawnMowing" />
								<input type="hidden" name="lawnArea" />

								<!-- Drain pipe cleaning -->
								<input type="hidden" name="pipeCleaning" />
								<input type="hidden" name="pipeCleaningNumber" />

								<!-- After renovation -->
								<input type="hidden" name="afterRenovationClean" />
								<input type="hidden" name="renovationHouseSize" />
								<input type="hidden" name="renovationNumberBathrooms" />
								<input type="hidden" name="renovationExtras" />
								<input type="hidden" name="renovationCleaningLevel" />
								<input type="hidden" name="renovationNumberWindows" />
							</div>
							<div class="calculator__alert"></div>

							<div class="input-group">
								<fieldset>
									<div class="payment-swith">
										<input type="radio" id="oneTime" name="payment" value="One time" checked />
										<input type="radio" id="monthly" name="payment" value="Monthly" />
										<input type="radio" id="biweekly" name="payment" value="Biweekly" />
										<input type="radio" id="weekly" name="payment" value="Weekly" />
									</div>
								</fieldset>
							</div>
						</div>

						<div class="calculator__buttons-wrap">
							<button type="submit" class="btn btn-primary" id="bookNowBtn">
								Book now
							</button>
							<button type="button" class="btn btn-primary" id="buyNowBtn">
								Buy Now
							</button>
						</div>
					</form>
				</div>

				<div class="calculator__total-price">
					$<span>0</span><strong>(+GST 5%)</strong>
				</div>

				<p class="calculator__alerts">
					Please make a selection to continue
				</p>

				<div class="calculator__steps">
					<div class="_active" data-step="1"></div>
					<div data-step="2"></div>
					<div data-step="3"></div>
				</div>

				<div class="calculator__btn-group">
					<button type="button" class="btn btn-primary calculator__btn-prev" style="display: none">
						PREVIOUS STEP
					</button>
					<button type="button" class="btn btn-primary calculator__btn-next">
						Next step
					</button>
				</div>
			</div>
		</div>
	</section>

	<section class="about" id="about">
		<div class="about__container">
			<div class="about-content">
				<div class="about-content__body">
					<h3 class="about-content__heading">
						Eliminate Cleaning From Your To-Do List
					</h3>
					<p class="about-content__text">
						House cleaning chores can seem like a never-ending
						list of tasks. Whether you need daily, weekly,
						bi-weekly or even a monthly house cleaning schedule,
						TIVA Cleaning is here to lessen the stress of
						day-to-day cleaning demands. With cleaning off your
						plate, you can focus on those things that matter the
						most to you. We take pride in our professional home
						cleaning services, including our attention to detail,
						advanced techniques and keen eye for areas often
						overlooked.
					</p>
				</div>
				<div class="about-content__img">
					<img class="about-img" src="<?php bloginfo('template_url'); ?>/assets/img/about.jpg" alt="" />
				</div>
			</div>
		</div>
	</section>

	<section class="advantages">
		<div class="advantages__container">
			<h2 class="advantages__heading section-heading">
				WHY CHOOSE US
			</h2>
			<div class="advantages__content">
				<div class="advantages__item row-reverse">
					<div class="advantages__item-img">
						<img class="advantages__img" src="<?php bloginfo('template_url'); ?>/assets/img/do_it_right.jpg" alt="" />
					</div>
					<div class="advantages__item-text">
						<h3 class="advantages__item-title">
							We Do it Right the First Time
						</h3>
						<p class="advantages__item-body">
							Our employees all have a thorough background
							check, and we are insured to protect our customers
							should any accidental damages occur
						</p>
					</div>
				</div>
				<div class="advantages__item">
					<div class="advantages__item-img">
						<img class="advantages__img" src="<?php bloginfo('template_url'); ?>/assets/img/buketTools.jpg" alt="" />
					</div>
					<div class="advantages__item-text">
						<h3 class="advantages__item-title">
							We Provide All Supplies
						</h3>
						<p class="advantages__item-body">
							We come fully prepared, so you don’t need to buy
							supplies. Ask about our green eco products
							options!
						</p>
					</div>
				</div>
				<div class="advantages__item row-reverse">
					<div class="advantages__item-img">
						<img class="advantages__img" src="<?php bloginfo('template_url'); ?>/assets/img/woman-worker.jpg" alt="" />
					</div>
					<div class="advantages__item-text">
						<h3 class="advantages__item-title">
							Striving for Excellence
						</h3>
						<p class="advantages__item-body">
							Our Highly Trained employees won’t need to come
							back a second time. We take pride in our work and
							do the job right from start to finish
						</p>
					</div>
				</div>
				<div class="advantages__item">
					<div class="advantages__item-img">
						<img class="advantages__img" src="<?php bloginfo('template_url'); ?>/assets/img/workers.jpg" alt="" />
					</div>
					<div class="advantages__item-text">
						<h3 class="advantages__item-title">
							Professional Cleaners
						</h3>
						<p class="advantages__item-body">
							Our employees are experienced, highly trained, and
							professional. You’ll be glad to welcome them into
							your home
						</p>
					</div>
				</div>
				<div class="advantages__item row-reverse">
					<div class="advantages__item-img">
						<img class="advantages__img" src="<?php bloginfo('template_url'); ?>/assets/img/Secured.jpg" alt="" />
					</div>
					<div class="advantages__item-text">
						<h3 class="advantages__item-title">
							Secured and Insured
						</h3>
						<p class="advantages__item-body">
							We value your belongings as much as you. That’s
							why we carry insurance for any accidental damages
							incurred on our watch
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="reviews" id="reviews">
		<div class="reviews__container">
			<h2 class="reviews__heading section-heading">
				What Our Customers Are Saying.
			</h2>
			<div class="reviews__content">
				<div class="reviews__item">
					<div class="reviews__item-icon">
						<h3>C</h3>
					</div>
					<h4 class="reviews__item-title">Carol E.</h4>
					<img class="reviews__item-grade" src="<?php bloginfo('template_url'); ?>/assets/img/star-rating.svg" alt="" />
					<div class="reviews__item-body read-more">
						<p class="content">
							Oh my God I would just like to say…THEY ARE
							AMAZINGG. They did such an amazing job seriously
							100/10. Im so glad I found them. They did
							everything I asked for and more!
						</p>
						<a href="#" class="toggle-link">Read More</a>
					</div>
				</div>
				<div class="reviews__item">
					<div class="reviews__item-icon">
						<h3>S</h3>
					</div>
					<h4 class="reviews__item-title">Susan P.</h4>
					<img class="reviews__item-grade" src="<?php bloginfo('template_url'); ?>/assets/img/star-rating.svg" alt="" />
					<div class="reviews__item-body read-more">
						<p class="content">
							They are professional, trustworthy,
							perfectionists, and leave the place looking like a
							completely different place. (from the mess) Also,
							they are meticulous and organi,e things! Axtually
							think they should be interior designers
						</p>
						<a href="#" class="toggle-link">Read More</a>
					</div>
				</div>
				<div class="reviews__item">
					<div class="reviews__item-icon">
						<h3>J</h3>
					</div>
					<h4 class="reviews__item-title">Jessica B.</h4>
					<img class="reviews__item-grade" src="<?php bloginfo('template_url'); ?>/assets/img/star-rating.svg" alt="" />
					<div class="reviews__item-body read-more">
						<p class="content">
							We asked AP Good Cleaning to help us clean our
							furnished apartment as we were moving out. They
							were exceptionally thorough and we left the
							apartment in even better condition than when we
							moved in! AP Good Cleaning will be our first call
							the next time we need housecleaning.
						</p>
						<a href="#" class="toggle-link">Read More</a>
					</div>
				</div>
				<div class="reviews__item">
					<div class="reviews__item-icon">
						<h3>K</h3>
					</div>
					<h4 class="reviews__item-title">Kelly S.</h4>
					<img class="reviews__item-grade" src="<?php bloginfo('template_url'); ?>/assets/img/star-rating.svg" alt="" />
					<div class="reviews__item-body read-more">
						<p class="content">
							This is a very professional business in the area.
							They first come to your home to visit for a fair
							estimate. After our first cleaning with A & P we
							were really impressed with the attention to detail
							and value of the girls cleaning services. Highly
							recommend!!
						</p>
						<a href="#" class="toggle-link">Read More</a>
					</div>

					<button class="reviews__btn">Read more</button>
				</div>
			</div>
		</div>
	</section>

	<section class="book">
		<div class="book__container">
			<div class="book__content">
				<img class="book__content-img" src="<?php bloginfo('template_url'); ?>/assets/img/form-img.jpg" alt="" />
			</div>

			<form action="" class="book__form" id="bookForm">
				<div class="form__loader book__loader">
					<span class="loader"></span>
				</div>

				<label class="book__form-labele" for="bookForm">BOOK A CLEANING</label>
				<div class="book__form-upper">
					<div class="book__form-group upper-group">
						<label class="form-group__labele" for="bookUserName"></label>
						<input type="text" class="input book__input book__input-name" id="bookUserName" name="bookUserName" placeholder="Name*" />
					</div>

					<div class="book__form-group upper-group">
						<label class="form-group__labele" for="bookEmail"></label>
						<input type="email" class="input book__input book__input-email" id="bookEmail" placeholder="Email*" required="required" aria-required="true" name="bookEmail" />
					</div>
					<div class="book__form-group upper-group">
						<label class="form-group__labele" for="bookPhone"></label>
						<input type="tel" class="input book__input book__input-phone" id="bookPhone" placeholder="Phone" required="required" aria-required="true" pattern="[0-9()#&+*-=.]+" name="bookPhone" title="Only numbers and phone symbols (#, -, *, і etc.) are accepted." />
					</div>
				</div>

				<div class="book__form-group lower-group">
					<label class="form-group__labele" for="bookMessage"></label>
					<textarea class="input book__input book__input-ms" id="bookMessage" name="bookMessage" rows="3" placeholder="Message"></textarea>
				</div>
				<div class="book__alert"></div>
				<button type="submit" class="btn btn-form book__submit">
					Submit
				</button>
			</form>
		</div>
	</section>

<?php get_footer();?>