import { Component, OnInit } from '@angular/core';
import { Publicidad } from '../publicidad';
import { PublicidadService } from '../publicidad.service';

@Component({
  selector: 'app-publicidad-list',
  templateUrl: './publicidad-list.component.html',
  styleUrls: ['./publicidad-list.component.css']
})
export class PublicidadListComponent implements OnInit {

  publicidades: Publicidad[];

  constructor(private publicidadService: PublicidadService) { }

  ngOnInit() {
    this.getPublicidades();
  }

  getPublicidades():void
  {
    this.publicidadService.getPublicidad().subscribe(publicidades => {this.publicidades =  publicidades; console.log('cargado')});
  }

}