import {  } from './common';
import { ad } from "@nativescript/core/utils"


const cats = {
    email : android.content.Intent.CATEGORY_APP_EMAIL 
}

export function open(scheme: string){
    if(cats[scheme]){
        scheme = cats[scheme];
    }
    let intent = new android.content.Intent(android.content.Intent.ACTION_MAIN);
    intent.addCategory(scheme);
    intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK)
    ad.getApplicationContext().startActivity(intent)
}

