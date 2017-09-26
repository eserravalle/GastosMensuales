export class Gasto {
    
    constructor(
        public fecha: Date,
        public rubro: string,
        public monto: number,
        public notas: string
    ) {}
}
