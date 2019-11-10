import { Component, OnInit, PipeTransform } from '@angular/core';
import {MascotaEncontrada} from '../mascotaencontrada';
import {MascotaEncontradaService} from '../mascotaencontrada.service';
import {Pipe} from '@angular/core';
import { stringify } from 'querystring';
import { MascotaEncontradaDetail } from '../mascotaencontrada-detail';

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
  selector: 'app-mascotasencontradas-list',
  templateUrl: './mascotasencontradas-list.component.html',
  styleUrls: ['./mascotasencontradas-list.component.css'],
})
export class MascotasencontradasListComponent implements OnInit {

  /**
   * Lista de las mascotas encontradas
   */
  mascotasEncontradas: MascotaEncontradaDetail[];

  /**
   * Constructor del componente
   * @param mascotaEncontradaService Servicio para mascotas
   */
  constructor(private mascotaEncontradaService: MascotaEncontradaService) { }

  /**
   * Pide al servicio la lista de las mascotas encontradas
   */
  getMascotas(): void {
    this.mascotaEncontradaService
      .getMascotasEncontradas()
        .subscribe((mascotasEncontradas) => this.mascotasEncontradas = mascotasEncontradas);
  }

  /**
   * Pide la ruta de la imagen de la mascota para mostrar
   * @param m La mascota
   * @return string La ruta
   */
  getImageSrc(m: MascotaEncontradaDetail): string
  {
    let src = "../../../assets/images/mascota.png";
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
    return src;
  }

  /**
   * 
   * @param ob 
   */
  setDate(ob: Date): Date{
    return new Date(ob.toString().split('[UTC]')[0]);
  }

  /**
   * This will initialize the component by retrieving the list of mascotas from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.getMascotas();
  }

}
