import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndeterminateComponent } from './indeterminate.component';

describe('IndeterminateComponent', () => {
  let component: IndeterminateComponent;
  let fixture: ComponentFixture<IndeterminateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndeterminateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndeterminateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
