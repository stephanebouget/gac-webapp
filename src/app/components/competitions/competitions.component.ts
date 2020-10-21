import {
	Component,
	OnInit
} from '@angular/core';
import {
	DomSanitizer
} from '@angular/platform-browser';

@Component({
	selector: 'app-competitions',
	templateUrl: './competitions.component.html',
	styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {

	iframeUrl = 'https://pages.ffgolf.org/resultats/liste-competitions/9fa9379b2460c7c99b3ce48face442d6?';
	loadingDatas = false;
	src: any;

	constructor(public sanitizer: DomSanitizer) {}

	ngOnInit(): void {
		this.iframeUrl = this.iframeUrl + Date.now();
		this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeUrl);

	}

}
