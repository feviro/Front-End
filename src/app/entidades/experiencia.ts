export class Experiencia {
    id!: number;
    titulo: string;
    descripcion: string;
    periodoComienzo: string;
    periodoFinal: string;
    imagen: string;
    link: string;

    constructor(titulo: string, descripcion: string, periodoComienzo: string,
         periodoFinal: string, imagen: string, link: string){

            this.titulo = titulo;
            this.descripcion = descripcion;
            this.periodoComienzo = periodoComienzo;
            this.periodoFinal = periodoFinal;
            this.imagen = imagen;
            this.link = link;
    }

}
