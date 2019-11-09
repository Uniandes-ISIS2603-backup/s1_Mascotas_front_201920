import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes, OutletContext} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';

import { PublicidadListComponent } from '../publicidad/publicidad-list/publicidad-list.component';
import {PublicidadDetailComponent} from '../publicidad/publicidad-detail/publicidad-detail.component';
import {PublicidadCreateComponent} from '../publicidad/publicidad-create/publicidad-create.component';
import { MascotaAdopcionDetailComponent } from '../mascotaadopcion/mascotaadopcion-detail/mascotaadopcion-detail.component';
import { MascotaadopcionListComponent } from '../mascotaadopcion/mascotaadopcion-list/mascotaadopcion-list.component';

const routes: Routes = [
  {
    path:'publicidad',
    component: PublicidadListComponent,
    children: [
      {
        path: 'create',
        component: PublicidadCreateComponent
      },
    {
      path: ':id',
      component: PublicidadDetailComponent
    }
    
    ]
  },
     {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
        component: AuthLoginComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    },
    
      {
        path: 'mascotas',
        children: [{
          path: 'list',
          component: MascotaadopcionListComponent
        },
        {
          path: ':id',
          component: MascotaAdopcionDetailComponent,
          outlet: 'detail'
        }
        ]
      }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
