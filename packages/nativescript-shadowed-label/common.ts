import { ShadowedLabel as ShadowedLabelDefinition, TextShadow } from './index';
import { Label } from '@nativescript/core';
import { CssProperty, Style } from '@nativescript/core/ui/';
import { Color } from '@nativescript/core/color/';
// import { Length } from 'tns-core-modules/ui/styling/style-properties';
import { isIOS } from '@nativescript/core/platform';
import { layout } from '@nativescript/core/utils/utils';
import { dip } from '@nativescript/core/ui/core/view';

export class ShadowedLabel extends Label implements ShadowedLabelDefinition {
  get textShadow() {
    return this.style.textShadow;
  }

  set textShadow(value: any) {
    this.style.textShadow = value;
  }
}

export const textShadowProperty = new CssProperty<Style, string | TextShadow>({
  name: 'textShadow',
  cssName: 'text-shadow',
  affectsLayout: isIOS,
  valueConverter: value => {
    const params = value.split(' ');
    return {
      offsetX: parseDIPs(params[0]),
      offsetY: parseDIPs(params[1]),
      blurRadius: parseDIPs(params[2]),
      color: new Color(params.slice(3).join(''))
    };
  }
});

// Augmenting Style definition so it includes our textShadow property
declare module '@nativescript/core/ui/styling/style' {
  interface Style {
    textShadow: string | TextShadow;
  }
}
textShadowProperty.register(Style);

function parseDIPs(value: string): dip {
  if (value.indexOf('px') !== -1) {
    return layout.toDeviceIndependentPixels(parseFloat(value.replace('px', '').trim()));
  } else {
    return parseFloat(value.replace('dip', '').trim());
  }
}