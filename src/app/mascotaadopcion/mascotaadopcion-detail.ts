import {MascotaAdopcion} from './mascotaadopcion';
import { Proceso } from './procesos';
import { Multimedia } from '../multimedia/multimedia';
/**
 * Clase que representa los procesos de adopcion
 */
export class MascotaAdopcionDetail extends MascotaAdopcion{
/**
 * Lista de procesos de la mascota
 */
  procesos: Proceso[];

  /**
   * Lista de multimedia
   */
  multimedia?: Multimedia[];
}
  

