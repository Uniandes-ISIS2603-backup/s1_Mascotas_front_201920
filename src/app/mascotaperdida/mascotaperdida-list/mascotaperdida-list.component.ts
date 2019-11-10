import { Component, OnInit, PipeTransform  } from '@angular/core';
import { MascotaPerdida } from '../mascotaperdida';
import { MascotaPerdidaService } from '../mascotaperdida.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Pipe} from '@angular/core';

@Pipe({name: 'especie'})
export class EspeciePipe implements PipeTransform{
  transform(idEspecie : number) {
    let especie: string;
    switch(idEspecie)
    {
      case 0: {
        especie = 'Perro';
        break;
      }
      case 1: {
        especie = 'Gato';
        break;
      }
      default: {
        especie = 'Animal Mistico';
        break;
      }
    }
    return especie;
  }
}

@Component({
  selector: 'app-mascotaperdida-list',
  templateUrl: './mascotaperdida-list.component.html',
  styleUrls: ['./mascotaperdida-list.component.css']
})
export class MascotaPerdidaListComponent implements OnInit {

  mascotasPerdidas: MascotaPerdida[];

  constructor(private mascotaperdidaService: MascotaPerdidaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMascotaPerdidas();
  }

  getMascotaPerdidas():void
  {
    this.mascotaperdidaService.getMascotaPerdidas().subscribe(mascotaperdidas => {this.mascotasPerdidas =  mascotaperdidas; console.log('cargado')});
  }
  
  setDate(ob: Date): Date{
    console.log(ob.toString().split('[UTC]')[0]);
    return new Date(ob.toString().split('[UTC]')[0]);
  }
  onCreate() {
    console.log("HOLIGUES");
    this.router.navigate(["mascotasPerdidas", "create"])
  }
  onInfo( id: number)
  {
    console.log(id);
    this.router.navigate(["mascotasPerdidas", id])
  }

}