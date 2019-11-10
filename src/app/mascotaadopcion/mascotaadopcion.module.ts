import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaadopcionListComponent } from './mascotaadopcion-list/mascotaadopcion-list.component';
import { MascotaAdopcionService } from './mascotaadopcion.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MascotaCreateComponent } from './mascota-create/mascota-create.component';
import { MascotaAdopcionDetailComponent } from './mascotaadopcion-detail/mascotaadopcion-detail.component';


@NgModule({
    imports: [       
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [MascotaadopcionListComponent, MascotaCreateComponent, MascotaAdopcionDetailComponent],
    providers: [ MascotaAdopcionService],
    exports:[MascotaadopcionListComponent, MascotaCreateComponent, MascotaAdopcionDetailComponent]
})
export class MascotaAdopcionModule { }