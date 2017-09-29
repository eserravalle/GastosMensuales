import { Injectable } from '@angular/core';

@Injectable()
export class DateFormatService {

    constructor() {
    }

    getLastTwelveMonthsInYYYYMMFormat(): Array<string> {
        let resultado = new Array<string>();
        let today: Date = new Date();
        let mm: number = today.getMonth() + 1;
        let strmm: string = mm.toString();
        let yyyy: number = today.getFullYear();
        let stryyyy: string = yyyy.toString();

        if (mm < 10) {
            strmm = '0' + strmm;
        }

        for (var index = 0; index < 12; index++) {
            resultado.push(stryyyy + '-' + strmm);
            mm--;
            if (mm < 1) {
                mm = 12;
                yyyy--;
            }
            strmm = mm.toString();
            if (mm < 10) {
                strmm = '0' + strmm;
            }
            stryyyy = yyyy.toString()
        }

        return resultado;
    }

    getCurrentDateInYYYYMMDDFormat(): string {
        let today: Date = new Date();
        let dd: number = today.getDate();
        let strdd: string = dd.toString();
        let mm: number = today.getMonth() + 1;
        let strmm: string = mm.toString();
        let yyyy: number = today.getFullYear();
        let stryyyy: string = yyyy.toString();

        if (dd < 10) {
            strdd = '0' + strdd;
        }

        if (mm < 10) {
            strmm = '0' + strmm;
        }

        let resultado = stryyyy + '-' + strmm + '-' + strdd;

        return resultado;
    }
}