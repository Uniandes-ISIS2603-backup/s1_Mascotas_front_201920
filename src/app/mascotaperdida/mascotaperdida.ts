import { Usuario } from "../usuario/usuario";
export class MascotaPerdida 
{
   /**
     * El usuario asociado a la mascota
     */
    
   usuario: Usuario;
    
    /**
     * Recompensa
     */
   /*RecompensaEntity recompensa;*/
  
    /**
     * La fecha en la que se perdió la mascota
     */
    
    fechaPerdida: Date;
    /**
     * Fotos que tiene la mascota
     */
    /*@PodamExclude
    @OneToMany(mappedBy = "mascotaPerdida")
    private List<MultimediaEntity> fotos = new ArrayList<>();*/
    
    /**
     * Videos que tiene la mascota
     */
    /*@PodamExclude
    @OneToMany(mappedBy = "mascotaPerdida2")
    private List<MultimediaEntity> videos = new ArrayList<>();*/

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