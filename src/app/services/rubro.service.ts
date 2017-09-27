import { Injectable } from '@angular/core';

@Injectable()
export class RubroService {

    private rubros: Array<string>;

    constructor() {
        this.rubros = ['Bazar', 'Mercados', 'Salud'];
    }

    getAllRubros(): Array<string> {
        return this.rubros;
    }
}