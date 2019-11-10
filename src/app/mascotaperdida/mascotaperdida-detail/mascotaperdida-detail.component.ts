import { Component, OnInit, Input } from '@angular/core';
import { MascotaPerdida } from '../mascotaperdida';
import { MascotaPerdidaService } from '../mascotaperdida.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-mascotaperdida-detail',
  templateUrl: './mascotaperdida-detail.component.html',
  styleUrls: ['./mascotaperdida-detail.component.css']
})
export class MascotaPerdidaDetailComponent implements OnInit {

  mascotaperdida: MascotaPerdida;

  @Input() id: number;

  loader: any;

  constructor(private mascotaperdidaService: MascotaPerdidaService, 
    private router: Router, 
    private route: ActivatedRoute) { }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

  onLoad(params) {

    this.id = parseInt(params['id']);
    this.mascotaperdida = new MascotaPerdida();
    this.getMascotaPerdida();
  }

  getMascotaPerdida():void
  {
    this.mascotaperdidaService.getMascotaPerdida(this.id).subscribe(mascotaperdidas => this.mascotaperdida =  mascotaperdidas);
  }
  onBack(){
    this.router.navigate(["mascotasPerdidas", "list"]);
  }

}