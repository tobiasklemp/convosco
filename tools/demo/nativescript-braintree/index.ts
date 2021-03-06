import { DemoSharedBase } from '../utils';
import { Braintree, BrainTreeOptions } from '@convosco/nativescript-braintree';
import * as applicationModule from '@nativescript/core/application';

export class DemoSharedNativescriptBraintree extends DemoSharedBase {
	_braintree: Braintree;

	get nativeText(): string {
		return applicationModule.ios ? 'Apple Pay' : 'Google Pay';
	}

	token =
		'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiI2YjA5YjE1N2Y0ZmRlYmU2NzM4NDFiOGVjMjRkZDE0YTNhM2MxNzk4YWI0ZWEyYTg1YTU2ODBkYTU0ZTA2OTMzfGNyZWF0ZWRfYXQ9MjAxNy0wOC0yMlQxMzozNjoxNC4zOTE0ODg5MTQrMDAwMFx1MDAyNm1lcmNoYW50X2lkPTM0OHBrOWNnZjNiZ3l3MmJcdTAwMjZwdWJsaWNfa2V5PTJuMjQ3ZHY4OWJxOXZtcHIiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvMzQ4cGs5Y2dmM2JneXcyYi9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzLzM0OHBrOWNnZjNiZ3l3MmIvY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vY2xpZW50LWFuYWx5dGljcy5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tLzM0OHBrOWNnZjNiZ3l3MmIifSwidGhyZWVEU2VjdXJlRW5hYmxlZCI6dHJ1ZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiQWNtZSBXaWRnZXRzLCBMdGQuIChTYW5kYm94KSIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImFjbWV3aWRnZXRzbHRkc2FuZGJveCIsImN1cnJlbmN5SXNvQ29kZSI6IlVTRCJ9LCJtZXJjaGFudElkIjoiMzQ4cGs5Y2dmM2JneXcyYiIsInZlbm1vIjoib2ZmIn0=';

	get braintree(): Braintree {
		if (!this._braintree) {
			this._braintree = new Braintree(this.token);
		}
		return this._braintree;
	}

	constructor() {
		super();
	}

	async data() {
		let data = await this.braintree.collectData();
		console.log(data);
	}

	public async brainTreePayment() {
		let opts: BrainTreeOptions = {
			amount: '0.01',
			collectDeviceData: false,
			requestThreeDSecureVerification: true,
			enableGooglePay: true,
			// Apple Pay payment request
			currencyCode: 'USD',
			enablePayPal: true,
		};

		if (applicationModule.ios) {
			// If doing ApplePay
			let applePayLineItems = this.getApplePayLineItemsSummary();

			let applePayPaymentRequestObj; // = this.getApplePayPaymentRequestObj(applePayLineItems);
			opts.applePayPaymentRequest = applePayPaymentRequestObj;
		}

		let token =
			'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiI2YjA5YjE1N2Y0ZmRlYmU2NzM4NDFiOGVjMjRkZDE0YTNhM2MxNzk4YWI0ZWEyYTg1YTU2ODBkYTU0ZTA2OTMzfGNyZWF0ZWRfYXQ9MjAxNy0wOC0yMlQxMzozNjoxNC4zOTE0ODg5MTQrMDAwMFx1MDAyNm1lcmNoYW50X2lkPTM0OHBrOWNnZjNiZ3l3MmJcdTAwMjZwdWJsaWNfa2V5PTJuMjQ3ZHY4OWJxOXZtcHIiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvMzQ4cGs5Y2dmM2JneXcyYi9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzLzM0OHBrOWNnZjNiZ3l3MmIvY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vY2xpZW50LWFuYWx5dGljcy5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tLzM0OHBrOWNnZjNiZ3l3MmIifSwidGhyZWVEU2VjdXJlRW5hYmxlZCI6dHJ1ZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiQWNtZSBXaWRnZXRzLCBMdGQuIChTYW5kYm94KSIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImFjbWV3aWRnZXRzbHRkc2FuZGJveCIsImN1cnJlbmN5SXNvQ29kZSI6IlVTRCJ9LCJtZXJjaGFudElkIjoiMzQ4cGs5Y2dmM2JneXcyYiIsInZlbm1vIjoib2ZmIn0=';

		let braintree = new Braintree(this.token);

		let data = await braintree.startPayment(token, opts);

		console.log('Got data: ', data);

		braintree.on('success', (res) => {
			let output = res.object.get('output');
			console.dir(output);
		});

		braintree.on('cancel', (res) => {
			console.log(`braintree cancellled`);
		});

		braintree.on('error', (res) => {
			let output = res.object.get('output');
			console.dir(output);
		});
	}

	paypalVault() {
		let opts: BrainTreeOptions = {
			amount: '0.01',
			collectDeviceData: false,
			requestThreeDSecureVerification: false,
			enableGooglePay: true,
			// Apple Pay payment request
			currencyCode: 'USD',
			billingAgreementDescription: 'TEST',
		};

		this.braintree
			.startPaypalVaultPayment(opts)
			.then(
				(account) => {
					console.log('Got account:', account);
				},
				(err) => {
					console.log(err);
				}
			)
			.catch((err) => {
				console.log(err);
			});
	}
	paypal() {
		let opts: BrainTreeOptions = {
			amount: '0.01',
			collectDeviceData: false,
			requestThreeDSecureVerification: true,
			enableGooglePay: true,
			// Apple Pay payment request
			currencyCode: 'USD',
			billingAgreementDescription: 'TEST',
		};

		this.braintree.startPaypalCheckoutPayment(opts).then(
			(account) => {
				console.log('Got account:', account);
			},
			(err) => {
				console.log(err);
			}
		);
	}

	localPayment() {
		let opts: BrainTreeOptions = {
			amount: '0.03',
			collectDeviceData: false,
			requestThreeDSecureVerification: true,
			enableGooglePay: true,
			// Apple Pay payment request
			currencyCode: 'EUR',
			localPaymentType: 'giropay',
		};

		this.braintree.startLocalPayment(opts).then(
			(res) => {
				console.log(res);
			},
			(err) => {
				console.log(err);
			}
		);
	}

	creditCard() {
		let opts: BrainTreeOptions = {
			amount: '0.01',
			collectDeviceData: false,
			requestThreeDSecureVerification: true,
			enableGooglePay: true,
			// Apple Pay payment request
			currencyCode: 'USD',
			cardNumber: '4111111111111111',
			expiringMonth: '12',
			expiringYear: '2020',
			cvv: '012',
		};

		this.braintree.startCreditCardPayment(opts).then(
			(res) => {
				console.log(res);
			},
			(err) => {
				console.log(err);
			}
		);
	}

	native() {
		let options: BrainTreeOptions = { amount: '1.5' };
		options.currencyCode = 'EUR';
		options.countryCode = 'DE';

		if (applicationModule.ios) {
			options.lineItems = [
				{
					label: 'asd',
					amount: '30',
				},
				{
					label: 'das',
					amount: '30',
				},
				{
					label: 'discount',
					amount: '-10',
				},
			];

			options.grandTotalLabel = 'Test Company';

			this.braintree.startApplePayPayment(options).then(
				(res) => {
					console.log('success', res);
				},
				(err) => {
					console.log('Apple Pay error: ', err);
				}
			);
		} else {
			options.currencyCode = 'USD';
			options.amount = '2.00';
			options.merchantIdentifier = 'TESTING';
			options.enableGooglePay = true;
			this.braintree.startGooglePayPayment(options).then(
				(res) => {
					console.log(res);
				},
				(err) => {
					console.log(err);
				}
			);
		}
	}

	getApplePayLineItemsSummary(): Array<any> {
		return [
			{
				label: 'Company Name',
				amount: 0.02,
			},
		];
	}

	getItemizedApplePayLineItems(): Array<any> {
		return [
			{
				label: 'Service',
				amount: 0.02,
			},
			{
				label: 'Delivery',
				amount: 0.03,
			},
			{
				label: 'Company Name',
				amount: 0.05,
			},
		];
	}
}
