import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecompensaService } from './recompensa.service';
import { RecompensaDetailComponent } from './recompensa-detail/recompensa-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { RecompensaCreateComponent } from './recompensa-create/recompensa-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecompensaListComponent } from './recompensa-list/recompensa-list.component';
import { RouterTestingModule } from '@angular/router/testing';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterTestingModule
   // RecompensaListComponent
  ],
  declarations: [ RecompensaListComponent, 
    RecompensaDetailComponent, RecompensaCreateComponent],
  exports : [RecompensaListComponent],
  providers: [RecompensaService]
})
export class RecompensaModule { }