import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecompensaListComponent } from './recompensa-list/recompensa-list.component';
import { RecompensaService } from './recompensa.service';
import { RecompensaDetailComponent } from './recompensa-detail/recompensa-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { RecompensaCreateComponent } from './recompensa-create/recompensa-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RecompensaListComponent, RecompensaDetailComponent, RecompensaCreateComponent],
  exports : [RecompensaListComponent],
  providers: [RecompensaService]
})
export class RecompensaModule { }