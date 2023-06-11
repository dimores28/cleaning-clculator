// Підключення з node_modules
import * as noUiSlider from 'nouislider';
import  '../../libs/wNumb.min.js';
import { flsModules } from "../modules.js";

// Підключення стилів з scss/base/forms/range.scss 
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const rangeWindows = document.querySelector('#rangeWindows');
	const rangePipe = document.querySelector('#rangePipe');
	const numberWindows = document.querySelector('#numberWindows');
	
	if (rangeWindows) {
		let textFrom = rangeWindows.getAttribute('data-from');
		let textTo = rangeWindows.getAttribute('data-to');
		const range = [];

		range.push(parseInt(textFrom));
		range.push(parseInt(textTo));


		noUiSlider.create(rangeWindows, {
			start: 1, 
			connect: [true, false],
			step: 1,
			tooltips: [wNumb({
				decimals: 0})
			],
			range: {
				'min': range[0],
				'max': range[1]
			},
			pips: {
				mode: 'values',
				values: range,
		  }
		});

	}

	flsModules.rangeWindows = rangeWindows;

	if(rangePipe) {
		let textFrom = rangePipe.getAttribute('data-from');
		let textTo = rangePipe.getAttribute('data-to');
		const range = [];

		range.push(parseInt(textFrom));
		range.push(parseInt(textTo));

		noUiSlider.create(rangePipe, {
			start: 1, 
			connect: [true, false],
			step: 1,
			tooltips: [wNumb({
				decimals: 0})
			],
			range: {
				'min': range[0],
				'max': range[1]
			},
			pips: {
				mode: 'values',
				values: range,
		  }
		});
	}

	flsModules.rangePipe = rangePipe;

	if(numberWindows) {
		let textFrom = numberWindows.getAttribute('data-from');
		let textTo = numberWindows.getAttribute('data-to');
		const range = [];

		range.push(parseInt(textFrom));
		range.push(parseInt(textTo));

		noUiSlider.create(numberWindows, {
			start: 1, 
			connect: [true, false],
			step: 1,
			tooltips: [wNumb({
				decimals: 0})
			],
			range: {
				'min': range[0],
				'max': range[1]
			},
			pips: {
				mode: 'values',
				values: range,
		  }
		});
	}

	flsModules.numberWindows = numberWindows;

}
rangeInit();
