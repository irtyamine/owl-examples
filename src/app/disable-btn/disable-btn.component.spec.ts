import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableBtnComponent } from './disable-btn.component';

describe('DisableBtnComponent', () => {
  let component: DisableBtnComponent;
  let fixture: ComponentFixture<DisableBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisableBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
