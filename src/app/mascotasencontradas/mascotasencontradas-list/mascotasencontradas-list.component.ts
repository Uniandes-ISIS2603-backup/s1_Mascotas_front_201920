import { Component, OnInit, PipeTransform } from '@angular/core';
import {MascotaEncontrada} from '../mascotaencontrada';
import {MascotaEncontradaService} from '../mascotaencontrada.service';
import {Pipe} from '@angular/core';
import { stringify } from 'querystring';
import { MascotaEncontradaDetail } from '../mascotaencontrada-detail';
import { Especie } from '../mascota-encontrada-create/mascota-encontrada-create.component';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  especies: Especie[] = [
    { id: -1, nombre: 'Cualquiera' },
    { id: 0, nombre: 'Perro' },
    { id: 1, nombre: 'Gato' }
  ];

  current: Date = new Date();
  maxDate = {
    year: this.current.getFullYear(),
    month: this.current.getMonth() + 1,
    day: this.current.getDate()
  };

  filtroForm: FormGroup;

  /**
   * Lista de las mascotas encontradas
   */
  mascotasEncontradas: MascotaEncontradaDetail[];
  
  /**
   * Lista de mascotas filtradas
   */
  mascotasFiltradas: MascotaEncontradaDetail[];

  /**
   * Constructor
   * @param mascotaEncontradaService 
   * @param formBuilder 
   */
  constructor(private mascotaEncontradaService: MascotaEncontradaService,
    private formBuilder: FormBuilder) { 
      this.filtroForm = this.formBuilder.group({
        especie: [""],
        raza: [""],
        fecha: [""]
      });
    }

  /**
   * Pide al servicio la lista de las mascotas encontradas
   */
  getMascotas(): void {
    this.mascotaEncontradaService
      .getMascotasEncontradas()
        .subscribe((mascotasEncontradas) =>{ this.mascotasEncontradas = mascotasEncontradas;
          this.mascotasFiltradas = this.mascotasEncontradas;
        });
  }

  filtrarMascotas(): void {
    this.mascotasFiltradas = this.mascotasEncontradas;
    this.filtrarEspecie();
    this.filtrarRaza();
    this.filtrarFecha();
  }

  filtrarEspecie() {
    this.mascotasFiltradas = this.mascotasFiltradas.filter((x) => 
    {
      let val = this.filtroForm.controls.especie.value;
      let c = val == x.especie;
      return val != "" && val != -1 ? c : true });
  }

  filtrarRaza() {
    this.mascotasFiltradas = this.mascotasFiltradas.filter((x) => {return x.raza.toLowerCase().includes(this.filtroForm.controls.raza.value.toLowerCase())});
  }

  filtrarFecha() {
    this.mascotasFiltradas = this.mascotasFiltradas.filter((x) => {return (new Date(this.filtroForm.controls.fecha.value)).getTime() <= this.setDate(x.fechaEncontrada).getTime()});
  }

  refrescarFiltro() {
    this.filtroForm.reset();
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
