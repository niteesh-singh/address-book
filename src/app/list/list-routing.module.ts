import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowListComponent } from './show-list/show-list.component';
import { OperationsComponent } from '../view/operations/operations.component';

const routes: Routes = [
  { path: '', component: ShowListComponent },
  { path: 'edit/:id', component: OperationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
