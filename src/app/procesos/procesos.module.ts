import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProcesosListComponent } from './procesos-list/procesos-list.component';
import { ProcesoService } from './proceso.service';
import { ProcesoCreateComponent} from './proceso-create/proceso-create.component';
import { ProcesosDetailComponent } from './procesos-detail/procesos-detail.component';
import { ModalDialogInstanceService } from 'ngx-modal-dialog/src/modal-dialog-instance.service';
import {NgbModule, NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    

  ],
  declarations: [ProcesosDetailComponent, ProcesoCreateComponent, ProcesosListComponent],
  providers: [ProcesoService, ModalDialogInstanceService],
  exports:[ProcesosDetailComponent, ProcesoCreateComponent, ProcesosListComponent]
})
export class ProcesosModule { }
