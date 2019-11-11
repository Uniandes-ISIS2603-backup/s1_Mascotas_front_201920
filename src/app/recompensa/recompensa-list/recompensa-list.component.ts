import { Component, OnInit } from '@angular/core';
import { Recompensa } from '../recompensa';
import { RecompensaService } from '../recompensa.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recompensa-list',
  templateUrl: './recompensa-list.component.html',
  styleUrls: ['./recompensa-list.component.css']
})
export class RecompensaListComponent implements OnInit {
 
  /**
   * Recompensas
   */
  recompensas: Recompensa[];

  /**
   * Constructor de recompensa list
   * @param recompensaService Servicio de recompensa
   * @param router ruta
   * @param route ruta activa
   */
  constructor(private recompensaService: RecompensaService, private router: Router, private route: ActivatedRoute) { }

  /**
    * The method which initializes the component.
    * We need to create the author so it is never considered as undefined
    */
  ngOnInit() {
    this.getRecompensas();
  }

  /**
   * Da las recompensas
   */
  getRecompensas(): void {
    this.recompensaService.getRecompensas().subscribe(
      recompensas => 
      { 
        this.recompensas = recompensas; 
   
      });
  }

  /**
   * Va a los detalles de la recompensa
   * @param id de la recompensa
   */
  onSelection(id: number) {
    this.router.navigate(["recompensa", id])
  }
  /**
   * Va a crear la recompensa
   */
  onCreate() {
    this.router.navigate(["recompensa", "create"])
  }



 
}