import {
	BrowserModule
} from '@angular/platform-browser';
import {
	NgModule
} from '@angular/core';

import {
	AppRoutingModule
} from './app-routing.module';
import {
	AppComponent
} from './app.component';
import {
	WeatherComponent
} from './components/weather/weather.component';
import {
	ServiceWorkerModule
} from '@angular/service-worker';
import {
	environment
} from '../environments/environment';
import {
	BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
	HttpClientModule
} from '@angular/common/http';
import {
	SharedModule
} from './shared.module';
import {
	DashboardComponent
} from './components/dashboard/dashboard.component';
import {
	TeetimesComponent
} from './components/teetimes/teetimes.component';
import {
	CompetitionsComponent
} from './components/competitions/competitions.component';
import {
	ClockComponent
} from './components/clock/clock.component';
import {
	WindyComponent
} from './components/windy/windy.component';
import {
	BookingComponent
} from './components/booking/booking.component';
import {
	CamComponent
} from './components/cam/cam.component';

@NgModule({
	declarations: [
		AppComponent,
		WeatherComponent,
		DashboardComponent,
		TeetimesComponent,
		CompetitionsComponent,
		WindyComponent,
		ClockComponent,
		BookingComponent,
		CamComponent
	],
	imports: [
		BrowserModule,
		SharedModule,
		HttpClientModule,
		AppRoutingModule,
		ServiceWorkerModule.register('ngsw-worker.js', {
			enabled: environment.production
		}),
		BrowserAnimationsModule
	],
	exports: [],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
