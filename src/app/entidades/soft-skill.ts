export class SoftSkill {
    id?: number;
    nombre: string;
    progreso: number;

    constructor (nombre: string, progreso: number){
        this.nombre = nombre;
        this.progreso = progreso
    }
}
