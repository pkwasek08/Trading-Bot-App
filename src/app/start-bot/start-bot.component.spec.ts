import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartBotComponent } from './start-bot.component';

describe('StartBotComponent', () => {
  let component: StartBotComponent;
  let fixture: ComponentFixture<StartBotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartBotComponent]
    });
    fixture = TestBed.createComponent(StartBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
