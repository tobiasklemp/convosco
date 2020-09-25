import { setupBraintree } from '@convosco/nativescript-braintree';
import { Application } from '@nativescript/core';

setupBraintree('org.nativescript.plugindemo.payments');

Application.run({ moduleName: 'app-root' });
