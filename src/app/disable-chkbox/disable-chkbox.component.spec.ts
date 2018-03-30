import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableChkboxComponent } from './disable-chkbox.component';

describe('DisableChkboxComponent', () => {
  let component: DisableChkboxComponent;
  let fixture: ComponentFixture<DisableChkboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisableChkboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableChkboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
