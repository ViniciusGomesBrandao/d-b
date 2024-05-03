import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: "",
    component: ReportsComponent,
    children: [
      {
        path: '',
        redirectTo: "new",
        pathMatch: "full"
      },
      {
        path: "new/:category_id",
        component: NewComponent
      },
      {
        path: "list",
        component: ListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
