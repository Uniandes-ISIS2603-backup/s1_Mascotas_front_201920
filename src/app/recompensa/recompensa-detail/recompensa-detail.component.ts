import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Recompensa } from '../recompensa';
import { RecompensaService } from '../recompensa.service';

@Component({
  selector: 'app-recompensa-detail',
  templateUrl: './recompensa-detail.component.html',
  styleUrls: ['./recompensa-detail.component.css']
})
export class RecompensaDetailComponent implements OnInit {

  recompensa: Recompensa;

  @Input() id: number;

  loader: any;

  constructor(private recompensaService: RecompensaService,
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
    this.recompensa = new Recompensa();
    this.getRecompensa();
  }

  getRecompensa(): void {
    this.recompensaService.getRecompensa(this.id).subscribe(recompensas => {
      this.recompensa = recompensas;
    });
  }
  onBack(){
    this.router.navigate(["recompensa", "list"]);
  }


}