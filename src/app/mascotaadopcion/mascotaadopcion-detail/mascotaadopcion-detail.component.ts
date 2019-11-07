import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { MascotaAdopcionService} from "../mascotaadopcion.service";
import { MascotaAdopcionDetail } from "../mascotaadopcion-detail";

@Component({
  selector: 'app-mascotaadopcion-detail',
  templateUrl: './mascotaadopcion-detail.component.html',
  styleUrls: ['./mascotaadopcion-detail.component.css']
})
export class MascotaAdopcionDetailComponent implements OnInit {

  constructor( private mascotaadopcionService: MascotaAdopcionService,
    private route: ActivatedRoute) { }

  mascotaDetail: MascotaAdopcionDetail;

    loader: any;

  @Input() 
  mascota_id: number;

  getMascotaDetail():void
   {
     this.mascotaadopcionService.getMascotaDetail(this.mascota_id).subscribe( 
        mascotadetail => ( this.mascotaDetail= mascotadetail )
     );
   }


  onLoad(params) {

    this.mascota_id = parseInt(params['id']);
    console.log(" mascotas " + this.mascota_id);
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