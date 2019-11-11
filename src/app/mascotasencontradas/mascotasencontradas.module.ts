import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule, NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import { MatCarouselModule} from '@ngmodule/material-carousel';
import {NgxPermissionsModule} from 'ngx-permissions';

import { EspeciePipe, MascotasencontradasListComponent } from './mascotasencontradas-list/mascotasencontradas-list.component';
import {UploadFotoComponent} from '../multimedia/upload-foto/upload-foto.component';

import { MascotaEncontradaService } from './mascotaencontrada.service';
import { MascotaEncontradaCreateComponent} from './mascota-encontrada-create/mascota-encontrada-create.component';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatGridListModule, MatDialogModule, MatDialog, MatCardModule } from '@angular/material';
import { MultimediaModule } from '../multimedia/multimedia.module';
import { MascotaEncontradaDetailComponent } from './mascota-encontrada-detail/mascota-encontrada-detail.component';
import { ModalDialogModule, ModalDialogService } from 'ngx-modal-dialog';
import { ModalDialogInstanceService } from 'ngx-modal-dialog/src/modal-dialog-instance.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    NgxPermissionsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MultimediaModule,
    MatCardModule,
    ModalDialogModule,
    MatCarouselModule
],
  entryComponents: [UploadFotoComponent],
  declarations: [EspeciePipe, MascotasencontradasListComponent, MascotaEncontradaCreateComponent, MascotaEncontradaDetailComponent],
  providers: [MascotaEncontradaService, ModalDialogService, ModalDialogInstanceService, {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}],
  exports: [EspeciePipe]
})
export class MascotasencontradasModule { }
