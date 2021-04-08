import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo-root-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'angular-elements-hello-world';
}
