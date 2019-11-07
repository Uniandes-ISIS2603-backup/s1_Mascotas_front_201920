import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaPerdidaListComponent } from './mascotaperdida-list/mascotaperdida-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ MascotaPerdidaListComponent],
  exports: [MascotaPerdidaListComponent]
})
export class MascotaperdidaModule { }