import { Component, OnInit, PipeTransform  } from '@angular/core';
import { MascotaPerdida } from '../mascotaperdida';
import { MascotaPerdidaService } from '../mascotaperdida.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MascotaPerdidaDetail } from '../mascotaperdida-detail';
import {Pipe} from '@angular/core';
/**
 * Especie
 */
@Pipe({name: 'especie'})
export class EspeciePipe implements PipeTransform{
  transform(idEspecie : number) {
    let especie: string;
    switch(idEspecie)
    {
      case 0: {
        especie = 'Perro';
        break;
      }
      case 1: {
        especie = 'Gato';
        break;
      }
      default: {
        especie = 'Animal Mistico';
        break;
      }
    }
    return especie;
  }
}

@Component({
  selector: 'app-mascotaperdida-list',
  templateUrl: './mascotaperdida-list.component.html',
  styleUrls: ['./mascotaperdida-list.component.css']
})
export class MascotaPerdidaListComponent implements OnInit {
  /**
   * Arreglo de Mascotas perdidas detail
   */
  mascotasPerdidas: MascotaPerdidaDetail[];
  /**
   * Constructor de la lista de mascotas
   * @param mascotaperdidaService Servicio de mascotas perdidas
   * @param router La ruta
   * @param route La ruta activa
   */
  constructor(private mascotaperdidaService: MascotaPerdidaService, private router: Router, private route: ActivatedRoute) { }
   /**
    * The method which initializes the component.
    * We need to create the author so it is never considered as undefined
    */
  ngOnInit() {
    this.getMascotaPerdidas();
  }
/**
 * Llama a las mascotas perdidas
 */
  getMascotaPerdidas():void
  {
    this.mascotaperdidaService.getMascotaPerdidas().subscribe(mascotaperdidas => {this.mascotasPerdidas =  mascotaperdidas; console.log('cargado')});
  }
  /**
   * Modifica la fecha
   * @param ob Fecha
   */
  setDate(ob: Date): Date{
    return new Date(ob.toString().split('[UTC]')[0]);
  }
  /**
   * Va a mascotas perdidas create
   */
  onCreate() {
    this.router.navigate(["mascotasPerdidas", "create"])
  }
  /**
   * Va al detail de la mascota seleccionada
   * @param id de la mascota seleccionada
   */
  onInfo( id: number)
  {
    console.log(id);
    this.router.navigate(["mascotasPerdidas", id])
  }
   /**
   * Da la imagen principal de la mascota perdida y si no hay 
   * pone la de default
   * @param m MascotaPerdidaDetail
   */
  getImageSrc(m: MascotaPerdidaDetail): string
  {
    //let src = "../../../assets/images/mascota.png";
    let src = "../../../assets/images/mascotaPerdida.png";
    if(m != undefined && m.multimedia != undefined)
    {
      for(let mul of m.multimedia)
      {
        if(mul.tipo == 'foto'){
          src = mul.url;
          break;
        }
      }
    }
    console.log(src);
    return src;
  }


}