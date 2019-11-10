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
export class MascotaAdopcionDetailComponent implements OnInit {

  constructor( 

    private mascotaadopcionService: MascotaAdopcionService,
    private route: ActivatedRoute,
    private router: Router,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService

              ) { }

  mascotaDetail: MascotaAdopcionDetail;


  
  @Input() 
  mascota_id: number;

  
  loader: any;

  getMascotaDetail():void
   {
     this.mascotaadopcionService.getMascotaDetail(this.mascota_id).subscribe( 
        mascotadetail => ( this.mascotaDetail= mascotadetail )
     );
   }


  onLoad(params) {

    this.mascota_id = parseInt(params["d"]);
    this.mascotaDetail = new MascotaAdopcionDetail();
    this.getMascotaDetail();
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}