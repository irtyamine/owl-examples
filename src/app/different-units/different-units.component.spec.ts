import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentUnitsComponent } from './different-units.component';

describe('DifferentUnitsComponent', () => {
  let component: DifferentUnitsComponent;
  let fixture: ComponentFixture<DifferentUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentUnitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
