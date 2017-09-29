import { Injectable } from '@angular/core';
import { DateFormatService } from './date-format.service';

@Injectable()
export class MesService {

    private meses: Array<string>;

    constructor(private dateFormatService: DateFormatService) {
        this.meses = dateFormatService.getLastTwelveMonthsInYYYYMMFormat();
    }

    obtenerListaDeMeses(): Array<string> {
        return this.meses;
    }
}