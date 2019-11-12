import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, OutletContext } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';

import { PublicidadListComponent } from '../publicidad/publicidad-list/publicidad-list.component';
import { PublicidadCreateComponent } from '../publicidad/publicidad-create/publicidad-create.component';

import { MascotaAdopcionDetailComponent } from '../mascotaadopcion/mascotaadopcion-detail/mascotaadopcion-detail.component';
import { MascotaadopcionListComponent } from '../mascotaadopcion/mascotaadopcion-list/mascotaadopcion-list.component';
import { MascotaCreateComponent } from '../mascotaadopcion/mascota-create/mascota-create.component';

import { MascotaPerdidaListComponent } from '../mascotaperdida/mascotaperdida-list/mascotaperdida-list.component';
import { MascotaPerdidaDetailComponent } from '../mascotaperdida/mascotaperdida-detail/mascotaperdida-detail.component';
import { MascotaPerdidaCreateComponent } from '../mascotaperdida/mascotaperdida-create/mascotaperdida-create.component';

import { MascotasencontradasListComponent } from '../mascotasencontradas/mascotasencontradas-list/mascotasencontradas-list.component';
import { MascotaEncontradaCreateComponent } from '../mascotasencontradas/mascota-encontrada-create/mascota-encontrada-create.component';

import { UsuarioListComponent } from '../usuario/usuario-list/usuario-list.component';
import { UsuarioCreateComponent } from '../usuario/usuario-create/usuario-create.component';
import { MascotaEncontradaDetailComponent } from '../mascotasencontradas/mascota-encontrada-detail/mascota-encontrada-detail.component';

import { RecompensaListComponent } from '../recompensa/recompensa-list/recompensa-list.component';
import { RecompensaDetailComponent } from '../recompensa/recompensa-detail/recompensa-detail.component';
import { RecompensaCreateComponent } from '../recompensa/recompensa-create/recompensa-create.component';
import {PublicidadSearchComponent} from "../publicidad/publicidad-search/publicidad-search.component";
import {PublicidadDetailComponent} from "../publicidad/publicidad-detail/publicidad-detail.component";
import { HomeComponent } from '../home/home.component';




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
        component: MascotaAdopcionDetailComponent
      }
    ]
  },
  {
    path: 'recompensa',
    children: [
      {
        path: 'list',
        component: RecompensaListComponent
      },
    {
      path: 'create',
      component: RecompensaCreateComponent
    },
    {
      path: ':id',
      component: RecompensaDetailComponent
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
    }
    ]
  },
  {
    path: 'publicidad',
    children: [
      {
        path: "list",
        component: PublicidadListComponent
      },
      {
        path: 'create',
        component: PublicidadCreateComponent
      },
      {
        path: 'search',
        component: PublicidadSearchComponent,
        children: [
          {
            path: ':id',
            component: PublicidadDetailComponent
          }
        ]
      }
    ]
  },
  {
    path: 'usuarios',
    children: [
      {
        path: 'list',
        component: UsuarioListComponent
      },
      {
        path: 'sign-up',
        component: UsuarioCreateComponent
      },


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
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'home',
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
