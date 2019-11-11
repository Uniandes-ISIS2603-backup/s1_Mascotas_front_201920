import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicidadListComponent } from './publicidad-list/publicidad-list.component';
import { PublicidadService } from './publicidad.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { PublicidadCreateComponent } from './publicidad-create/publicidad-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import { PublicidadSearchComponent } from './publicidad-search/publicidad-search.component';
import { PublicidadDetailComponent } from './publicidad-detail/publicidad-detail.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule
    ],
  declarations: [PublicidadListComponent, PublicidadCreateComponent, PublicidadSearchComponent, PublicidadDetailComponent],
  exports : [PublicidadListComponent],
  providers: [PublicidadService]
})
export class PublicidadModule { }