import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableOptionComponent } from './disable-option.component';

describe('DisableOptionComponent', () => {
  let component: DisableOptionComponent;
  let fixture: ComponentFixture<DisableOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisableOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
