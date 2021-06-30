import { DemoSharedBase } from '../utils';
import { open } from '@convosco/nativescript-open-default-app';

export class DemoSharedNativescriptOpenDefaultApp extends DemoSharedBase {
	open(scheme){
		open(scheme)
	}
}
