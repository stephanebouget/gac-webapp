import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-weather-week',
	templateUrl: './weather-week.component.html',
	styleUrls: ['./weather-week.component.scss'],
})
export class WeatherWeekComponent implements OnInit {
	iframeUrl: string;

	loadingDatas = false;
	src: any;

	constructor(public sanitizer: DomSanitizer) {}

	ngOnInit(): void {

		this.iframeUrl =
			'https://www.lameteoagricole.net/previsions-meteo-agricole/Pleumeur-Bodou-22560.html?';

		this.iframeUrl = this.iframeUrl + Date.now();
		this.src = this.sanitizer.bypassSecurityTrustResourceUrl(
			this.iframeUrl
		);
	}
}
