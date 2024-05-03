import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { FullComponent } from '../layouts/full/full.component';

export const PagesRoutes: Routes = [
  {
    path: "",
    redirectTo: "category",
    pathMatch: "full"
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: "category",
        loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
      },
      {
        path: "reports",
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: "support",
        loadChildren: () => import('./support/support.module').then(m => m.SupportModule)
      },
      {
        path: 'starter',
        loadChildren: () =>
          import('./pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'dashboards',
        loadChildren: () =>
          import('./dashboards/dashboards.module').then(
            (m) => m.DashboardsModule
          ),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./forms/forms.module').then((m) => m.FormModule),
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./charts/charts.module').then((m) => m.ChartsModule),
      },
      {
        path: 'apps',
        loadChildren: () =>
          import('./apps/apps.module').then((m) => m.AppsModule),
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./widgets/widgets.module').then((m) => m.WidgetsModule),
      },
      {
        path: 'tables',
        loadChildren: () =>
          import('./tables/tables.module').then((m) => m.TablesModule),
      },
      {
        path: 'theme-pages',
        loadChildren: () =>
          import('./theme-pages/theme-pages.module').then(
            (m) => m.ThemePagesModule
          ),
      },
      {
        path: 'authentication',
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
      // {
      //   path: 'landingpage',
      //   loadChildren: () =>
      //     import('./theme-pages/landingpage/landingpage.module').then(
      //       (m) => m.LandingPageModule
      //     ),
      // },
    ]

  },

];
