import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MascotaEncontradaService } from '../mascotaencontrada.service';
import { ToastrService } from 'ngx-toastr';
import { MascotaEncontradaDetail } from '../mascotaencontrada-detail';
import { Router } from '@angular/router';
import { MascotaEncontrada } from '../mascotaencontrada';
import { MascotasencontradasModule } from '../mascotasencontradas.module';

export interface Especie {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-mascota-encontrada-create',
  templateUrl: './mascota-encontrada-create.component.html',
  styleUrls: ['./mascota-encontrada-create.component.css']
})
export class MascotaEncontradaCreateComponent implements OnInit {

  especies: Especie[] = [
    {id: 0, nombre: 'Perro'},
    {id: 1, nombre: 'Gato'}
  ]
  current: Date = new Date();
  maxDate = {
    year: this.current.getFullYear(),
    month: this.current.getMonth() + 1,
    day: this.current.getDate()
  };

  mascotaEncontradaForm: FormGroup;

  /**
   * Constructor for the component
   * @param mascotaEncontradaService El proveedor para el servicio de mascota
   * @param formBuilder 
   * @param toastr 
   * @param router 
   */
  constructor(
    private mascotaEncontradaService: MascotaEncontradaService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private router: Router
    ) { 
      this.mascotaEncontradaForm = this.formBuilder.group({
        especie: ["", Validators.required],
        raza: ["", Validators.required],
        lugar: ["", Validators.required],
        descripcion: ["", Validators.required],
        fecha: ["", Validators.required],
        fotos: [""],
        videos: [""]
    });
  }

  createMascotaEncontrada(): MascotaEncontrada{

    let fechaEncontrada: Date = this.mascotaEncontradaForm.controls.fecha.value;
    let especie: number = this.mascotaEncontradaForm.controls.especie.value;
    let raza: string = this.mascotaEncontradaForm.controls.raza.value;
    let lugar: string = this.mascotaEncontradaForm.controls.lugar.value;
    let desc: string = this.mascotaEncontradaForm.controls.descripcion.value;

    let mascota: MascotaEncontradaDetail = {
      "especie": especie,
      "raza": raza,
      "lugar": lugar,
      "descripcion": desc,
      "fechaEncontrada": fechaEncontrada,
    }

    console.log(fechaEncontrada.toDateString());
    this.showSuccess();
     // Process checkout data here
     console.warn("La mascota encontrada se ha enviado", mascota);
 
     this.mascotaEncontradaService.createMascotaEncontrada(mascota).subscribe(o => {
       this.showSuccess();
     })
 
    this.mascotaEncontradaForm.reset();
    this.router.navigate(['/mascotasEncontradas/list']);
    return mascota;
    
   }

   /**
    * Cancels the creation of the new Mascota
    * Redirects to the Mascotas' list page
    */
   cancelCreation(): void {
    this.toastr.warning('La mascota no se creó', 'Registro de Mascota');
    this.router.navigate(['/mascotasEncontradas/list']);
}

   showSuccess() {
    this.toastr.success("Mascota Encontrada", "Has encontrado una nueva mascota!", {"progressBar": true,timeOut:3000});
  }

  ngOnInit() {
  }

}
