import { Component, OnInit } from '@angular/core';
import { MascotaAdopcion } from '../mascotaadopcion';
import { MascotaAdopcionService } from '../mascotaadopcion.service';

@Component({
  selector: 'app-mascotaadopcion-list',
  templateUrl: './mascotaadopcion-list.component.html',
  styleUrls: ['./mascotaadopcion-list.component.css']
})
export class MascotaadopcionListComponent implements OnInit {

  constructor(private mascotaAdopcionService: MascotaAdopcionService) { }

  ngOnInit() {
     this.getMascotas();
  }

  getMascotas(): void {
   this.mascotaAdopcionService.getMascotas().subscribe(mascotas => this.mascotas = mascotas);
    }

   mascotas: MascotaAdopcion[] = []
   


}