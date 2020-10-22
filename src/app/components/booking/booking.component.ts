import {
	Component,
	OnInit
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-booking',
	templateUrl: './booking.component.html',
	styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

	iframeUrl = 'https://saintsamson.aws-golf.com/albport/index.jsp?language=fr&sid=32A4F11D9F3A4D54B15E9025D564A3DE';
	loadingDatas = false;
	src: any;

	constructor(public sanitizer: DomSanitizer) { }

	ngOnInit(): void {
		this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeUrl);
	}

}
