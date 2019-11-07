export class MascotaAdopcion {
   
    especie: number;
    raza: string;
    descripcion: string;
    lugar: string;
    historia: string;
    id: number;

    contructor(especie: number, raza: string, descripcion: string, lugar: string, historia: string, id: number){
      this.descripcion=descripcion;
      this.especie=especie;
      this.historia= historia;
      this.id=id;
      this.lugar=lugar;
      this.raza= raza;
    }
 
}