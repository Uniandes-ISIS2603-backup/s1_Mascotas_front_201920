import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaPerdidaListComponent } from './mascotaperdida-list/mascotaperdida-list.component';
import { MascotaPerdidaDetailComponent } from './mascotaperdida-detail/mascotaperdida-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [ MascotaPerdidaListComponent, MascotaPerdidaDetailComponent],
  exports: [MascotaPerdidaListComponent]
})
export class MascotaperdidaModule { }