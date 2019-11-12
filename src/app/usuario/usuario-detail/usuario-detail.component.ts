import { Component, OnInit , Input,  ViewContainerRef} from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { UsuarioService} from "../usuario.service";
import { UsuarioDetail } from "../usuario-detail";
import { Usuario} from "../usuario";
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
/**
 * Clase del componente detalle
 */
export class UsuarioDetailComponent implements OnInit {
/**
 * Contructor
 */
  constructor( 

    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService

              ) { }
/**
 * Detalle del usuario
 */
  usuarioDetail: UsuarioDetail;


  /**
   * Id del usuario
   */
  @Input() 
  id: number;

  /**
   * 
   */
  loader: any;
/**
 * Metodo para suscribirse al usuario del servicio
 */
  getUsuarioDetail():void
   {
     this.usuarioService.getUsuario(this.id).subscribe( 
        usuariodetail => ( this.usuarioDetail= usuariodetail )
     );
   }

/**
 * argumento para cargar el modulo
 * @param params 
 */
  onLoad(params) {

    this.id = parseInt(params["d"]);
    this.usuarioDetail = new UsuarioDetail();
    this.getUsuarioDetail();
  }
  /**
   * Asignacion del id del usuario y del detail
   */
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id)
    {
      this.usuarioDetail = new UsuarioDetail();
      this.getUsuarioDetail();
    }
  }
}