import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Proceso } from "../proceso";
import { ProcesoService } from "../proceso.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-proceso-create',
  templateUrl: './proceso-create.component.html',
  styleUrls: ['./proceso-create.component.css']
})
export class ProcesoCreateComponent implements OnInit {
  /**
   * Formato de la recompensa
   */
  procesoForm: FormGroup;
  /**
   * Recibe como parametro el id de la mascota perdida
   */
  @Input() id: number;

  loader: any;

  /**
   * Constructor del proceso
   * @param ProcesoService  Servicio de proceso
   * @param formBuilder 
   * @param toastr 
   */
  constructor(
    private procesoService: ProcesoService,private router: Router,private route: ActivatedRoute,
    private toastr: ToastrService) { }

  /**
   * Crea una proceso 
   */
  createProceso() {
    let proceso:Proceso = new Proceso;
    proceso= {
      id:1,
      estado: "En Proceso",
      comentario: " ",
      calificacion: 5
    }

    this.showSuccess();
    // Process checkout data here
    console.warn("El proceso de adopcion se ha enviado");

    this.procesoService.createProceso(proceso).subscribe(o => {
      this.showSuccess();
    })
    this.router.navigate(['/mascotasAdopcion/list']);
    return proceso;

  }
  /**
* The method which initializes the component.
* We need to create the author so it is never considered as undefined
*/
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  onLoad(params) {

    this.id = parseInt(params['id']);

  }
  onCreate(){
    this.createProceso();
  }

  /**
     * Destroy
     */
  ngOnDestroy() {
    this.loader.unsubscribe();
  }
  /**
   * Muestra que se pudo crear
   */
  showSuccess() {
    this.toastr.success("Proceso", "Creado exitosamente!", { "progressBar": true, timeOut: 3000 });
  }

}
