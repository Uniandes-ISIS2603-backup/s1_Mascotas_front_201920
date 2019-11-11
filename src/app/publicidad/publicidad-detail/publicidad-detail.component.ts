import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Publicidad} from "../publicidad";
import {PublicidadService} from "../publicidad.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {ModalDialogService} from "ngx-modal-dialog";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-publicidad-detail',
  templateUrl: './publicidad-detail.component.html',
  styleUrls: ['./publicidad-detail.component.css']
})
export class PublicidadDetailComponent implements OnInit {

  tipos = ['foto', 'video'];

  id: number;

  publicidad: Publicidad = new Publicidad();

  /**
   * The suscription which helps to know when a new mascota
   * needs to be loaded*/
  navigationSubscription;

  /**
   * The constructor of the component
   * @param service The mascota service which communicates with the API
   * @param route The route which helps to retrieves the id of the mascota to be shown
   * @param router The router which is needed to know when the component needs to reload
   * @param toastrService The toastr to show messages to the user
   */
  constructor(
      private service: PublicidadService,
      private route: ActivatedRoute,
      private modalDialogService: ModalDialogService,
      private router: Router,
      private viewRef: ViewContainerRef,
      private toastrService: ToastrService
  )
  {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }


  getPublicidad() {
    this.service.getPublicidad(this.id)
        .subscribe(p => {
          this.publicidad = p;
        })
  }

  /**
   *
   * @param ob
   */
  setDate(ob: Date): Date{
    return ob != undefined ? new Date(ob.toString().split('[UTC]')[0]): new Date();
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getPublicidad();
  }

  getCosto(publicidad:Publicidad): string
  {
    let t: number = publicidad.costo;

    let str: string = String(t);
    let aux: string = str.charAt(str.length-1);

    for (var i = str.length-2; i >= 0; i--) {

      if (i % 3 == 0 )
      {
        aux += "." + str.charAt(i);
      }
      else aux += str.charAt(i);
    }
    let res: string ="";
    for (var i = aux.length -1; i >=0; i--) {
      res+= aux.charAt(i);
    }
    return  "$"+res;
  }

}

