import { Observable } from '@nativescript/core';
import { openUrl } from "@nativescript/core/utils"

export function open(scheme: string): boolean{
    return openUrl(scheme);
}
