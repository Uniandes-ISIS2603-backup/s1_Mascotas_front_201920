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
  /**
   * Recompensa  
  */ 
  recompensa: Recompensa;

  /**
   * Id de la recompensa
   */
  @Input() id: number;

  /**
   * Loader
   */
  loader: any;

  /**
   * Constructor de recompensa
   * @param recompensaService Servicio de recompensa
   * @param router ruta 
   * @param route  ruta activa
   */
  constructor(private recompensaService: RecompensaService,
    private router: Router, 
    private route: ActivatedRoute) { }
    /**
    * The method which initializes the component.
    * We need to create the author so it is never considered as undefined
    */
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  /**
   * On detroy
   */
  ngOnDestroy() {
    this.loader.unsubscribe();
  }

  /**
   * Actualizar la recompensa con el id
   * @param params id de la recompensa
   */
  onLoad(params) {

    this.id = parseInt(params['id']);
    this.recompensa = new Recompensa();
    this.getRecompensa();
  }

  /**
   * Da la recompensa segun el id
   */
  getRecompensa(): void {
    this.recompensaService.getRecompensa(this.id).subscribe(recompensas => {
      this.recompensa = recompensas;
    });
  }

  /**
   * Se devuelve al list
   */
  onBack(){
    this.router.navigate(["recompensa", "list"]);
  }


}