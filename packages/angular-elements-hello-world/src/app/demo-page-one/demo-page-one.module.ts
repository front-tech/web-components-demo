import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoPageOneRoutingModule } from './demo-page-one-routing.module';
import { DemoPageOneComponent } from './demo-page-one.component';


@NgModule({
  declarations: [DemoPageOneComponent],
  imports: [
    CommonModule,
    DemoPageOneRoutingModule
  ]
})
export class DemoPageOneModule { }
