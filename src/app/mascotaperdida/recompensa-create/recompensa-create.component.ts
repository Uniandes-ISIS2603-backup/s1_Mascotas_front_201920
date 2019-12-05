import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Recompensa } from "../recompensa";
import { RecompensaService } from "../recompensa.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recompensa-create',
  templateUrl: './recompensa-create.component.html',
  styleUrls: ['./recompensa-create.component.css']
})
export class RecompensaCreateComponent implements OnInit {
  /**
   * Formato de la recompensa
   */
  recompensaForm: FormGroup;
  /**
   * Recibe como parametro el id de la mascota perdida
   */
  @Input() id: number;

  loader: any;

  /**
   * Constructor de la recompensa
   * @param recompensaService  Servicio de recompensa
   * @param formBuilder 
   * @param toastr 
   */
  constructor(
    private recompensaService: RecompensaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.recompensaForm = this.formBuilder.group({
      monto: ["", Validators.required],

    });
  }

  /**
   * Crea una recompensa 
   * @param newRecompensa Recompensa
   */
  createRecompensa(newRecompensa: Recompensa) {
    this.showSuccess();
    // Process checkout data here
    console.warn("La recompensa se ha enviado", newRecompensa);
    newRecompensa.pagado = false;
    this.recompensaService.createRecompensa(newRecompensa).subscribe(o => {
      this.showSuccess();
    });

    this.recompensaForm.reset();

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
    this.toastr.success("Recompensa", "Creada exitosamente!", { "progressBar": true, timeOut: 3000 });
  }

}