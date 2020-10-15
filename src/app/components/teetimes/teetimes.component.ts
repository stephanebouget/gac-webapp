import {
	Component,
	OnInit
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-teetimes',
	templateUrl: './teetimes.component.html',
	styleUrls: ['./teetimes.component.scss']
})
export class TeetimesComponent implements OnInit {

	iframeUrl = 'https://web.ffgolf.org/ffgolf/tee/tee.php?gk=9fa9379b2460c7c99b3ce48face442d6&';

	loadingDatas = false;

	constructor(public sanitizer: DomSanitizer) {}

	ngOnInit(): void {
		this.iframeUrl = this.iframeUrl + Date.now();

	}

}
