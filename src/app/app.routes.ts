import { Routes } from '@angular/router';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  // { path: '-', pathMatch: 'full', redirectTo: 'login' },

  {
    path: '',
    // canActivate: [AuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'empty',
    },
    children: [
      {
        path: 'login',
        // canMatch: [RoleGuard],
        data: {
          title: 'Fazer Login',
        },
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  {
    path: '',
    // canActivate: [AuthGuard],
    component: LayoutComponent,
    data: {
      layout: 'sidebar',
    },
    children: [
      // {
      //   path: 'inicio',
      // },
      {
        path: 'usuarios',
        // canMatch: [RoleGuard],
        data: {
          title: 'Usuários',
          menuKey: 'USERS',
        },
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  // { path: '**', redirectTo: 'login' },
];
