export class MascotaAdopcion {
   
    especie: number;
    raza: string;
    descripcion: string;
    lugar: string;
    historia: string;
    id: number;
/**
 * 
 * @param especie la especie, es 0 o 1
 * @param raza la raza de la mascota
 * @param descripcion la descripcion de la mascota
 * @param lugar el lugar de la mascota
 * @param historia la historia de la mascota
 * @param id el id de la mascota
 */
    contructor(especie: number, raza: string, descripcion: string, lugar: string, historia: string, id: number){
      this.descripcion=descripcion;
      this.especie=especie;
      this.historia= historia;
      this.id=id;
      this.lugar=lugar;
      this.raza= raza;
    }
 
}