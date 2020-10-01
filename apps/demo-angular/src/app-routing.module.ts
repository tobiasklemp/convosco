import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'nativescript-braintree', loadChildren: () => import('./plugin-demos/nativescript-braintree.module').then((m) => m.NativescriptBraintreeModule) },
	{ path: 'nativescript-shadowed-label', loadChildren: () => import('./plugin-demos/nativescript-shadowed-label.module').then((m) => m.NativescriptShadowedLabelModule) },
	{ path: 'nativescript-urlhandler', loadChildren: () => import('./plugin-demos/nativescript-urlhandler.module').then((m) => m.NativescriptUrlhandlerModule) },
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
