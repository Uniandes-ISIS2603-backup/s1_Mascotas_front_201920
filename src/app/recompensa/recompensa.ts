import {MascotaPerdida} from '../mascotaperdida/mascotaperdida';
export class Recompensa
{
    id: number;
    monto: number;
    pagado?: boolean;
    mascotaPerdida?: MascotaPerdida;
}
