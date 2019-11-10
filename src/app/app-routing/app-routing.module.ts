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
import { MascotaPerdidaDetailComponent } from '../mascotaperdida/mascotaperdida-detail/mascotaperdida-detail.component';
import { MascotasencontradasListComponent } from '../mascotasencontradas/mascotasencontradas-list/mascotasencontradas-list.component';
import { UsuarioListComponent } from '../usuario/usuario-list/usuario-list.component';
import { UsuarioCreateComponent } from '../usuario/usuario-create/usuario-create.component';
import { MascotaCreateComponent } from '../mascotaadopcion/mascota-create/mascota-create.component';
import { MascotaPerdidaCreateComponent } from '../mascotaperdida/mascotaperdida-create/mascotaperdida-create.component';
import { MascotaEncontradaCreateComponent } from '../mascotasencontradas/mascota-encontrada-create/mascota-encontrada-create.component';

const routes: Routes = [
  {
    path: 'mascotasAdopcion',
    children: [{
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
    path: 'mascotasPerdidas',
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
      //component: MascotaEncontradaDetailComponent
      redirectTo: 'mascotasEncontradas/list'
    }
    ]
  },
  {
    path: 'publicidad',
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
