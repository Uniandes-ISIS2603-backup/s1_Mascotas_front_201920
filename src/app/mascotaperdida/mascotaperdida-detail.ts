import { MascotaPerdida } from "./mascotaperdida";
import { Multimedia } from "../multimedia/multimedia";

export interface MascotaPerdidaDetail extends MascotaPerdida {
    
    multimedia?: Multimedia[];
}