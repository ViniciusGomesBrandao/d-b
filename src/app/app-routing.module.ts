import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "pages",
    pathMatch: "full"
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: "pages",
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
      },
      {
        path: "auth",
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: "landingpage",
        loadChildren: () => import('./pages/theme-pages/landingpage/landingpage.module').then(m => m.LandingPageModule)
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
