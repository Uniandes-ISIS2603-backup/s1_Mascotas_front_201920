import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaadopcionListComponent, EspeciePipe } from './mascotaadopcion-list/mascotaadopcion-list.component';
import { MascotaAdopcionService } from './mascotaadopcion.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MascotaCreateComponent } from './mascota-create/mascota-create.component';
import { MascotaAdopcionDetailComponent } from './mascotaadopcion-detail/mascotaadopcion-detail.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatGridListModule, MatDialogModule, MatCardModule } from '@angular/material';
import { MultimediaModule } from '../multimedia/multimedia.module';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { MatCarouselModule } from '@ngmodule/material-carousel';


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
    declarations: [EspeciePipe, MascotaadopcionListComponent, MascotaCreateComponent, MascotaAdopcionDetailComponent],
    providers: [ MascotaAdopcionService],
    exports:[EspeciePipe, MascotaadopcionListComponent, MascotaCreateComponent, MascotaAdopcionDetailComponent]
})
/**
 * Modulo principal de la MascotaAdopcion
 */
export class MascotaAdopcionModule { }