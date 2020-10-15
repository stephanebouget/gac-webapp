import {
	Component,
	OnInit
} from '@angular/core';
import {
	WeatherService
} from '../weather/weather.service';

@Component({
	selector: 'app-weather-week',
	templateUrl: './weather-week.component.html',
	styleUrls: ['./weather-week.component.scss']
})
export class WeatherWeekComponent implements OnInit {


	weathers: any;
	// loadingDatas = false;

	constructor(private weatherService: WeatherService) {}

	ngOnInit(): void {
		// this.loadingDatas = true;

		this.weatherService.getWeatherDay().then((datas: any) => {
			this.weathers = datas.weathers;
			// setTimeout(() => {
			// 	this.loadingDatas = false;
			// }, 100);
		});
	}

}
