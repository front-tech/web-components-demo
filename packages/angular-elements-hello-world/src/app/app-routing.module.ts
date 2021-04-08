import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'demo-page-one',
    loadChildren: () => import('./demo-page-one/demo-page-one.module').then(m => m.DemoPageOneModule)
  },
  {
    path: 'demo-page-two',
    loadChildren: () => import('./demo-page-two/demo-page-two.module').then(m => m.DemoPageTwoModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
