import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {AuthModule} from './auth/auth.module';

import {MascotaAdopcionModule} from './mascotaadopcion/mascotaadopcion.module'
import {MascotasencontradasModule} from './mascotasencontradas/mascotasencontradas.module';
import {MultimediaModule} from './multimedia/multimedia.module';
import {UsuarioModule} from './usuario/usuario.module';
import {PublicidadModule} from './publicidad/publicidad.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { MascotaperdidaModule } from './mascotaperdida/mascotaperdida.module';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
       
        MascotasencontradasModule,
        MascotaperdidaModule,
        MultimediaModule,
        UsuarioModule,
        PublicidadModule,
        AuthModule,
        MascotaAdopcionModule,
        FormsModule,
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        MatFormFieldModule,
        MatInputModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
