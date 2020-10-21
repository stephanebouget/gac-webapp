import {
	Component,
	OnInit
} from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


	iframeWindy1Url = 'https://embed.windy.com/embed2.html?lat=48.734&lon=-3.516&detailLat=49.110&detailLon=10.503&width=600&height=400&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1&';
	iframeWindy2Url = 'https://embed.windy.com/embed2.html?lat=48.734&lon=-3.516&detailLat=49.110&detailLon=10.503&width=600&height=400&zoom=5&level=surface&overlay=rain&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1&';
	iframeWindy3Url = 'https://embed.windy.com/embed2.html?lat=48.734&lon=-3.516&detailLat=49.110&detailLon=10.503&width=600&height=400&zoom=9&level=surface&overlay=rain&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1&';

	isLoadingView = true;

	constructor() { }

	ngOnInit(): void {
		this.iframeWindy1Url = this.iframeWindy1Url + Date.now();
		this.iframeWindy2Url = this.iframeWindy2Url + Date.now();
		this.iframeWindy3Url = this.iframeWindy3Url + Date.now();

		setTimeout(() => {
			this.isLoadingView = false;
		}, 3000);
	}

}
