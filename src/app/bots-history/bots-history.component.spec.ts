import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotsHistoryComponent } from './bots-history.component';

describe('BotsHistoryComponent', () => {
  let component: BotsHistoryComponent;
  let fixture: ComponentFixture<BotsHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotsHistoryComponent]
    });
    fixture = TestBed.createComponent(BotsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
