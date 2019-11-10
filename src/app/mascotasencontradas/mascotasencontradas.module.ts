import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule, NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import { EspeciePipe, MascotasencontradasListComponent } from './mascotasencontradas-list/mascotasencontradas-list.component';

import { MascotaEncontradaService } from './mascotaencontrada.service';
import { MascotaEncontradaCreateComponent } from './mascota-encontrada-create/mascota-encontrada-create.component';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatButtonModule } from '@angular/material';

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
    MatButtonModule
],
  declarations: [EspeciePipe, MascotasencontradasListComponent, MascotaEncontradaCreateComponent],
  providers: [MascotaEncontradaService, {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}],
  exports: [EspeciePipe]
})
export class MascotasencontradasModule { }
