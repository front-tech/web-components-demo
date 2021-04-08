import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPageOneComponent } from './demo-page-one.component';

describe('DemoPageOneComponent', () => {
  let component: DemoPageOneComponent;
  let fixture: ComponentFixture<DemoPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoPageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
