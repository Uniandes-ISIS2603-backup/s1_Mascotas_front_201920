import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicidadListComponent } from './publicidad-list/publicidad-list.component';
import { PublicidadService } from './publicidad.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { PublicidadCreateComponent } from './publicidad-create/publicidad-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicidadSearchComponent } from './publicidad-search/publicidad-search.component';
import { PublicidadDetailComponent } from './publicidad-detail/publicidad-detail.component';
import { PublicidadPanelComponent } from './publicidad-panel/publicidad-panel.component';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatGridListModule, MatDialogModule, MatCardModule } from '@angular/material';
import {NgbModule, NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        NgbModule,

        MatDialogModule,
        MatCardModule,
        MatInputModule,
        MatGridListModule,
        MatButtonModule,
        MatSelectModule,
        CommonModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule
    ],
  declarations: [PublicidadListComponent, PublicidadCreateComponent, PublicidadSearchComponent, PublicidadDetailComponent, PublicidadPanelComponent],
    exports: [PublicidadListComponent, PublicidadPanelComponent],
  providers: [PublicidadService]
})
export class PublicidadModule { }
