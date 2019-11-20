import { Component, OnInit } from '@angular/core';
import {MascotaAdopcionService} from '../mascotaadopcion.service';
import { MascotaAdopcionDetail } from '../mascotaadopcion-detail';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Especie } from '../../mascotasencontradas/mascota-encontrada-create/mascota-encontrada-create.component';

@Component({
  selector: 'app-mascotaadopcion-list',
  templateUrl: './mascotaadopcion-list.component.html',
  styleUrls: ['./mascotaadopcion-list.component.css'],
})
export class MascotaadopcionListComponent implements OnInit {

  especies: Especie[] = [
    { id: -1, nombre: 'Cualquiera' },
    { id: 0, nombre: 'Perro' },
    { id: 1, nombre: 'Gato' }
  ];

  filtroForm: FormGroup;

  /**
   * Lista de las mascotas adopcion
   */
  mascotasAdopcion: MascotaAdopcionDetail[];
  
  /**
   * Lista de mascotas filtradas
   */
  mascotasFiltradas: MascotaAdopcionDetail[];

  /**
   * Constructor
   * @param mascotaAdopcionService 
   * @param formBuilder 
   */
  constructor(private mascotaAdopcionService: MascotaAdopcionService,
    private formBuilder: FormBuilder) { 
      this.filtroForm = this.formBuilder.group({
        especie: [""],
        raza: [""]
      });
    }

  /**
   * Pide al servicio la lista de las mascotas adopcion
   */
  getMascotas(): void {
    this.mascotaAdopcionService
      .getMascotas()
        .subscribe((mascotas) =>{ this.mascotasAdopcion = mascotas;
          this.mascotasFiltradas = this.mascotasAdopcion;
        });
  }

  filtrarMascotas(): void {
    this.mascotasFiltradas = this.mascotasAdopcion;
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

  refrescarFiltro() {
    this.filtroForm.reset();
    this.mascotasFiltradas = this.mascotasAdopcion;
  }

  /**
   * Pide la ruta de la imagen de la mascota para mostrar
   * @param m La mascota
   * @return string La ruta
   */
  getImageSrc(m: MascotaAdopcionDetail): string
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