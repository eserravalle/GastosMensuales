import { Injectable } from '@angular/core';

@Injectable()
export class RubroService {

    private rubros: Array<string>;

    constructor() {
        this.rubros = [
            'Bazar y Muebles',
            'Combustible, Peaje y Estacionamiento',
            'Comidas para llevar',
            'Educación',
            'Electrodomésticos y Electrónicos',
            'Eventos y Entretenimiento',
            'Impuestos',
            'Librería',
            'Mantenimiento Auto',
            'Mantenimiento Hogar',
            'Mercados',
            'Regalos',
            'Restaurantes y Bares',
            'Salud y Farmacia',
            'Servicios',
            'Transporte',
            'Turismo',
            'Vestimenta y Accesorios'
        ];
    }

    getAllRubros(): Array<string> {
        return this.rubros;
    }
}