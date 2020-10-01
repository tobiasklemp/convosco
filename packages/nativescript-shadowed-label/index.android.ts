import { TextShadow } from './index';
import { ShadowedLabel as Common, textShadowProperty } from './common';
import { layout } from '@nativescript/core/utils/utils';

export class ShadowedLabel extends Common {
    [textShadowProperty.setNative](value: TextShadow) {
        this.nativeViewProtected.setShadowLayer(
            layout.toDevicePixels(value.blurRadius),
            layout.toDevicePixels(value.offsetX),
            layout.toDevicePixels(value.offsetY),
            value.color.android
        );
    }
}