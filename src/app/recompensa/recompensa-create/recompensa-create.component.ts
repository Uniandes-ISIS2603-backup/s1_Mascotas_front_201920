import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Recompensa } from "../recompensa";
import { RecompensaService } from "../recompensa.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recompensa-create',
  templateUrl: './recompensa-create.component.html',
  styleUrls: ['./recompensa-create.component.css']
})
export class RecompensaCreateComponent{
  /**
   * Formato de la recompensa
   */
  recompensaForm: FormGroup;

  /**
   * Constructor de la recompensa
   * @param recompensaService  Servicio de recompensa
   * @param formBuilder 
   * @param toastr 
   */
  constructor(
    private recompensaService: RecompensaService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.recompensaForm = this.formBuilder.group({
      monto: ["", Validators.required],
      
    });
  }

  /**
   * Crea una recompensa 
   * @param newRecompensa Recompensa
   */
  createRecompensa(newRecompensa: Recompensa) {
   this.showSuccess();
    // Process checkout data here
    console.warn("La recompensa se ha enviado", newRecompensa);
    newRecompensa.pagado =false;
    this.recompensaService.createRecompensa(newRecompensa).subscribe(o => {
      this.showSuccess();
    });

   this.recompensaForm.reset();
   
  }

  /**
   * Muestra que se pudo crear
   */
  showSuccess() {
    this.toastr.success("Recompensa", "Creada exitosamente!", {"progressBar": true,timeOut:3000});
  }

}