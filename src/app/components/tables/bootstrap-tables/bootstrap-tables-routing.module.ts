import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapTablesComponent } from './bootstrap-tables.component';

const routes: Routes = [
 {
  path: '',
  component: BootstrapTablesComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrapTablesRoutingModule { }
