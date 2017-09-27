import { Injectable } from '@angular/core';

@Injectable()
export class DateFormatService {

    constructor() {
    }

    getCurrentDateInYYYYMMDDFormat(): string {
        let today: Date = new Date();
        let dd: number = today.getDate();
        let strdd: string = dd.toString();
        let mm: number = today.getMonth() + 1;
        let strmm: string = mm.toString();
        let yyyy = today.getFullYear();
        let stryyyy = yyyy.toString();

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