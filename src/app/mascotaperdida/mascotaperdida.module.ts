import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaperdidaListComponent } from './mascotaperdida-list/mascotaperdida-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ MascotaperdidaListComponent],
  exports: [MascotaperdidaListComponent]
})
export class MascotaperdidaModule { }