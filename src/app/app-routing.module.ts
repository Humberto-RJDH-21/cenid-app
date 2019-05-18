import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { BlankComponent } from './layouts/blank/blank.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'session/login',
    pathMatch: 'full',
  },
  {
    path: 'cenid',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: './cenid/cenid.module#CenidModule'
      }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    loadChildren:
      './cenid/cenid.module#CenidModule'
  },
  {
    path: 'session',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren: './sessions/sessions.module#SessionsModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'session/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
