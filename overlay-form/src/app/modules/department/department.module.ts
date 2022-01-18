import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentManageComponent } from './components/department-manage/department-manage.component';
import { ManageOverlayComponent } from './components/manage-overlay/manage-overlay.component';


@NgModule({
  declarations: [
    DepartmentManageComponent,
    ManageOverlayComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ]
})
export class DepartmentModule { }
