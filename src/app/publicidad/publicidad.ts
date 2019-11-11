export class Publicidad 
{
  id: number;
  diasPorSemana: number;
  costo: number;
  mensaje:string;
  fechaFin:string;
  fechaInicio:string;
  multimedia:string

  getCosto(): string {

    console.log(this.costo+" costo");

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
    for (var i = aux.length -1; i >=0; i--) {
      res+= aux.charAt(i);
    }
   return  "$"+res;
  }

}
