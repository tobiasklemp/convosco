import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
	{
		name: 'nativescript-braintree'
	},
	{
		name: 'nativescript-shadowed-label'
	},
	{
		name: 'nativescript-urlhandler'
	}
];
}