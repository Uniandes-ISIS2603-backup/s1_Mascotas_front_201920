import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { MascotaEncontradaDetail } from '../mascotaencontrada-detail';
import { MascotaEncontradaService } from '../mascotaencontrada.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { MascotaEncontrada } from '../mascotaencontrada';

@Component({
  selector: 'app-mascota-encontrada-detail',
  templateUrl: './mascota-encontrada-detail.component.html',
  styleUrls: ['./mascota-encontrada-detail.component.css']
})
export class MascotaEncontradaDetailComponent implements OnInit {

  tipos = ['foto', 'video'];

  id: number;

  data: MascotaEncontradaDetail;

  otherMascotas: MascotaEncontrada[];

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
    private service: MascotaEncontradaService,
    private route: ActivatedRoute,
    private modalDialogService: ModalDialogService,
    private router: Router,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
  ) {
    //This is added so we can refresh the view when one of the mascotas in
    //the "Otras encontradas" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  /**
    * The method which retrieves the details of the mascota that
    * we want to show
    */
  getMascota() {
    this.service.getMascotaEncontradaDetail(this.id)
      .subscribe((result) => {
        this.data = result;
        if(this.data.multimedia.length == 0)
        {
          this.data.multimedia.push({
            "url": "../../../assets/images/mascota.png"
          });
        }
      })
  }

  /**
    * This method retrieves all the masctoas in the page to show them in the list
    */
   getOtherMascotas(): void {
    this.service.getMascotasEncontradas()
        .subscribe(mascotas => {
            this.otherMascotas = mascotas;
            this.otherMascotas = this.otherMascotas.filter(mascota => mascota.id !== this.data.id);
        });
}

    /**
* This function deletes the mascota from the Mascotas
*/
deleteMascota(): void {
  this.modalDialogService.openDialog(this.viewRef, {
      title: 'Borrar Mascota Encontrada',
      childComponent: SimpleModalComponent,
      data: {text: 'Confirma eliminar la mascota'},
      actionButtons: [
          {
              text: 'Si',
              buttonClass: 'btn btn-danger',
              onAction: () => {
                  this.service.deleteMascotaEncontrada(this.data.id).subscribe(mascota => {
                      this.toastrService.success("The mascota ", "Mascota deleted");
                      this.router.navigate(['mascotasEncontradas/list']);
                  }, err => {
                      this.toastrService.error(err, "Error");
                  });
                  return true;
              }
          },
          {text: 'No', onAction: () => true}
      ]
  });
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
        this.data = {};
        this.getMascota();
        this.getOtherMascotas();
  }

  /**
    * This method helps to refresh the view when we need to load another book into it
    * when one of the other books in the list is clicked
    */
   ngOnDestroy() {
    if (this.navigationSubscription) {
        this.navigationSubscription.unsubscribe();
    }
}

}
