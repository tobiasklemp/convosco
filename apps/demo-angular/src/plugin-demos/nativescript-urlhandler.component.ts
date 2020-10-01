import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptUrlhandler } from '@demo/shared';
import {} from '@convosco/nativescript-urlhandler';

@Component({
	selector: 'demo-nativescript-urlhandler',
	templateUrl: 'nativescript-urlhandler.component.html',
})
export class NativescriptUrlhandlerComponent {
	demoShared: DemoSharedNativescriptUrlhandler;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptUrlhandler();
	}
}
