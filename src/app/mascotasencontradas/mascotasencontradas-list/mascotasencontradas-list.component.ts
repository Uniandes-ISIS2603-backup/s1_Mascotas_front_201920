import { Component, OnInit } from '@angular/core';
import {MascotaEncontrada} from '../mascotaencontrada';
import {MascotaEncontradaService} from '../mascotaencontrada.service';

@Component({
  selector: 'app-mascotasencontradas-list',
  templateUrl: './mascotasencontradas-list.component.html',
  styleUrls: ['./mascotasencontradas-list.component.css'],
})
export class MascotasencontradasListComponent implements OnInit {

  /**
   * Lista de las mascotas encontradas
   */
  mascotasEncontradas: MascotaEncontrada[] = [{especie: 'Perro'}, {especie: 'Gato'}];

  /**
   * Constructor del componente
   * @param mascotaEncontradaService Servicio para mascotas
   */
  constructor(private mascotaEncontradaService: MascotaEncontradaService) { }

  /**
   * Pide al servicio la lista de las mascotas encontradas
   */
  getEditorials(): void {
    this.mascotaEncontradaService
      .getMascotasEncontradas()
        .subscribe((mascotasEncontradas) => this.mascotasEncontradas = mascotasEncontradas);
  }

  /**
   * This will initialize the component by retrieving the list of mascotas from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.getEditorials();
  }

}
