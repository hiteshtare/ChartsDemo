/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DoughNutChartComponent } from './dough-nut-chart.component';

describe('DoughNutChartComponent', () => {
  let component: DoughNutChartComponent;
  let fixture: ComponentFixture<DoughNutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoughNutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughNutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
