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

  recompensaForm: FormGroup;

  constructor(
    private recompensaService: RecompensaService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.recompensaForm = this.formBuilder.group({
      monto: ["", Validators.required],
      
    });
  }

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

  showSuccess() {
    this.toastr.success("Recompensa", "Creada exitosamente!", {"progressBar": true,timeOut:3000});
  }

}