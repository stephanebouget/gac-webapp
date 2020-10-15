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


	iframeWindy1Url = 'https://embed.windy.com/embed2.html?lat=48.400&lon=-3.889&detailLat=49.110&detailLon=10.503&width=650&height=450&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1&';
	iframeWindy2Url = 'https://embed.windy.com/embed2.html?lat=48.400&lon=-3.889&detailLat=49.110&detailLon=10.503&width=650&height=450&zoom=6&level=surface&overlay=rain&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1&';
	constructor() {}

	ngOnInit(): void {
		this.iframeWindy1Url = this.iframeWindy1Url + Date.now();
		this.iframeWindy2Url = this.iframeWindy2Url + Date.now();

	}

}
