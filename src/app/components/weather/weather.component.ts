import {
	Component,
	OnInit
} from '@angular/core';
import { WeatherVO } from '../../model/weather-vo';
import {
	WeatherService
} from './weather.service';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
	weathers: WeatherVO[];

	constructor(private weatherService: WeatherService) {}

	ngOnInit(): void {


		this.weatherService.getWeather().then((datas: any) => {
			this.weathers = datas.weathers;
            // console.log("WeatherComponent -> ngOnInit -> this.weathers", this.weathers)
			// setTimeout(() => {
				// this.loadingDatas = false;
			// }, 100);
		});
	}

}
