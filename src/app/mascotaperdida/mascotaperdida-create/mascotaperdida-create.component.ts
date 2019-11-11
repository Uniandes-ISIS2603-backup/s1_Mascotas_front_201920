import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MascotaPerdida } from "../mascotaperdida";
import { MascotaPerdidaService } from "../mascotaperdida.service";
import { ToastrService } from 'ngx-toastr';
import { MascotaPerdidaDetail } from "../mascotaperdida-detail";
import { Router } from '@angular/router';

/**
 * Interfaz de especie
 */
export interface Especie {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-mascotaperdida-create',
  templateUrl: './mascotaperdida-create.component.html',
  styleUrls: ['./mascotaperdida-create.component.css']
})
export class MascotaPerdidaCreateComponent {
  /**
   * Especies: perro y gato
   */
  especies: Especie[] = [
    { id: 0, nombre: 'Perro' },
    { id: 1, nombre: 'Gato' }
  ]
  /**
   * Fecha
   */
  current: Date = new Date();
  /**
   * Formato de fecha
   */
  maxDate = {
    year: this.current.getFullYear(),
    month: this.current.getMonth() + 1,
    day: this.current.getDate()
  };

  /**
   * Especificaciones de la mascota
   */
  mascotaPerdidaForm: FormGroup;

  /**
   * Constructor de mascota perdida create
   * @param mascotaPerdidaService Servicio de mascota perdida
   * @param formBuilder 
   * @param toastr El toastr para mostrar los mensajes al usuario
   * @param router La ruta
   */
  constructor(
    private mascotaPerdidaService: MascotaPerdidaService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.mascotaPerdidaForm = this.formBuilder.group({
      raza: ["", Validators.required],
      especie: ["", Validators.required],
      descripcion: ["", Validators.required],
      lugar: ["", Validators.required],
      fecha: ["", Validators.required],
      fotos: [""],
      videos: [""]
    });
  }
  /**
   * Crea una mascota perdida 
   */
  createMascotaPerdida(): MascotaPerdida {

    let fechaPerdida: Date = this.mascotaPerdidaForm.controls.fecha.value;
    let especie: number = this.mascotaPerdidaForm.controls.especie.value;
    let raza: string = this.mascotaPerdidaForm.controls.raza.value;
    let lugar: string = this.mascotaPerdidaForm.controls.lugar.value;
    let desc: string = this.mascotaPerdidaForm.controls.descripcion.value;

    let mascota: MascotaPerdidaDetail = {
      "especie": especie,
      "raza": raza,
      "lugar": lugar,
      "descripcion": desc,
      "fechaPerdida": fechaPerdida,
    }

    console.log(fechaPerdida.toDateString());
    this.showSuccess();
    // Process checkout data here
    console.warn("La mascota perdida se ha enviado", mascota);

    this.mascotaPerdidaService.createMascotaPerdida(mascota).subscribe(o => {
      this.showSuccess();
    })

    this.mascotaPerdidaForm.reset();
    this.router.navigate(['/mascotasPerdidas/list']);
    return mascota;

  }

  /**
   * Cancels the creation of the new Mascota
   * Redirects to the Mascotas' list page
   */
  cancelCreation(): void {
    this.toastr.warning('La mascota no se creó', 'Registro de Mascota');
    this.router.navigate(['/mascotasPerdidas/list']);
  }
  /**
   * Mensaje de exito de crear una nueva mascota
   */
  showSuccess() {
    this.toastr.success("Mascota Perdida", "Has perdido una mascota", { "progressBar": true, timeOut: 3000 });
  }

  /**
    * This function will initialize the component
    */
  ngOnInit() {
  }

}