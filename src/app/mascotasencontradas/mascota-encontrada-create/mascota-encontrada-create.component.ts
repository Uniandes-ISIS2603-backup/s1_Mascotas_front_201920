import { Inject, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MascotaEncontradaService } from '../mascotaencontrada.service';
import { ToastrService } from 'ngx-toastr';
import { MascotaEncontradaDetail } from '../mascotaencontrada-detail';
import { Router } from '@angular/router';
import { MascotaEncontrada } from '../mascotaencontrada';
import { MascotasencontradasModule } from '../mascotasencontradas.module';
import { Multimedia } from '../../multimedia/multimedia';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UploadFotoComponent } from '../../multimedia/upload-foto/upload-foto.component';

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

  tipos: string[] = [
    'foto',
    'video'
  ];

  especies: Especie[] = [
    { id: 0, nombre: 'Perro' },
    { id: 1, nombre: 'Gato' }
  ];
  current: Date = new Date();
  maxDate = {
    year: this.current.getFullYear(),
    month: this.current.getMonth() + 1,
    day: this.current.getDate()
  };

  mascotaEncontradaForm: FormGroup;

  multimedia: Multimedia[] = [];

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
    private router: Router,
    private uploadDialog: MatDialog
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

  createMascotaEncontrada(): MascotaEncontrada {

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
      "multimedia": this.multimedia
    }

    console.log(fechaEncontrada.toDateString());
    this.showSuccess();
    // Process checkout data here
    console.warn("La mascota encontrada se ha enviado", mascota);
    let result: MascotaEncontradaDetail;
    this.mascotaEncontradaService.createMascotaEncontrada(mascota).subscribe(o => {
      this.showSuccess();
      result = o;
      if(result != undefined)
      {
        for(let m of this.multimedia)
        {
          this.mascotaEncontradaService.createMultimedia(result.id, m).subscribe();
        }
      }
      this.mascotaEncontradaForm.reset();
      this.router.navigate(['/mascotasEncontradas/list']).then(() => {
        window.location.reload();
      });
    });

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
    this.toastr.success("Mascota Encontrada", "Has encontrado una nueva mascota!", { "progressBar": true, timeOut: 3000 });
  }

  showFotoUpload() {
    /**let mult: Multimedia = {"tipo": "foto"};
    const dialogRef = this.uploadDialog.open(UploadFotoComponent, {data: mult});
    dialogRef.afterClosed().subscribe(result => {
      mult = result;
      console.log(mult.url);
    });**/
    this.multimedia.push({
      "nombre": "Prueba",
      //"url": "../../../assets/images/mascotaC.png",
      "url": "https://picsum.photos/400",
      "tipo": "foto"
    });
  }

  showVideoUpload() {
    /**let mult: Multimedia = {"tipo": "video"};
    const dialogRef = this.uploadDialog.open(UploadVideoComponent, {data: mult});
    dialogRef.afterClosed().subscribe(result => {
      mult = result;
      console.log(mult.url);
    });**/
    console.log("Video Uploaded");
    this.multimedia.push({
      "nombre": "Prueba",
      "url": "../../../assets/images/videoC.png",
      "tipo": "video"
    });
  }

  borrarMultimedia(multi: Multimedia) {
    this.multimedia = this.multimedia.filter(obj => obj !== multi);
  }

  ngOnInit() {
  }

}
