import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTimerComponent } from './control-timer.component';

describe('ControlTimerComponent', () => {
  let component: ControlTimerComponent;
  let fixture: ComponentFixture<ControlTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
