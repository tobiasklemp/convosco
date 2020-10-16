import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptOpenDefaultAppComponent } from './nativescript-open-default-app.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptOpenDefaultAppComponent }])],
	declarations: [NativescriptOpenDefaultAppComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptOpenDefaultAppModule {}
