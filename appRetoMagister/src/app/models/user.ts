export class User {
    constructor(
        public rama: string,
        public provincia: string,
        public exalumno: string,
        public modalidad: string,
        public horario: string,
        public tarifa: string,

        // POSIBLE ARRAY DATOS PERSONALES
        public nombre: string,
        public DNI: string,
        public movil: string,
        public email: string,

        // POSIBLE ARRAY DE DIRECCION
        public comunidadExamen: string,
        public direccion: string,
        public localidad: string,
        //public provincia: string,
        public codidoPostal: string,
        
        public formaPago: string,
        public recomendado: string
        
    ){}
}