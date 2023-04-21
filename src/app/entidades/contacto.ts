export class Contacto {
    id!: number;
    nombre: string;
    correo: string;
    mensaje: string;

    constructor(nombre: string, correo: string, mensaje: string){

        this.nombre = nombre;
        this.correo = correo;
        this.mensaje = mensaje;

    }
}
