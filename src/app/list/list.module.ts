import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { ListRoutingModule } from './list-routing.module';
import { ShowListComponent } from './show-list/show-list.component';


@NgModule({
  declarations: [ShowListComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class ListModule { }
