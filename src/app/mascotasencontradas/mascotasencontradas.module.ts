import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import { MascotasencontradasListComponent } from './mascotasencontradas-list/mascotasencontradas-list.component';

import { MascotaEncontradaService } from './mascotaencontrada.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPermissionsModule
],
  declarations: [MascotasencontradasListComponent],
  providers: [MascotaEncontradaService],
  exports: [MascotasencontradasListComponent]
})
export class MascotasencontradasModule { }
