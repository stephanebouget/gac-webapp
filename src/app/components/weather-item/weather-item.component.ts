import {
	Component,
	Input
} from '@angular/core';
import {
	WeatherVO
} from '../../model/weather-vo';

@Component({
	selector: 'app-weather-item',
	templateUrl: './weather-item.component.html',
	styleUrls: ['./weather-item.component.scss']

})
export class WeatherItemComponent {

	@Input() weather: WeatherVO;

	constructor() {}

}
