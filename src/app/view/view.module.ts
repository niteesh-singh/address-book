import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { OperationsComponent } from './operations/operations.component';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [OperationsComponent, InputComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class ViewModule { }
