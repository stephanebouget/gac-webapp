import {
	NgModule
} from '@angular/core';
import {
	CommonModule
} from '@angular/common';


import {
	WeatherItemComponent
} from './components/weather-item/weather-item.component';
import {
	SanitizeHtmlPipe
} from './pipes/sanitize-html.pipe';

import {
	FlexLayoutModule
} from '@angular/flex-layout';
import {
	CurrentWeatherItemComponent
} from './components/current-weather-item/current-weather-item.component';
import {
	WeatherWeekComponent
} from './components/weather-week/weather-week.component';

@NgModule({
	imports: [
		FlexLayoutModule,
		CommonModule
	],
	declarations: [
		CurrentWeatherItemComponent,
		WeatherItemComponent,
		WeatherWeekComponent,
		SanitizeHtmlPipe
	],
	exports: [
		CurrentWeatherItemComponent,
		WeatherItemComponent,
		WeatherWeekComponent,
		SanitizeHtmlPipe,
		FlexLayoutModule,
		CommonModule
	]
})

export class SharedModule {}
