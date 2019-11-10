import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule, NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatGridListModule, MatDialogModule, MatDialog, MatCardModule } from '@angular/material';
import { MultimediaModule } from '../multimedia/multimedia.module';




import { EspeciePipe,  MascotaPerdidaListComponent } from './mascotaperdida-list/mascotaperdida-list.component';
import { MascotaPerdidaDetailComponent } from './mascotaperdida-detail/mascotaperdida-detail.component';
import { MascotaPerdidaService } from './mascotaperdida.service';
import { MascotaPerdidaCreateComponent } from './mascotaperdida-create/mascotaperdida-create.component';



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
    MatInputModule,
    MultimediaModule 
  ],
  declarations: [ EspeciePipe, MascotaPerdidaListComponent, MascotaPerdidaDetailComponent, MascotaPerdidaCreateComponent],
  providers: [MascotaPerdidaService, {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}],
  exports: [EspeciePipe]
})
export class MascotaperdidaModule { }