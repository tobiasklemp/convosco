import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptShadowedLabel } from '@demo/shared';
import {} from '@convosco/nativescript-shadowed-label';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptShadowedLabel {}
