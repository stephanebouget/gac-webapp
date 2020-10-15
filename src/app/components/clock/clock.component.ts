import {
	Component,
	OnInit
} from '@angular/core';
import {
	DomSanitizer
} from '@angular/platform-browser';

@Component({
	selector: 'app-clock',
	templateUrl: './clock.component.html',
	styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

	iframeUrl = 'https://static.rolex.com/clocks/2020/Eric_Lamaze_Desktop_HTML_140x200/rolex.html?';
	loadingDatas = false;

	constructor(public sanitizer: DomSanitizer) {}

	ngOnInit(): void {
		this.iframeUrl = this.iframeUrl + Date.now();
	}

}
