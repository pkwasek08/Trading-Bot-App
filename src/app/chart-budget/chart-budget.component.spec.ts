import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBudgetComponent } from './chart-budget.component';

describe('ChartBudgetComponent', () => {
  let component: ChartBudgetComponent;
  let fixture: ComponentFixture<ChartBudgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartBudgetComponent]
    });
    fixture = TestBed.createComponent(ChartBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
