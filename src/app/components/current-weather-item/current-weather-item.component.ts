import {
	Component,
	OnInit,
	Input
} from '@angular/core';
import {
	WeatherVO
} from '../../model/weather-vo';
import {
	WeatherService
} from '../weather/weather.service';

@Component({
	selector: 'app-current-weather-item',
	templateUrl: './current-weather-item.component.html',
	styleUrls: ['./current-weather-item.component.scss'],
})
export class CurrentWeatherItemComponent implements OnInit {
	weather: WeatherVO;

	constructor(private weatherService: WeatherService) {}

	ngOnInit(): void {
		this.weatherService.getWeather().then((datas: any) => {
			this.weather = datas.weathers && datas.weathers[0];
		});
	}
}
