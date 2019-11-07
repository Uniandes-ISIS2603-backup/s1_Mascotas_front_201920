import { Usuario } from "../usuario/usuario";

export interface MascotaEncontrada {
    /**
     * Id de la mascota encontrada
     */
    id?: number;

    /**
     * Especie de la mascota encontrada
     */
    especie?: string;

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
    fecha?: Date;

    /**
     * Usuario de la mascota
     */
    usuario?: Usuario;

    /**
     * Ruta de la foto de la mascota
     */
    foto?: string;
}