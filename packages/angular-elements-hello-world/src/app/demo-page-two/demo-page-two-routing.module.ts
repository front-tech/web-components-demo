import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoPageTwoComponent } from './demo-page-two.component';

const routes: Routes = [
  {
    path: ':name',
    component: DemoPageTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoPageTwoRoutingModule { }
