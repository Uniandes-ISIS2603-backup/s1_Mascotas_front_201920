import { Usuario } from "../usuario/usuario";
import { Recompensa } from "../recompensa/recompensa";
export class MascotaPerdida {
  /**
    * El usuario asociado a la mascota
    */
  usuario?: Usuario;

  /**
   * Recompensa
   */
  recompensa?: Recompensa;

  /**
   * La fecha en la que se perdió la mascota
   */

  fechaPerdida: Date;

  /**
   * Raza de la mascota perdida
   */
  raza: string;

  /**
   * La especie de la mascota perdida
   */
  especie: number;

  /**
   * La descripción de la mascota perdida
   */
  descripcion: string;

  /**
   * El lugar donde se perdió la mascota
   */
  lugar: string;



}