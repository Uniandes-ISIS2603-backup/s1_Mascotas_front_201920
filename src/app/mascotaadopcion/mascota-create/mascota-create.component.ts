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
export class MascotaCreateComponent implements OnInit {

mascotaForm: FormGroup;
mascotas: MascotaAdopcion[];

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
  
  createMascota(newMascota: MascotaAdopcion) {

    console.warn("mascota creada", newMascota);

    this.mascotaService.createMascota(newMascota).subscribe(mascota => {
      this.mascotas.push(mascota);
      this.showSuccess();
    });
    this.mascotaForm.reset();
  }

  ngOnInit() {
    this.mascotaService.getMascotas().subscribe(mascotas => (this.mascotas = mascotas));
  }

  showSuccess() {
     for (let i = 0; i < this.mascotas.length; i++){
      console.log(this.mascotas[i].id+' '+this.mascotas[i].raza+' '+this.mascotas[i].historia);
    }
    this.toastr.success("Mascota", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
}

