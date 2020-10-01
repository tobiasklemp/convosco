import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptUrlhandlerComponent } from './nativescript-urlhandler.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptUrlhandlerComponent }])],
	declarations: [NativescriptUrlhandlerComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptUrlhandlerModule {}
