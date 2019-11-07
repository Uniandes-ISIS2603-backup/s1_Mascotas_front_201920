import { Component, OnInit } from '@angular/core';
import { MascotaPerdida } from '../mascotaperdida';
import { MascotaPerdidaService } from '../mascotaperdida.service';

@Component({
  selector: 'app-mascotaperdida-list',
  templateUrl: './mascotaperdida-list.component.html',
  styleUrls: ['./mascotaperdida-list.component.css']
})
export class MascotaPerdidaListComponent implements OnInit {

  mascotaperdidas: MascotaPerdida[];

  constructor(private mascotaperdidaService: MascotaPerdidaService) { }

  ngOnInit() {
    this.getMascotaPerdidas();
  }

  getMascotaPerdidas():void
  {
    this.mascotaperdidaService.getMascotaPerdidas().subscribe(mascotaperdidas => {this.mascotaperdidas =  mascotaperdidas; console.log('cargado')});
  }

}