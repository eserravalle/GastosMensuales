import { Injectable } from '@angular/core';

@Injectable()
export class RubroService {

    private rubros: Array<string>;

    constructor() {
        this.rubros = [
            'Bazar',
            'Combustible, Peaje y Estacionamiento',
            'Comidas para llevar',
            'Educación',
            'Electrodomésticos y Electrónicos',
            'Entretenimiento',
            'Eventos',
            'Farmacia',
            'Impuestos',
            'Librería',
            'Mantenimiento Auto',
            'Mantenimiento Hogar',
            'Mercados', 
            'Perfumería',
            'Regalos',
            'Restaurantes y Bares',
            'Salud',
            'Servicios',
            'Telecomunicaciones',
            'Transporte',
            'Turismo',
            'Vestimenta y Accesorios'
        ];
    }

    getAllRubros(): Array<string> {
        return this.rubros;
    }
}