import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptOpenDefaultApp } from '@demo/shared';
import {} from '@convosco/nativescript-open-default-app';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptOpenDefaultApp {}
