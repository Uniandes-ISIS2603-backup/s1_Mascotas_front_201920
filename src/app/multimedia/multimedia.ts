import { MascotaAdopcion } from "../mascotaadopcion/mascotaadopcion";
import { MascotaEncontrada } from "../mascotasencontradas/mascotaencontrada";
import { MascotaPerdida } from "../mascotaperdida/mascotaperdida";
import { Publicidad } from "../publicidad/publicidad";

export class Multimedia {
    /**
    * El id de la multimedia
    */
    id?: number;

    /**
     * La url de la multimedia
     */
    url?: string;

    /**
     * El nombre de la multimedia
     */
    nombre?: string;

    /**
    * Tipo de la multimedia
    */
    tipo?: string;

    /**
    * La mascota adopcion de la multimedia
    */
    mascotaAdopcion?: MascotaAdopcion;

    /**
    * La mascota encontrada de la multimedia
    */
   mascotaEncontrada?: MascotaEncontrada;

   /**
    * La mascota perdida de la multimedia
    */
   mascotaPerdida?: MascotaPerdida;

   /**
    * La publicidad de la multimedia
    */
   publicidad?: Publicidad;
}