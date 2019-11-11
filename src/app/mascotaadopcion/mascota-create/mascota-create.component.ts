import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {MascotaAdopcionService} from '../mascotaadopcion.service';
import { MascotaAdopcion } from "../mascotaadopcion";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mascota-create',
  templateUrl: './mascota-create.component.html',
  styleUrls: ['./mascota-create.component.css']
})
/**
 * Componente para crear una mascota adopcion
 */
export class MascotaCreateComponent implements OnInit {
/**
 * Formulario
 */
mascotaForm: FormGroup;
/**
 * Lista de mascotas adopcion
 */
mascotas: MascotaAdopcion[];
/**
 * 
 * @param mascotaService servicio de las marcotas adopcion
 * @param formBuilder formulario
 * @param toastr toardter 
 */
 constructor(
    private mascotaService: MascotaAdopcionService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.mascotaForm = this.formBuilder.group({
      especie: ["", Validators.required, ],
      raza: ["", Validators.required],
      descripcion: ["", Validators.required],
      lugar: ["", Validators.required],
      historia: ["", Validators.required],
      
    });
  }
  /**
   * Crea una mascota adopcion
   * @param newMascota mascota adopcion a crear
   */
  createMascota(newMascota: MascotaAdopcion) {

    console.warn("mascota creada", newMascota);

    this.mascotaService.createMascota(newMascota).subscribe(mascota => {
      this.mascotas.push(mascota);
      this.showSuccess();
    });
    this.mascotaForm.reset();
  }
/**
 * Metodo para suscribirse al servicio
 */
  ngOnInit() {
    this.mascotaService.getMascotas().subscribe(mascotas => (this.mascotas = mascotas));
  }
/**
 * Metodo para la contruccion de notificaciones al crear una marcota
 */
  showSuccess() {
     for (let i = 0; i < this.mascotas.length; i++){
      console.log(this.mascotas[i].id+' '+this.mascotas[i].raza+' '+this.mascotas[i].historia);
    }
    this.toastr.success("Mascota", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
}

