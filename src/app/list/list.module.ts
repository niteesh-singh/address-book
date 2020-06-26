import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ShowListComponent } from './show-list/show-list.component';


@NgModule({
  declarations: [ShowListComponent],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
