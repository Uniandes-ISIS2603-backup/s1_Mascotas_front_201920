
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, OutletContext } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { PublicidadListComponent } from '../publicidad/publicidad-list/publicidad-list.component';
import { PublicidadDetailComponent } from '../publicidad/publicidad-detail/publicidad-detail.component';
import { PublicidadCreateComponent } from '../publicidad/publicidad-create/publicidad-create.component';
import { MascotaAdopcionDetailComponent } from '../mascotaadopcion/mascotaadopcion-detail/mascotaadopcion-detail.component';
import { MascotaadopcionListComponent } from '../mascotaadopcion/mascotaadopcion-list/mascotaadopcion-list.component';
import { MascotaPerdidaListComponent } from '../mascotaperdida/mascotaperdida-list/mascotaperdida-list.component';
import { ProcesosListComponent } from '../procesos/procesos-list/procesos-list.component';
import { ProcesosDetailComponent} from '../procesos/procesos-detail/procesos-detail.component';
import {ProcesoCreateComponent} from '../procesos/proceso-create/proceso-create.component';
import { MascotaPerdidaDetailComponent } from '../mascotaperdida/mascotaperdida-detail/mascotaperdida-detail.component';
import { MascotasencontradasListComponent } from '../mascotasencontradas/mascotasencontradas-list/mascotasencontradas-list.component';
import { UsuarioListComponent } from '../usuario/usuario-list/usuario-list.component';
import { UsuarioCreateComponent } from '../usuario/usuario-create/usuario-create.component';
import { UsuarioDetailComponent } from '../usuario/usuario-detail/usuario-detail.component';
import { MascotaEncontradaDetailComponent } from '../mascotasencontradas/mascota-encontrada-detail/mascota-encontrada-detail.component';

import { RecompensaListComponent } from '../recompensa/recompensa-list/recompensa-list.component';
import { RecompensaDetailComponent } from '../recompensa/recompensa-detail/recompensa-detail.component';
import { RecompensaCreateComponent } from '../recompensa/recompensa-create/recompensa-create.component';
import {PublicidadSearchComponent} from "../publicidad/publicidad-search/publicidad-search.component";
import { HomeComponent } from '../home/home.component';
import { Page404Component } from '../page404/page404.component';


import { MascotaCreateComponent } from '../mascotaadopcion/mascota-create/mascota-create.component';
import { MascotaPerdidaCreateComponent } from '../mascotaperdida/mascotaperdida-create/mascotaperdida-create.component';
import { MascotaEncontradaCreateComponent } from '../mascotasencontradas/mascota-encontrada-create/mascota-encontrada-create.component';
import {AuthLogoutComponent} from "../auth/auth-logout/auth-logout.component";


const routes: Routes = [
    {
        path: 'mascotasAdopcion',
        //component: MascotaadopcionListComponent,
        children: [
            {
                path: 'list',
                component: MascotaadopcionListComponent
            },
            {
                path: 'create',
                component: MascotaCreateComponent
            },
            {
                path: ':id',
                component: MascotaAdopcionDetailComponent,
                
            }
        ]
    },
    {
        path: 'mascotasPerdidas',
        //component: MascotaPerdidaListComponent,
        children: [{
            path: 'list',
            component: MascotaPerdidaListComponent
        },
            {
                path: 'create',
                component: MascotaPerdidaCreateComponent
            },
            {
                path: ':id',
                component: MascotaPerdidaDetailComponent
            }
        ]
    },
    {
        path: 'mascotasEncontradas',
        children: [{
            path: 'list',
            component: MascotasencontradasListComponent
        },
            {
                path: 'create',
                component: MascotaEncontradaCreateComponent
            },
            {
                path: ':id',
                component: MascotaEncontradaDetailComponent
                //redirectTo: 'mascotasEncontradas/list'
            }
        ]
    },
    {
        path: 'publicidad',
        children: [
            {
                path: 'list',
                component: PublicidadListComponent
            },
            {
                path: 'create',
                component: PublicidadCreateComponent
            },
            {
                path: 'search',
                component: PublicidadSearchComponent,
                children: [{
                    path: ':id',
                    component: PublicidadDetailComponent
                }]
            }

        ]
    },
    {
        path: 'usuarios',
        component: UsuarioListComponent,
        children: [
            {
                path: 'create',
                component: UsuarioCreateComponent
            }

        ]
    },
    {
        path: 'procesos',
        component: ProcesoCreateComponent
    },
    {
      path: 'recompensa',
      //component: RecompensaCreateComponent,
      children: [
          {
              path: 'create',
              component: RecompensaCreateComponent
          },
          {
              path: ':id',
              component:  RecompensaCreateComponent
          }

      ]
  },
  {
    path: 'recompensas',
    component: RecompensaListComponent,
    children: [
        {
            path: 'create',
            component: RecompensaCreateComponent
        },
        {
            path: ':id',
            component:  RecompensaCreateComponent
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
                path: 'sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: 'logout',
                component: AuthLogoutComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['CLIENT', 'ADMIN']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: '**',
        component: Page404Component,
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
