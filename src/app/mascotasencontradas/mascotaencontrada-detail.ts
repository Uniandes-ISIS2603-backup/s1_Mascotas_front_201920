import { MascotaEncontrada } from "./mascotaencontrada";
import { Multimedia } from "../multimedia/multimedia";

export interface MascotaEncontradaDetail extends MascotaEncontrada {
    
    multimedia?: Multimedia[];
}