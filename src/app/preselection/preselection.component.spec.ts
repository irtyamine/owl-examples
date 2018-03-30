import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreselectionComponent } from './preselection.component';

describe('PreselectionComponent', () => {
  let component: PreselectionComponent;
  let fixture: ComponentFixture<PreselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
