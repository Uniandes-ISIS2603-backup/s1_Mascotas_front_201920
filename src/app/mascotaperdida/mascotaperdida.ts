export class Mascotaperdida 
{
   /**
     * El usuario asociado a la mascota
     */
    /*@PodamExclude
    @ManyToOne
    private UsuarioEntity usuario;*/
    
    /**
     * Recompensa
     */
   /* @PodamExclude
    @OneToOne
    private RecompensaEntity recompensa;*/

    /**
     * La fecha en la que se perdió la mascota
     */
   /* @Temporal(TemporalType.DATE)
    @PodamStrategyValue (DateStrategy.class)
    private Date fechaPerdida;*/
    
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
    
    
    
    constructor (raza: string, especie: number, descripcion: string, lugar: string)
    {
        this.raza = raza;
        this.descripcion = descripcion;
        this.lugar = lugar;
        this.especie = especie;
    }

}