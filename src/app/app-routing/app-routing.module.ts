import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';

import { PublicidadComponent } from '../publicidad/publicidad/publicidad.component';
import {PublicidadDetailComponent} from '../publicidad/publicidad-detail/publicidad-detail.component';
import {PublicidadCreateComponent} from '../publicidad/publicidad-create/publicidad-create.component';
const routes: Routes = [

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
        path:'publicidades',
        children: [
        {
          path: 'list',
          component: PublicidadComponent,
          outlet: 'publicidadList'
        },
        {
          path: ':id',
          component: PublicidadDetailComponent,
          outlet: 'publicidadDetail'
        },
        {
          path: 'create',
          component: PublicidadCreateComponent,
          outlet: 'publicidadCreate'
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
