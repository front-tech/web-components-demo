import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPageTwoComponent } from './demo-page-two.component';

describe('DemoPageTwoComponent', () => {
  let component: DemoPageTwoComponent;
  let fixture: ComponentFixture<DemoPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoPageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
