import { Component, OnInit, PipeTransform  } from '@angular/core';
import { MascotaPerdida } from '../mascotaperdida';
import { MascotaPerdidaService } from '../mascotaperdida.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MascotaPerdidaDetail } from '../mascotaperdida-detail';
import {Pipe} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Especie } from '../mascotaperdida-create/mascotaperdida-create.component';
import { forEach } from '@angular/router/src/utils/collection';
import { Recompensa } from '../recompensa';
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
  especies: Especie[] = [
    { id: -1, nombre: 'Cualquiera' },
    { id: 0, nombre: 'Perro' },
    { id: 1, nombre: 'Gato' }
  ];
  /**
   * Arreglo de Mascotas perdidas detail
   */
  mascotasPerdidas: MascotaPerdidaDetail[];
   /**
   * Lista de mascotas filtradas
   */
  mascotasFiltradas: MascotaPerdidaDetail[];
  filtroForm: FormGroup;
  /**
   * Constructor de la lista de mascotas
   * @param mascotaperdidaService Servicio de mascotas perdidas
   * @param router La ruta
   * @param route La ruta activa
   */
  constructor(private mascotaperdidaService: MascotaPerdidaService, private router: Router, 
    private route: ActivatedRoute, private formBuilder: FormBuilder) {
      this.filtroForm = this.formBuilder.group({
        especie: [""],
        raza: [""],
        fecha: [""]
      });
     }
   /**
    * The method which initializes the component.
    * We need to create the author so it is never considered as undefined
    */
  ngOnInit() {
    this.getMascotaPerdidas();
  }
  filtrarMascotas(): void {
    this.mascotasFiltradas = this.mascotasPerdidas;
    this.filtrarEspecie();
    this.filtrarRaza();
    this.filtrarFecha();
  }
  onRecompensa( id: number)
  {
    console.log(id)
    this.router.navigate(["recompensa", id])
  }
  

  filtrarEspecie() {
    this.mascotasFiltradas = this.mascotasFiltradas.filter((x) => 
    {
      let val = this.filtroForm.controls.especie.value;
      let c = val == x.especie;
      return val !== "" && val != -1 ? c : true });
  }

  filtrarRaza() {
    this.mascotasFiltradas = this.mascotasFiltradas.filter((x) => 
    {
      let val = this.filtroForm.controls.raza.value.toLowerCase();
      let c = x.raza.toLowerCase().includes(val);
      return c;
    });
  }

  filtrarFecha() {
    this.mascotasFiltradas = this.mascotasFiltradas.filter((x) => 
    {
      let val = this.filtroForm.controls.fecha.value;
      let c = (new Date(val)).getTime() <= this.setDate(x.fechaPerdida).getTime() 
      return val !== "" ? c : true;
    });
  }

  refrescarFiltro() {
    this.filtroForm.reset();
    this.mascotasFiltradas = this.mascotasPerdidas;
  }
/**
 * Llama a las mascotas perdidas
 */
  getMascotaPerdidas():void
  {
    this.mascotaperdidaService.getMascotaPerdidas().subscribe(mascotaperdidas => {this.mascotasPerdidas =  mascotaperdidas; console.log('cargado')});
    this.mascotasPerdidas.forEach(m =>
      {
        if(m.encontrado==undefined){
          m.encontrado=false;
        }
      }
      )
  }

/**
 * Filtra las mascotas que siguen sin ser encontradas(encontrado=false)
 */
  filtrarMascotasPerdidas():MascotaPerdidaDetail[]{
    return this.mascotasPerdidas.filter(mascota =>!mascota.encontrado);
  }

  filtrarMascotasEncontradas():MascotaPerdidaDetail[]{
    return this.mascotasPerdidas.filter(mascota =>mascota.encontrado);
  }

  setEncontrado(mascota:MascotaPerdidaDetail,b:boolean):void{
    mascota.encontrado=b;
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
    console.log(id)
    this.router.navigate(["mascotasPerdidas", id])
  }
  tieneRecompensa (m: Recompensa): string
  {
    if (m== null)
      return "0";
    else
      return m.monto+"";
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