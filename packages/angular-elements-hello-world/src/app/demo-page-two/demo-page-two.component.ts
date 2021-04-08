import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo-page-two',
  templateUrl: './demo-page-two.component.html',
  styleUrls: ['./demo-page-two.component.scss']
})
export class DemoPageTwoComponent implements OnInit {
  name: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
  }

}
