import {MascotaPerdida} from '../mascotaperdida/mascotaperdida';
export class Recompensa
{
    /**
     * Id de la recompensa
     */
    id: number;
    /**
     * Monto de la recompensa
     */
    monto: number;
    /**
     * ¿Pagado?
     */
    pagado?: boolean;
    /**
     * Mascota pedida que tiene la recompensa
     */
    mascotaPerdida?: MascotaPerdida;
}
