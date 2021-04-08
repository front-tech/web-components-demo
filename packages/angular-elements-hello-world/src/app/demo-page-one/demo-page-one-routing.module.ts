import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoPageOneComponent } from './demo-page-one.component';

const routes: Routes = [
  {
    path: '',
    component: DemoPageOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoPageOneRoutingModule { }
