//German Rozo
export class Publicidad
{
  id: number;
  diasPorSemana: number;
  costo: number;
  mensaje:string;
  fechaFin?:string;
  fechaInicio:string;

  getCosto(): string {

    let str: string = String(this.costo);
    let aux: string = str.charAt(str.length-1);

    for (var i = str.length-2; i >= 0; i--) {

      if (i % 3 == 0 )
      {
        aux += "." + str.charAt(i);
      }
      else aux += str.charAt(i);
    }
    let res: string ="";
    for (var e = aux.length -1; e >=0; i--) {
      res+= aux.charAt(e);
    }
   return  "$"+res;
  }

}
