import { Component, OnInit } from '@angular/core';
import { Publicidad } from '../publicidad';
import { PublicidadService } from '../publicidad.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicidad-list',
  templateUrl: './publicidad-list.component.html',
  styleUrls: ['./publicidad-list.component.css']
})
export class PublicidadListComponent implements OnInit {

  publicidades: Publicidad[];

  constructor(private publicidadService: PublicidadService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPublicidades();
  }

  getPublicidades():void
  {
    this.publicidadService.getPublicidades().subscribe(publicidades => {this.publicidades =  publicidades; console.log('cargado')});
  }

  onSelection(publicidad: Publicidad)
  {
    this.router.navigate( [publicidad.id+""], {relativeTo: this.route})
  }

  onCreate()
  {
    this.router.navigate( ["publicidad","create"])
  }
}