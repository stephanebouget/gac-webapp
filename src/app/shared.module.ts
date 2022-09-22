import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';

import { FlexLayoutModule } from '@angular/flex-layout';

import { WeatherWeekComponent } from './components/weather-week/weather-week.component';

@NgModule({
	imports: [FlexLayoutModule, CommonModule],
	declarations: [WeatherWeekComponent, SanitizeHtmlPipe],
	exports: [
		WeatherWeekComponent,
		SanitizeHtmlPipe,
		FlexLayoutModule,
		CommonModule,
	],
})
export class SharedModule {}
