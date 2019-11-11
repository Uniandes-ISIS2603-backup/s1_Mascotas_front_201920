import { Component, OnInit , Input,  ViewContainerRef} from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { MascotaAdopcionService} from "../mascotaadopcion.service";
import { MascotaAdopcionDetail } from "../mascotaadopcion-detail";
import { MascotaAdopcion} from "../mascotaadopcion";
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-mascotaadopcion-detail',
  templateUrl: './mascotaadopcion-detail.component.html',
  styleUrls: ['./mascotaadopcion-detail.component.css']
})
/**
 * Clase del componente detalle
 */
export class MascotaAdopcionDetailComponent implements OnInit {
/**
 * Contructor
 */
  constructor( 

    private mascotaadopcionService: MascotaAdopcionService,
    private route: ActivatedRoute,
    private router: Router,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService

              ) { }
/**
 * Detalle de la mascota
 */
  mascotaDetail: MascotaAdopcionDetail;


  /**
   * Id de la mascota adopcion
   */
  @Input() 
  id: number;

  /**
   * 
   */
  loader: any;
/**
 * Metodo para suscribirse a la mascota del servicio mascota adopcion
 */
  getMascotaDetail():void
   {
     this.mascotaadopcionService.getMascotaDetail(this.id).subscribe( 
        mascotadetail => ( this.mascotaDetail= mascotadetail )
     );
   }

/**
 * argumento para cargar el modulo
 * @param params 
 */
  onLoad(params) {

    this.id = parseInt(params["d"]);
    this.mascotaDetail = new MascotaAdopcionDetail();
    this.getMascotaDetail();
  }
  /**
   * Asignacion del id de la mascota y del detail
   */
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id){
    this.mascotaDetail = new MascotaAdopcionDetail();
    this.getMascotaDetail();
  }

 

}
}