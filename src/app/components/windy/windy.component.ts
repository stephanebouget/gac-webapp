import {
	Component,
	Input,
	OnInit
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-windy',
	templateUrl: './windy.component.html',
	styleUrls: ['./windy.component.scss']
})
export class WindyComponent implements OnInit {

	@Input() iframeUrl: string;
	loadingDatas = false;

	constructor(public sanitizer: DomSanitizer) {}

	ngOnInit(): void {
		// this.iframeUrl = this.iframeUrl + Date.now();
	}

}
