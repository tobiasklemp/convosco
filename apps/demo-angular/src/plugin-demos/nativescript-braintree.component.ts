import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptBraintree } from '@demo/shared';
import {} from '@convosco/nativescript-braintree';

@Component({
	selector: 'demo-nativescript-braintree',
	templateUrl: 'nativescript-braintree.component.html',
})
export class NativescriptBraintreeComponent {
	demoShared: DemoSharedNativescriptBraintree;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptBraintree();
	}
}
