import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Publicidad } from "../publicidad";
import { PublicidadService } from "../publicidad.service";
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {PublicidadDetail} from "../publicidad-detail";
import {Multimedia} from "../../multimedia/multimedia";

//German Rozo
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
      fechaFin: ["", Validators.required],
      imagenes: ["", Validators.required]
    });
  }

  createPublicidad(newPublicidad: PublicidadDetail)
  {
      let multimedia: Multimedia = new Multimedia();
      multimedia.url = newPublicidad.imagenes;
      multimedia.nombre = '-';
      multimedia.tipo = 'imagen';
      newPublicidad.multimedia = [multimedia];
      console.log(newPublicidad.multimedia);
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
