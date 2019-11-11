
import {MascotaAdopcion} from "./mascotaadopcion";
import { Usuario } from "../usuario/usuario";
export class Proceso {
    /**
    * id del proceso
    */
    id: number;

    /**
     * estado del proceso
     */
    estado: string;

    /**
     * comentario del proceso
     */
    comentario: string;

    /**
    * calificacion del proceso
    */
    calificacion: number;

    /**
    * Mascota adopcion asociada al proceso
    */
    mascota: MascotaAdopcion;
    /**
     * Usuaio asociado al proceso
     */
    usuario: Usuario;

   
}