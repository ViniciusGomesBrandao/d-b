import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { CategoryComponent } from './category.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    ListComponent,
    CategoryComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    TablerIconsModule.pick(TablerIcons),
    MaterialModule,
    CategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule
  ],
})
export class CategoryModule { }
