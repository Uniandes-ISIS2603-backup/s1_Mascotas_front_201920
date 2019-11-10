import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaPerdidaListComponent } from './mascotaperdida-list/mascotaperdida-list.component';
import { MascotaPerdidaDetailComponent } from './mascotaperdida-detail/mascotaperdida-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { MascotaPerdidaService } from './mascotaperdida.service';
import { MascotaPerdidaCreateComponent } from './mascotaperdida-create/mascotaperdida-create.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ MascotaPerdidaListComponent, MascotaPerdidaDetailComponent, MascotaPerdidaCreateComponent],
  providers: [MascotaPerdidaService],
  exports: [MascotaPerdidaListComponent]
})
export class MascotaperdidaModule { }