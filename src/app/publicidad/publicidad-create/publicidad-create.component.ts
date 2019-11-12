import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Publicidad } from "../publicidad";
import { PublicidadService } from "../publicidad.service";
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-publicidad-create',
  templateUrl: './publicidad-create.component.html',
  styleUrls: ['./publicidad-create.component.css']
})
export class PublicidadCreateComponent{

  publicidadForm: FormGroup;

  constructor(
    private publicidadService: PublicidadService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.publicidadForm = this.formBuilder.group({
      diasPorSemana: ["", [Validators.required, Validators.minLength(1)]],
      costo: ["", Validators.required],
      mensaje: ["", Validators.required],
      fechaInicio: ["", Validators.required],
      fechaFin: ["", Validators.required]
    });
  }

  createPublicidad(newPublicidad: Publicidad) {
   this.showSuccess();
   newPublicidad.fechaInicio= newPublicidad.fechaInicio+"T05:00:00Z[UTC]";
   newPublicidad.fechaFin= newPublicidad.fechaFin+"T05:00:00Z[UTC]";
    // Process checkout data here
    console.warn("La publicidad se ha enviado", newPublicidad);

    this.publicidadService.createPublicidad(newPublicidad).subscribe(o => {
      this.showSuccess();
    });

   this.publicidadForm.reset();
   
  }

  showSuccess() {
    this.toastr.success("Publicidad", "Creada exitosamente!", {"progressBar": true,timeOut:3000});
  }

}