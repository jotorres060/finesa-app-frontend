import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

import { DashboardComponent } from './core/dashboard/dashboard.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./core/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: '**',
        pathMatch: 'full',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
