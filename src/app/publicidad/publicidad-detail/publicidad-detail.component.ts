import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Publicidad } from '../publicidad';
import { PublicidadService } from '../publicidad.service';

@Component({
  selector: 'app-publicidad-detail',
  templateUrl: './publicidad-detail.component.html',
  styleUrls: ['./publicidad-detail.component.css']
})
export class PublicidadDetailComponent implements OnInit {

  publicidad: Publicidad;

  @Input() id: number;

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

    this.id = parseInt(params['id']);
    console.log(this.id);
    this.publicidad = new Publicidad();
    this.getPublicidad();
  }

  getPublicidad():void
  {
    this.publicidadService.getPublicidad(this.id).subscribe(publicidades => this.publicidad =  publicidades);
  }

}