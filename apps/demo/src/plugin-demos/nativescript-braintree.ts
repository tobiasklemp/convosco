import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptBraintree } from '@demo/shared';
import {} from '@convosco/nativescript-braintree';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptBraintree {}
