import { Component, OnInit } from '@angular/core';
import { ProcesoService } from '../proceso.service';
import { ProcesosDetail } from '../procesos-detail';

@Component({
  selector: 'app-procesos-list',
  templateUrl: './procesos-list.component.html',
  styleUrls: ['./procesos-list.component.css']
})
export class ProcesosListComponent implements OnInit {

   /**
   * Lista de las mascotas adopcion
   */
  procesos: ProcesosDetail[];


  constructor(private procesoService: ProcesoService ) { 
      
    }

  /**
   * Pide al servicio la lista de las mascotas adopcion
   */
  getProcesos(): void {
    this.procesoService.getProcesos()
        .subscribe((proceso) =>{ this.procesos = proceso;
      
        });
  }


  /**
   * This will initialize the component by retrieving the list of mascotas from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.getProcesos();
  }

}
