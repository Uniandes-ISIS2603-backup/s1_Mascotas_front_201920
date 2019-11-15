import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Publicidad } from '../publicidad';
import { PublicidadService } from '../publicidad.service';
import {PublicidadDetail} from "../publicidad-detail";
import {Multimedia} from "../../multimedia/multimedia";

//German Rozo
@Component({
  selector: 'app-publicidad-detail',
  templateUrl: './publicidad-detail.component.html',
  styleUrls: ['./publicidad-detail.component.css']
})
export class PublicidadDetailComponent implements OnInit {

  publicidad: PublicidadDetail;
  costo : string;
  inicial: Multimedia = null;

  @Input() id: number = -1;

  loader: any;

  constructor(private publicidadService: PublicidadService,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

  onLoad(params) {

    if(this.id == -1)
    {
      this.id = parseInt(params['id']);
    }
    this.publicidad = new PublicidadDetail();
    this.getPublicidad();
    
  }

  getPublicidad():void
  {
    this.publicidadService.getPublicidad(this.id).subscribe(publicidades =>
    {
      this.publicidad =  Object.assign(new PublicidadDetail(), publicidades);
    });
  }


}