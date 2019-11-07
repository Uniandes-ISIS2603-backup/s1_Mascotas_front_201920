import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaadopcionListComponent } from './mascotaadopcion-list/mascotaadopcion-list.component';
import { MascotaAdopcionService } from './mascotaadopcion.service';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { MascotaCreateComponent } from './mascota-create/mascota-create.component';


@NgModule({
    imports: [       
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [MascotaadopcionListComponent, MascotaCreateComponent],
    providers: [ MascotaAdopcionService],
    exports:[MascotaadopcionListComponent, MascotaCreateComponent]
})
export class MascotaAdopcionModule { }