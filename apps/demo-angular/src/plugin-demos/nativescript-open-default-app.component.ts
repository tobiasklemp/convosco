import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptOpenDefaultApp } from '@demo/shared';
import {} from '@convosco/nativescript-open-default-app';

@Component({
	selector: 'demo-nativescript-open-default-app',
	templateUrl: 'nativescript-open-default-app.component.html',
})
export class NativescriptOpenDefaultAppComponent {
	demoShared: DemoSharedNativescriptOpenDefaultApp;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptOpenDefaultApp();
	}
}
