export class WeatherVO {

	date: string;
	hour: string;
	wind: string;
	wet: string;
	icon: string;
	cloudiness: string;
	rain: string;
	rainQuantity: string;
	windSpeed: string;
	temp: string;
	gust: string;
	isEndDay = false;
	isNewDay = false;

	constructor(date, hour, wind, wet, icon, cloudiness, rain, rainQuantity, windSpeed, temp, gust) {
		this.date = date;
		// if (this.date.startsWith(0)) {
		//     this.date = this.date.substr(1);
		// }
		this.hour = hour;
		if (this.hour.includes('00h')) {
			this.isNewDay = true;
		}
		if (this.hour.includes('23h')) {
			this.isEndDay = true;
		}
		this.wet = wet;
		this.cloudiness = cloudiness;
		this.rain = rain;
		this.rainQuantity = rainQuantity;
		this.windSpeed = windSpeed;
		this.temp = temp;
		this.gust = gust;

		icon = icon.replace('https://www.lameteoagricole.net/appli/img/icones-meteo/small/', 'assets/img/updatedv0/');
		this.icon = icon;

		wind = wind.replace('rotationN', 'rotation');
		wind = wind.replace('r=2', 'r=1');
		this.wind = wind;

	}
}
