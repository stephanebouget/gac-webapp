import {
	Component,
	OnInit
} from '@angular/core';
import {
	DomSanitizer
} from '@angular/platform-browser';

@Component({
	selector: 'app-cam',
	templateUrl: './cam.component.html',
	styleUrls: ['./cam.component.scss']
})
export class CamComponent implements OnInit {

	iframeUrl = 'https://www.youtube.com/embed/ui_9qAoosls?showinfo=0&autoplay=1&controls=0&fs=0&loop=1&modestbranding=1&iv_load_policy=3&';
	loadingDatas = false;
	src: any;

	constructor(public sanitizer: DomSanitizer) {}

	ngOnInit(): void {
		this.iframeUrl = this.iframeUrl + Date.now();
		this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeUrl);
	}

}
