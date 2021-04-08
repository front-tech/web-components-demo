import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoPageTwoRoutingModule } from './demo-page-two-routing.module';
import { DemoPageTwoComponent } from './demo-page-two.component';


@NgModule({
  declarations: [DemoPageTwoComponent],
  imports: [
    CommonModule,
    DemoPageTwoRoutingModule
  ]
})
export class DemoPageTwoModule { }
