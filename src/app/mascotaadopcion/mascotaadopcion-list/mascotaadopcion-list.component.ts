import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { MascotaAdopcion } from '../mascotaadopcion';
import { MascotaAdopcionService } from '../mascotaadopcion.service';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-mascotaadopcion-list',
  templateUrl: './mascotaadopcion-list.component.html',
  styleUrls: ['./mascotaadopcion-list.component.css']
})
/**
 * Clase del componente de listar
 */
export class MascotaadopcionListComponent implements OnInit {

  
  /**
   * Lista para las MascotaAdopcion
   */
  mascotas: MascotaAdopcion[];
/**
 * Contructor
 * @param mascotaAdopcionService servicio para acceder al recurso de las mascotas
 * @param router router de navegacion para la ruta
 */
  constructor(private mascotaAdopcionService: MascotaAdopcionService, private router: Router, private route: ActivatedRoute) { 
    this.mascotas=[];
  }

  /**
   * Tre las macotas al inicializar
   */
  ngOnInit() {
     this.getMascotas();
  }
/**
 * Metodo para la subscripcion al servicio de las mascotas 
 */
  getMascotas(): void {
   this.mascotaAdopcionService.getMascotas().subscribe(mascotas => this.mascotas = mascotas);
    }
/**
 * Metodo para la ruta del get all
 */
    onCreate() {
      this.router.navigate(["mascotasAdopcion", "create"])
    }
/**
 * 
 * @param id Metodo para la ruta del get
 */
    onDetail(id: number){
      this.router.navigate(["mascotasAdopcion", id])
    }




   


}