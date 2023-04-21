export class HardSkill {
    id!: number;
    nombre: string;
    progreso: number;
    color: string;
    logo: string;


    constructor( nombre: string, progreso: number, color: string, logo: string){
        this.nombre = nombre;
        this.progreso = progreso;
        this.color = color;
        this.logo = logo;
    }
}
