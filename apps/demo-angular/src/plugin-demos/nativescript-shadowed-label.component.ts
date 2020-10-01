import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptShadowedLabel } from '@demo/shared';
import {} from '@convosco/nativescript-shadowed-label';

@Component({
	selector: 'demo-nativescript-shadowed-label',
	templateUrl: 'nativescript-shadowed-label.component.html',
})
export class NativescriptShadowedLabelComponent {
	demoShared: DemoSharedNativescriptShadowedLabel;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptShadowedLabel();
	}
}
