import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptUrlhandler } from '@demo/shared';
import {} from '@convosco/nativescript-urlhandler';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptUrlhandler {}
