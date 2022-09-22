import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
	iframeUrl: string;

	loadingDatas = false;
	src: any;

	constructor(public sanitizer: DomSanitizer) {}

	ngOnInit(): void {
		this.iframeUrl =
			'https://www.lameteoagricole.net/meteo-heure-par-heure/Pleumeur-Bodou-22560.html?';

		this.iframeUrl = this.iframeUrl + Date.now();
		this.src = this.sanitizer.bypassSecurityTrustResourceUrl(
			this.iframeUrl
		);
	}
}
