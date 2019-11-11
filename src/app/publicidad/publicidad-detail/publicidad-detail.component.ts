import {Component, OnInit} from '@angular/core';
import {Publicidad} from "../publicidad";
import {PublicidadService} from "../publicidad.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {ModalDialogService} from "ngx-modal-dialog";

@Component({
  selector: 'app-publicidad-detail',
  templateUrl: './publicidad-detail.component.html',
  styleUrls: ['./publicidad-detail.component.css']
})
export class PublicidadDetailComponent implements OnInit {

  id: number;

  publicidad: Publicidad = new Publicidad();

  navigationSubscription;

  constructor(
      private service: PublicidadService,
      private route: ActivatedRoute,
      private modalDialogService: ModalDialogService,
      private router: Router
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
    for (var e = aux.length -1; i >=0; e--) {
      res+= aux.charAt(e);
    }
    return  "$"+res;
  }

}

