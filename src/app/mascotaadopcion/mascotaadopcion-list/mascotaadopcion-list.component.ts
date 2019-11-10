import { Component, OnInit } from '@angular/core';
import { MascotaAdopcion } from '../mascotaadopcion';
import { MascotaAdopcionService } from '../mascotaadopcion.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mascotaadopcion-list',
  templateUrl: './mascotaadopcion-list.component.html',
  styleUrls: ['./mascotaadopcion-list.component.css']
})
export class MascotaadopcionListComponent implements OnInit {


  mascotas: MascotaAdopcion[];

  constructor(private mascotaAdopcionService: MascotaAdopcionService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
     this.getMascotas();
  }

  getMascotas(): void {
   this.mascotaAdopcionService.getMascotas().subscribe(mascotas => this.mascotas = mascotas);
    }

    onCreate() {
      this.router.navigate(["mascotasAdopcion", "create"])
    }


   


}