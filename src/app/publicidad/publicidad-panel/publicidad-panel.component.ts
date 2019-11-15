import { Component, OnInit } from '@angular/core';
import {PublicidadService} from "../publicidad.service";
import {PublicidadDetail} from "../publicidad-detail";

@Component({
  selector: 'app-publicidad-panel',
  templateUrl: './publicidad-panel.component.html',
  styleUrls: ['./publicidad-panel.component.css']
})
export class PublicidadPanelComponent implements OnInit {

  publicidad: PublicidadDetail;

  constructor(private service: PublicidadService) { }

  ngOnInit()
  {
    this.service.getPublicidad().subscribe(p => this.publicidad = p);
  }

}
