import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBarComponent } from './stock-bar.component';

describe('StockBarComponent', () => {
  let component: StockBarComponent;
  let fixture: ComponentFixture<StockBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockBarComponent]
    });
    fixture = TestBed.createComponent(StockBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
