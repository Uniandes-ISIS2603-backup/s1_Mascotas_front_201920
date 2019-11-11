import { Usuario } from "../usuario/usuario";

/**
 *
 * @author German Rozo
 */
export interface MascotaEncontrada {
    /**
     * Id de la mascota encontrada
     */
    id?: number;

    /**
     * Especie de la mascota encontrada
     */
    especie?: number;

    /**
     * Raza de la mascota encontrada
     */
    raza?: string;

    /**
     * Lugar donde se encontro la mascota
     */
    lugar?: string;

    /**
     * Descripcion de la mascota
     */
    descripcion?: string;

    /**
     * Fecha cuando se encontro la mascota
     */
    fechaEncontrada?: Date;

    /**
     * Usuario de la mascota
     */
    usuario?: Usuario;
}