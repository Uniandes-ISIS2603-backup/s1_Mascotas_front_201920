
import {MascotaAdopcion} from "./mascotaadopcion";
import { Usuario } from "../usuario/usuario";
export class Proceso {
    /**
    * The review's id
    */
    id: number;

    /**
     * The review's name
     */
    estado: string;

    /**
     * The review's source
     */
    comentario: string;

    /**
    * A brief summary of the review
    */
    calificacion: number;

    /**
    * The book of the review
    */
    mascota: MascotaAdopcion;

    usuario: Usuario;

   
}