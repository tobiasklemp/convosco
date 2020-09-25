import { setupBraintreeAppDeligate } from '@convosco/nativescript-braintree';
import { Application } from '@nativescript/core';

if (Application.ios) {
    setupBraintreeAppDeligate("org.nativescript.demo.payments");
}

Application.run({ moduleName: 'app-root' });
