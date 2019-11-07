import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MascotaPerdida } from "../mascotaperdida";
import { MascotaPerdidaService } from "../mascotaperdida.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mascotaperdida-create',
  templateUrl: './mascotaperdida-create.component.html',
  styleUrls: ['./mascotaperdida-create.component.css']
})
export class MascotaPerdidaCreateComponent{

  mascotaperdidaForm: FormGroup;

  constructor(
    private mascotaperdidaService: MascotaPerdidaService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.mascotaperdidaForm = this.formBuilder.group({
      raza: ["", Validators.required],
      especie: ["", Validators.required],
      descripcion: ["", Validators.required],
      lugar: ["", Validators.required]
    });
  }

  createMascotaPerdida(newMascotaPerdida: MascotaPerdida) {
   this.showSuccess();
    // Process checkout data here
    console.warn("La mascotaperdida se ha enviado", newMascotaPerdida);

    this.mascotaperdidaService.createMascotaPerdida(newMascotaPerdida).subscribe(o => {
      this.showSuccess();
    });

   this.mascotaperdidaForm.reset();
   
  }

  showSuccess() {
    this.toastr.success("MascotaPerdida", "Creada exitosamente!", {"progressBar": true,timeOut:3000});
  }

}